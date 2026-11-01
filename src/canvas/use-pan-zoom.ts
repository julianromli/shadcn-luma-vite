import * as React from "react"

export type View = { x: number; y: number; scale: number }
export type Rect = { x: number; y: number; width: number; height: number }

export const MIN_SCALE = 0.1
export const MAX_SCALE = 2

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

// Popups (menus, selects, tooltips) are in portals at 100% size. They close
// when the canvas moves, so they do not float away from their trigger.
function closePopups() {
  const target = document.activeElement ?? document.body
  target.dispatchEvent(
    new KeyboardEvent("keydown", { key: "Escape", bubbles: true })
  )
}

function isEditable(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable ||
      !!target.closest("input, textarea, select, [contenteditable='true']"))
  )
}

export function usePanZoom(initial: View) {
  const viewportRef = React.useRef<HTMLDivElement>(null)
  const [view, setViewState] = React.useState(initial)
  const [animating, setAnimating] = React.useState(false)
  const [panning, setPanning] = React.useState(false)
  const viewRef = React.useRef(view)

  const setView = React.useCallback((next: View, animate = false) => {
    viewRef.current = next
    setAnimating(animate)
    setViewState(next)
  }, [])

  // Zooms so that the content point under `point` (viewport pixels) stays
  // under it.
  const zoomTo = React.useCallback(
    (scale: number, point?: { x: number; y: number }, animate = false) => {
      const viewport = viewportRef.current
      if (!viewport) return
      const current = viewRef.current
      const next = clamp(scale, MIN_SCALE, MAX_SCALE)
      const px = point?.x ?? viewport.clientWidth / 2
      const py = point?.y ?? viewport.clientHeight / 2
      const ratio = next / current.scale
      setView(
        {
          scale: next,
          x: px - (px - current.x) * ratio,
          y: py - (py - current.y) * ratio,
        },
        animate
      )
    },
    [setView]
  )

  const panBy = React.useCallback(
    (dx: number, dy: number, animate = false) => {
      const current = viewRef.current
      setView({ ...current, x: current.x + dx, y: current.y + dy }, animate)
    },
    [setView]
  )

  // Shows a content rectangle in the middle of the viewport.
  const fitRect = React.useCallback(
    (rect: Rect, padding = 48) => {
      const viewport = viewportRef.current
      if (!viewport || !rect.width || !rect.height) return
      const scale = clamp(
        Math.min(
          (viewport.clientWidth - padding * 2) / rect.width,
          (viewport.clientHeight - padding * 2) / rect.height
        ),
        MIN_SCALE,
        1
      )
      setView(
        {
          scale,
          x: (viewport.clientWidth - rect.width * scale) / 2 - rect.x * scale,
          y:
            Math.max(
              padding,
              (viewport.clientHeight - rect.height * scale) / 2
            ) -
            rect.y * scale,
        },
        true
      )
    },
    [setView]
  )

  // Wheel, pointer and touch input. Wheel needs `passive: false` to stop the
  // page from scrolling, so it is added here and not as a React prop.
  React.useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    let wheelTimer = 0
    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      if (!wheelTimer) closePopups()
      clearTimeout(wheelTimer)
      wheelTimer = window.setTimeout(() => (wheelTimer = 0), 200)

      const box = viewport.getBoundingClientRect()
      // A trackpad pinch arrives as a wheel event with ctrlKey.
      if (event.ctrlKey || event.metaKey) {
        zoomTo(viewRef.current.scale * Math.exp(-event.deltaY * 0.01), {
          x: event.clientX - box.left,
          y: event.clientY - box.top,
        })
      } else if (event.shiftKey && !event.deltaX) {
        panBy(-event.deltaY, 0)
      } else {
        panBy(-event.deltaX, -event.deltaY)
      }
    }

    const pointers = new Map<number, { x: number; y: number }>()
    let pinch: { distance: number; scale: number } | null = null
    let space = false

    const midpoint = () => {
      const [a, b] = [...pointers.values()]
      const box = viewport.getBoundingClientRect()
      return {
        x: (a.x + b.x) / 2 - box.left,
        y: (a.y + b.y) / 2 - box.top,
        distance: Math.hypot(a.x - b.x, a.y - b.y),
      }
    }

    // A touch is always tracked, so that a second finger can start a pinch
    // anywhere. One finger pans only when it starts on the background.
    let singleTouchPans = false

    const startGesture = () => {
      closePopups()
      setPanning(true)
    }

    const onPointerDown = (event: PointerEvent) => {
      const onBackground =
        event.target === viewport ||
        (event.target instanceof Element &&
          event.target.hasAttribute("data-canvas-background"))
      const startsPan =
        event.button === 1 || space || (onBackground && event.button === 0)

      if (event.pointerType === "touch") {
        pointers.set(event.pointerId, { x: event.clientX, y: event.clientY })
        if (pointers.size === 2) {
          for (const id of pointers.keys()) viewport.setPointerCapture(id)
          pinch = {
            distance: midpoint().distance,
            scale: viewRef.current.scale,
          }
          startGesture()
        } else if (pointers.size === 1 && startsPan) {
          viewport.setPointerCapture(event.pointerId)
          singleTouchPans = true
          startGesture()
        }
        return
      }

      if (!startsPan) return
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY })
      viewport.setPointerCapture(event.pointerId)
      startGesture()
      event.preventDefault()
    }

    const onPointerMove = (event: PointerEvent) => {
      const last = pointers.get(event.pointerId)
      if (!last) return
      const dx = event.clientX - last.x
      const dy = event.clientY - last.y
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY })

      if (pointers.size === 2 && pinch) {
        const { x, y, distance } = midpoint()
        zoomTo(pinch.scale * (distance / pinch.distance), { x, y })
        panBy(dx / 2, dy / 2)
      } else if (event.pointerType !== "touch" || singleTouchPans) {
        panBy(dx, dy)
      }
    }

    const onPointerUp = (event: PointerEvent) => {
      if (!pointers.delete(event.pointerId)) return
      if (pointers.size < 2) pinch = null
      if (pointers.size === 0) {
        singleTouchPans = false
        setPanning(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === " " && !isEditable(event.target)) {
        if (event.target === viewport || event.target === document.body) {
          event.preventDefault()
          space = true
          setPanning(true)
        }
      }
    }
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.key === " ") {
        space = false
        if (pointers.size === 0) setPanning(false)
      }
    }

    viewport.addEventListener("wheel", onWheel, { passive: false })
    viewport.addEventListener("pointerdown", onPointerDown)
    viewport.addEventListener("pointermove", onPointerMove)
    viewport.addEventListener("pointerup", onPointerUp)
    viewport.addEventListener("pointercancel", onPointerUp)
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keyup", onKeyUp)

    return () => {
      clearTimeout(wheelTimer)
      viewport.removeEventListener("wheel", onWheel)
      viewport.removeEventListener("pointerdown", onPointerDown)
      viewport.removeEventListener("pointermove", onPointerMove)
      viewport.removeEventListener("pointerup", onPointerUp)
      viewport.removeEventListener("pointercancel", onPointerUp)
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("keyup", onKeyUp)
    }
  }, [panBy, zoomTo])

  return {
    viewportRef,
    view,
    animating,
    panning,
    setView,
    zoomTo,
    panBy,
    fitRect,
    onAnimationEnd: () => setAnimating(false),
  }
}
