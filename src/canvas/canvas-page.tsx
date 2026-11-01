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
import { Frame, type PreviewMode } from "@/canvas/frame"
import { usePanZoom, type Rect } from "@/canvas/use-pan-zoom"
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
  frameGap: [96, 16, 400, 8],
  showLabels: true,
} satisfies DialConfig

// Below this zoom, frames show only their name.
const LOW_DETAIL_SCALE = 0.2

// Foundations (the Motion page) has no components, so it is not shown.
const columns = CATEGORIES.filter((category) => category !== "Foundations")
  .map((category) => ({
    category,
    items: docs.filter((doc) => doc.category === category),
  }))
  .filter((column) => column.items.length)

export function CanvasPage() {
  const settings = useDialKitController("Canvas", canvasConfig, {
    id: "ds-canvas",
    persist: true,
  })
  const { previewMode, background, frameGap, showLabels } = settings.values
  const mode = previewMode as PreviewMode

  const pz = usePanZoom({ x: 48, y: 96, scale: 0.6 })
  const { view, viewportRef } = pz
  const layerRef = React.useRef<HTMLDivElement>(null)
  const [viewport, setViewport] = React.useState<HTMLDivElement | null>(null)
  const [selected, setSelected] = React.useState<string | null>(null)

  React.useEffect(() => setViewport(viewportRef.current), [viewportRef])

  // A light subtree is not possible inside html.dark (Tailwind's dark:
  // variant matches any .dark ancestor). So these modes set html to light
  // while the canvas shows them.
  React.useEffect(() => {
    if (mode !== "light" && mode !== "both") return
    const html = document.documentElement
    const wasDark = html.classList.contains("dark")
    html.classList.replace("dark", "light")
    return () => {
      if (wasDark) html.classList.replace("light", "dark")
    }
  }, [mode])

  const frameRect = (slug: string): Rect | null => {
    const layer = layerRef.current
    const frame = layer?.querySelector(`[data-frame="${slug}"]`)
    if (!layer || !frame) return null
    const box = frame.getBoundingClientRect()
    const origin = layer.getBoundingClientRect()
    return {
      x: (box.left - origin.left) / view.scale,
      y: (box.top - origin.top) / view.scale,
      width: box.width / view.scale,
      height: box.height / view.scale,
    }
  }

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

  const fitFrame = (slug: string) => {
    const rect = frameRect(slug)
    if (rect) pz.fitRect({ ...rect, height: Math.min(rect.height, 900) })
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
      "2": () => selected && fitFrame(selected),
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
    <div className="relative h-svh w-full overflow-hidden bg-muted/40">
      <div
        ref={viewportRef}
        tabIndex={0}
        role="application"
        aria-label="Component canvas. Drag the background, or hold Space and drag, to pan. Ctrl or Command and scroll to zoom. Arrow keys pan. Plus and minus zoom. 0 zooms to 100%. 1 fits all frames. 2 fits the selected frame."
        data-panning={pz.panning || undefined}
        onKeyDown={onKeyDown}
        className="absolute inset-0 touch-none outline-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-panning:cursor-grabbing"
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
          className="absolute top-0 left-0 flex origin-top-left items-start data-animating:transition-transform data-animating:duration-(--duration-fast) data-animating:ease-(--ease-smooth-out)"
          data-animating={pz.animating || undefined}
          style={{
            transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
            gap: frameGap,
          }}
        >
          {columns.map((column) => (
            <section
              key={column.category}
              aria-label={column.category}
              data-canvas-background
              className="flex flex-col"
              style={{ gap: frameGap / 2 }}
            >
              {showLabels && (
                <h2
                  data-ui-chrome
                  className="text-3xl font-semibold tracking-tight text-foreground"
                >
                  {column.category}
                </h2>
              )}
              {column.items.map((doc) => (
                <Frame
                  key={doc.slug}
                  doc={doc}
                  mode={mode}
                  showLabel={showLabels}
                  selected={selected === doc.slug}
                  lowDetail={view.scale < LOW_DETAIL_SCALE}
                  viewport={viewport}
                  onSelect={() => {
                    setSelected(doc.slug)
                    fitFrame(doc.slug)
                  }}
                />
              ))}
            </section>
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
