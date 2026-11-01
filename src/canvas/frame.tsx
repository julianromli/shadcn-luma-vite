import * as React from "react"
import { cn } from "cn"

import { CanvasContext } from "@/gallery/example"
import type { Doc } from "@/gallery/registry"

// A frame fits its components, from 320px to 960px wide. Wide components
// (from one-column sections) take the full 960px.
const FIRST_SIZE_GUESS = { width: 480, height: 320 }

export type PreviewMode = "current" | "light" | "dark" | "both"

export function Frame({
  doc,
  mode,
  showLabel,
  selected,
  lowDetail,
  viewport,
  onSelect,
}: {
  doc: Doc
  mode: PreviewMode
  showLabel: boolean
  selected: boolean
  // When the canvas is zoomed far out, a frame shows only its name.
  lowDetail: boolean
  viewport: HTMLElement | null
  onSelect: () => void
}) {
  const copies = mode === "both" ? [false, true] : [mode === "dark"]

  return (
    <div data-frame={doc.slug} className="flex flex-col gap-3">
      {showLabel && (
        <button
          type="button"
          data-ui-chrome
          onClick={onSelect}
          className={cn(
            "w-fit rounded-lg px-1.5 py-0.5 text-start text-sm font-medium text-muted-foreground outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30",
            selected && "text-foreground"
          )}
        >
          {doc.name}
        </button>
      )}
      <div className="flex items-start gap-6">
        {copies.map((dark) => (
          <FrameBody
            key={String(dark)}
            doc={doc}
            dark={dark}
            selected={selected}
            lowDetail={lowDetail}
            showLabels={showLabel}
            viewport={viewport}
          />
        ))}
      </div>
    </div>
  )
}

function FrameBody({
  doc,
  dark,
  selected,
  lowDetail,
  showLabels,
  viewport,
}: {
  doc: Doc
  dark: boolean
  selected: boolean
  lowDetail: boolean
  showLabels: boolean
  viewport: HTMLElement | null
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)
  const [size, setSize] = React.useState(FIRST_SIZE_GUESS)

  // Only frames near the screen render their components.
  React.useEffect(() => {
    const element = ref.current
    if (!element || !viewport) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { root: viewport, rootMargin: "50%" }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [viewport])

  // An empty frame keeps the last size, so the layout does not jump.
  React.useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new ResizeObserver(([entry]) => {
      if (entry.target.hasAttribute("data-rendered")) {
        const box = entry.borderBoxSize[0]
        setSize({ width: box.inlineSize, height: box.blockSize })
      }
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const rendered = visible && !lowDetail
  const { Page } = doc

  return (
    <div
      ref={ref}
      data-ui-preview
      data-rendered={rendered || undefined}
      className={cn(
        "max-w-[960px] min-w-80 shrink-0 overflow-hidden rounded-3xl border bg-background text-foreground shadow-sm has-[[data-wide]]:w-[960px]",
        selected && "ring-2 ring-ring",
        dark && "dark"
      )}
      style={rendered ? undefined : size}
    >
      {rendered ? (
        <CanvasContext.Provider value={{ labels: showLabels }}>
          <div className="flex flex-wrap items-end justify-center gap-x-10 gap-y-8 p-8">
            <Page />
          </div>
        </CanvasContext.Provider>
      ) : (
        <div className="flex h-full items-center justify-center p-8 text-muted-foreground">
          <span className="text-3xl font-semibold tracking-tight">
            {doc.name}
          </span>
        </div>
      )}
    </div>
  )
}
