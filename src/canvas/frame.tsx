import * as React from "react"
import { cn } from "cn"

import { CanvasContext } from "@/gallery/example"
import type { Doc } from "@/gallery/registry"

export type PreviewMode = "current" | "light" | "dark" | "both"

export type FrameSize = { height: number; wide: boolean }

// One card for each component, placed by the masonry layout of the canvas.
// It reports its height, and whether it has wide examples (from one-column
// sections), so the layout can give it 2 columns.
export function Frame({
  doc,
  mode,
  showLabels,
  lowDetail,
  viewport,
  style,
  placeholderHeight,
  onMeasure,
}: {
  doc: Doc
  mode: PreviewMode
  showLabels: boolean
  // When the canvas is zoomed far out, a card shows only its name.
  lowDetail: boolean
  viewport: HTMLElement | null
  // Position and width from the masonry layout.
  style: React.CSSProperties
  // The last measured height, for a card that is not rendered.
  placeholderHeight: number
  onMeasure: (slug: string, size: FrameSize) => void
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)
  const rendered = visible && !lowDetail

  // Only cards near the screen render their components.
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

  // A card that is not rendered keeps the last measured height, so the
  // layout does not jump.
  React.useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new ResizeObserver(([entry]) => {
      if (!entry.target.hasAttribute("data-rendered")) return
      // Wide when it has wide examples, or when its content does not fit
      // in one column.
      const content = [
        ...entry.target.querySelectorAll("[data-ui-preview] > div"),
      ]
      onMeasure(doc.slug, {
        height: entry.borderBoxSize[0].blockSize,
        wide:
          !!entry.target.querySelector("[data-wide]") ||
          content.some(
            (element) => element.scrollWidth > element.clientWidth + 1
          ),
      })
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [doc.slug, onMeasure])

  const copies = mode === "both" ? [false, true] : [mode === "dark"]
  const { Page } = doc

  return (
    <div
      ref={ref}
      data-frame={doc.slug}
      data-rendered={rendered || undefined}
      aria-label={doc.name}
      role="group"
      className="absolute flex flex-col gap-3"
      style={style}
    >
      {copies.map((dark) => (
        <div
          key={String(dark)}
          data-ui-preview
          className={cn(
            "overflow-hidden rounded-3xl border bg-background text-foreground shadow-xs",
            dark && "dark"
          )}
        >
          {rendered ? (
            <CanvasContext.Provider value={{ labels: showLabels }}>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-5 p-6">
                <Page />
              </div>
            </CanvasContext.Provider>
          ) : (
            <div
              className="flex items-center justify-center p-6 text-muted-foreground"
              style={{
                height:
                  (placeholderHeight - 12 * (copies.length - 1)) /
                  copies.length,
              }}
            >
              <span className="text-2xl font-semibold tracking-tight">
                {doc.name}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
