import * as React from "react"
import { cn } from "cn"

import type { Doc } from "@/gallery/registry"

export const FRAME_WIDTH = 960
const FIRST_HEIGHT_GUESS = 1200

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
      <div className="flex gap-6">
        {copies.map((dark) => (
          <FrameBody
            key={String(dark)}
            doc={doc}
            dark={dark}
            selected={selected}
            lowDetail={lowDetail}
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
  viewport,
}: {
  doc: Doc
  dark: boolean
  selected: boolean
  lowDetail: boolean
  viewport: HTMLElement | null
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)
  const [height, setHeight] = React.useState(FIRST_HEIGHT_GUESS)

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

  // An empty frame keeps the last height, so the layout does not jump.
  React.useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new ResizeObserver(([entry]) => {
      if (entry.target.hasAttribute("data-rendered")) {
        setHeight(entry.contentRect.height)
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
        "shrink-0 overflow-hidden rounded-3xl border bg-background text-foreground shadow-sm ring-offset-4 ring-offset-transparent",
        selected && "ring-2 ring-ring",
        dark && "dark"
      )}
      style={{
        width: FRAME_WIDTH,
        minHeight: rendered ? undefined : height,
      }}
    >
      {rendered ? (
        <div className="flex flex-col gap-12 p-8">
          <Page />
        </div>
      ) : (
        <div
          className="flex items-center justify-center p-8 text-muted-foreground"
          style={{ height }}
        >
          <span className="text-7xl font-semibold tracking-tight">
            {doc.name}
          </span>
        </div>
      )}
    </div>
  )
}
