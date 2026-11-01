import * as React from "react"
import { useDialKitController, type DialConfig } from "dialkit"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowLeft02Icon,
  MinusSignIcon,
  PlusSignIcon,
  SquareArrowExpand01Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Separator } from "@/components/ui/separator"
import { Frame, type FrameSize, type PreviewMode } from "@/canvas/frame"
import { usePanZoom } from "@/canvas/use-pan-zoom"
import { CATEGORIES, docs } from "@/gallery/registry"

const PREVIEW_MODES: { value: PreviewMode; label: string }[] = [
  { value: "current", label: "Current theme" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "both", label: "Light and dark" },
]

const canvasConfig = {
  previewMode: { type: "select", options: PREVIEW_MODES },
  background: { type: "select", options: ["dots", "grid", "plain"] },
  gap: [24, 8, 120, 4],
  showLabels: false,
} satisfies DialConfig

// Below this zoom, cards show only their name.
const LOW_DETAIL_SCALE = 0.2

// The masonry layout: cards are one column wide, or 2 columns when they
// have wide examples. Each card goes where its columns are the shortest,
// like a photo gallery.
const COLUMNS = 14
const COLUMN_WIDTH = 360
const FIRST_HEIGHT_GUESS = 280

// Foundations (the Motion page) has no components, so it is not shown.
const cards = CATEGORIES.filter(
  (category) => category !== "Foundations"
).flatMap((category) => docs.filter((doc) => doc.category === category))

type Placement = { left: number; top: number; width: number }

function masonry(sizes: Record<string, FrameSize>, gap: number) {
  const heights: number[] = Array(COLUMNS).fill(0)
  const placements: Record<string, Placement> = {}

  for (const doc of cards) {
    const size = sizes[doc.slug]
    const span = size?.wide ? 2 : 1
    let column = 0
    let top = Infinity
    for (let start = 0; start + span <= COLUMNS; start++) {
      const bottom = Math.max(...heights.slice(start, start + span))
      if (bottom < top) {
        top = bottom
        column = start
      }
    }
    placements[doc.slug] = {
      left: column * (COLUMN_WIDTH + gap),
      top,
      width: span * COLUMN_WIDTH + (span - 1) * gap,
    }
    const height = size?.height ?? FIRST_HEIGHT_GUESS
    for (let index = column; index < column + span; index++) {
      heights[index] = top + height + gap
    }
  }

  return {
    placements,
    width: COLUMNS * COLUMN_WIDTH + (COLUMNS - 1) * gap,
    height: Math.max(...heights) - gap,
  }
}

export function CanvasPage() {
  const settings = useDialKitController("Canvas", canvasConfig, {
    id: "ds-canvas",
    persist: true,
  })
  const { previewMode, background, gap, showLabels } = settings.values
  const mode = previewMode as PreviewMode

  const pz = usePanZoom({ x: 48, y: 80, scale: 0.75 })
  const { view, viewportRef } = pz
  const layerRef = React.useRef<HTMLDivElement>(null)
  const [viewport, setViewport] = React.useState<HTMLDivElement | null>(null)
  const [sizes, setSizes] = React.useState<Record<string, FrameSize>>({})
  const layout = masonry(sizes, gap)

  const onMeasure = React.useCallback((slug: string, size: FrameSize) => {
    setSizes((current) => {
      const last = current[slug]
      if (
        last &&
        last.wide === size.wide &&
        Math.abs(last.height - size.height) < 1
      ) {
        return current
      }
      // A card stays wide once it has shown wide examples.
      return {
        ...current,
        [slug]: { ...size, wide: size.wide || !!last?.wide },
      }
    })
  }, [])

  React.useEffect(() => setViewport(viewportRef.current), [viewportRef])

  // A light subtree is not possible inside html.dark (Tailwind's dark:
  // variant matches any .dark ancestor). So these modes set html to light
  // while the canvas shows them.
  // A layout effect, so the class changes before the new cards get styles.
  React.useLayoutEffect(() => {
    if (mode !== "light" && mode !== "both") return
    const html = document.documentElement
    const wasDark = html.classList.contains("dark")
    html.classList.replace("dark", "light")
    return () => {
      if (wasDark) html.classList.replace("light", "dark")
    }
  }, [mode])

  const fitAll = () => {
    const layer = layerRef.current
    if (layer) {
      pz.fitRect({
        x: 0,
        y: 0,
        width: layer.offsetWidth,
        height: layer.offsetHeight,
      })
    }
  }

  const onKeyDown = (event: React.KeyboardEvent) => {
    // Only when the canvas itself has focus, not a control in a frame.
    if (event.target !== event.currentTarget) return
    const step = event.shiftKey ? 500 : 50
    const keys: Record<string, () => void> = {
      ArrowLeft: () => pz.panBy(step, 0),
      ArrowRight: () => pz.panBy(-step, 0),
      ArrowUp: () => pz.panBy(0, step),
      ArrowDown: () => pz.panBy(0, -step),
      "+": () => pz.zoomTo(view.scale * 1.25, undefined, true),
      "=": () => pz.zoomTo(view.scale * 1.25, undefined, true),
      "-": () => pz.zoomTo(view.scale / 1.25, undefined, true),
      "0": () => pz.zoomTo(1, undefined, true),
      "1": fitAll,
    }
    const action = keys[event.key]
    if (action) {
      event.preventDefault()
      action()
    }
  }

  const backgroundSize = 24 * view.scale
  const backgroundImage =
    background === "dots"
      ? "radial-gradient(circle, var(--border) 1.5px, transparent 1.5px)"
      : background === "grid"
        ? "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)"
        : undefined

  return (
    // overflow-clip and not overflow-hidden: a focused control in a card must
    // not scroll the canvas (and the toolbar) out of view.
    <div className="relative h-svh w-full overflow-clip bg-muted/40">
      <div
        ref={viewportRef}
        tabIndex={0}
        role="application"
        aria-label="Component canvas. Drag the background, or hold Space and drag, to pan. Ctrl or Command and scroll to zoom. Arrow keys pan. Plus and minus zoom. 0 zooms to 100%. 1 fits all components."
        data-panning={pz.panning || undefined}
        onKeyDown={onKeyDown}
        // The viewport is the IntersectionObserver root, so it keeps
        // overflow-hidden. Focus can still scroll it, so reset that.
        onScroll={(event) => {
          event.currentTarget.scrollTop = 0
          event.currentTarget.scrollLeft = 0
        }}
        className="absolute inset-0 touch-none overflow-hidden outline-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-panning:cursor-grabbing"
        style={{
          backgroundImage,
          backgroundSize: `${backgroundSize}px ${backgroundSize}px`,
          backgroundPosition: `${view.x}px ${view.y}px`,
        }}
      >
        <div
          ref={layerRef}
          data-canvas-background
          onTransitionEnd={(event) => {
            if (event.target === event.currentTarget) pz.onAnimationEnd()
          }}
          className="absolute top-0 left-0 origin-top-left data-animating:transition-transform data-animating:duration-(--duration-fast) data-animating:ease-(--ease-smooth-out)"
          data-animating={pz.animating || undefined}
          style={{
            transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
            width: layout.width,
            height: layout.height,
          }}
        >
          {cards.map((doc) => (
            <Frame
              // Remount on a mode change: Chrome keeps the old ::placeholder
              // color when the html class changes from dark to light.
              key={`${doc.slug}-${mode}`}
              doc={doc}
              mode={mode}
              showLabels={showLabels}
              lowDetail={view.scale < LOW_DETAIL_SCALE}
              viewport={viewport}
              style={layout.placements[doc.slug]}
              placeholderHeight={sizes[doc.slug]?.height ?? FIRST_HEIGHT_GUESS}
              onMeasure={onMeasure}
            />
          ))}
        </div>
      </div>

      <div
        data-ui-chrome
        className="absolute top-3 left-3 z-10 flex items-center gap-1 rounded-2xl border bg-background/90 p-1 shadow-sm backdrop-blur"
      >
        <Button
          variant="ghost"
          size="sm"
          render={<a href="#/" />}
          nativeButton={false}
        >
          <HugeiconsIcon
            icon={ArrowLeft02Icon}
            strokeWidth={2}
            data-icon="inline-start"
          />
          Gallery
        </Button>
        <Separator orientation="vertical" className="mx-1 h-4" />
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Zoom out"
          onClick={() => pz.zoomTo(view.scale / 1.25, undefined, true)}
        >
          <HugeiconsIcon icon={MinusSignIcon} strokeWidth={2} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="w-16 tabular-nums"
          aria-label="Zoom to 100%"
          onClick={() => pz.zoomTo(1, undefined, true)}
        >
          {Math.round(view.scale * 100)}%
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Zoom in"
          onClick={() => pz.zoomTo(view.scale * 1.25, undefined, true)}
        >
          <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} />
        </Button>
        <Button variant="ghost" size="sm" onClick={fitAll}>
          <HugeiconsIcon
            icon={SquareArrowExpand01Icon}
            strokeWidth={2}
            data-icon="inline-start"
          />
          Fit all
        </Button>
        <Separator orientation="vertical" className="mx-1 h-4" />
        <NativeSelect
          size="sm"
          aria-label="Preview mode"
          value={mode}
          onChange={(event) =>
            settings.setValue("previewMode", event.target.value)
          }
        >
          {PREVIEW_MODES.map((item) => (
            <NativeSelectOption key={item.value} value={item.value}>
              {item.label}
            </NativeSelectOption>
          ))}
        </NativeSelect>
      </div>
    </div>
  )
}
