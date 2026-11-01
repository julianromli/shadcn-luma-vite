import * as React from "react"
import { cn } from "cn"

import { CanvasContext } from "@/gallery/example"
import type { Doc } from "@/gallery/registry"

export type PreviewMode = "current" | "light" | "dark" | "both"

export type FrameSize = { height: number; wide: boolean }

// One card for each component, placed by the masonry layout of the canvas.
// It reports its height, and whether it has wide examples (from one-column
// sections), so the layout can give it 2 columns.
//
// It is memoized: a canvas render (for example, a new zoom percentage) does
// not render the 63 cards again.
export const Frame = React.memo(function Frame({
  doc,
  mode,
  showLabels,
  lowDetail,
  viewport,
  style,
  placeholderHeight,
  premount,
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
  // The canvas mounts cards one at a time in idle time, before they come
  // near the screen, so a first pan does not have to build them.
  premount: boolean
  onMeasure: (slug: string, size: FrameSize) => void
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [seen, setSeen] = React.useState(false)
  const rendered = (seen || premount) && !lowDetail

  // A card renders its components when it first comes near the screen (or
  // when the canvas pre-mounts it), and then stays mounted, so a pan does
  // not build heavy cards again. The first render is a transition, so it
  // does not block a pan.
  React.useEffect(() => {
    const element = ref.current
    if (!element || !viewport) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        React.startTransition(() => setSeen(true))
        observer.disconnect()
      },
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
      const wide =
        !!entry.target.querySelector("[data-wide]") ||
        content.some((element) => element.scrollWidth > element.clientWidth + 1)
      const width = entry.borderBoxSize[0].inlineSize
      onMeasure(doc.slug, { height: entry.borderBoxSize[0].blockSize, wide })

      // After a measure at the final width, the browser can skip the layout
      // and paint of this card while it is off the screen. Not before: the
      // masonry needs the real height, also for a pre-mounted card. A card
      // that must be wide is final only when it has 2 columns (more than
      // 400px; one column is 360px).
      if (!wide || width > 400) {
        for (const copy of entry.target.children) {
          if (copy instanceof HTMLElement) copy.style.contentVisibility = "auto"
        }
      }
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
            "overflow-hidden rounded-3xl border bg-background text-foreground shadow-xs [contain-intrinsic-size:auto_280px]",
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
})
