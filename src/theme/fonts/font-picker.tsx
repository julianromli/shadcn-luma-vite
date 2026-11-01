import * as React from "react"

import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  loadFontList,
  loadGoogleFont,
  type FontCategory,
  type GoogleFont,
} from "@/theme/fonts/fonts"

const CATEGORIES: { value: FontCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "sans-serif", label: "Sans" },
  { value: "serif", label: "Serif" },
  { value: "monospace", label: "Mono" },
  { value: "display", label: "Display" },
  { value: "handwriting", label: "Hand" },
]

export function FontPicker({
  title,
  value,
  open,
  onOpenChange,
  onSelect,
}: {
  title: string
  value: string
  open: boolean
  onOpenChange: (open: boolean) => void
  onSelect: (family: string) => void
}) {
  const [fonts, setFonts] = React.useState<GoogleFont[]>([])
  const [category, setCategory] = React.useState<FontCategory | "all">("all")

  React.useEffect(() => {
    if (!open) return
    let cancelled = false
    loadFontList().then((list) => {
      if (!cancelled) setFonts(list)
    })
    return () => {
      cancelled = true
    }
  }, [open])

  const items = React.useMemo(
    () =>
      category === "all"
        ? fonts
        : fonts.filter((font) => font.category === category),
    [fonts, category]
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Above the DialKit panel (z-index 9999), which opens this picker. */}
      <DialogContent data-ui-chrome className="z-[10000] sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Search {fonts.length || "all"} Google fonts. The font loads from
            Google Fonts when you select it.
          </DialogDescription>
        </DialogHeader>
        <ToggleGroup
          variant="outline"
          size="sm"
          value={[category]}
          onValueChange={(next) => {
            if (next[0]) setCategory(next[0] as FontCategory | "all")
          }}
          className="flex-wrap"
        >
          {CATEGORIES.map((item) => (
            <ToggleGroupItem key={item.value} value={item.value}>
              {item.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <Combobox
          inline
          items={items}
          limit={100}
          itemToStringLabel={(font: GoogleFont) => font.family}
          isItemEqualToValue={(font: GoogleFont, selected: GoogleFont) =>
            font.family === selected.family
          }
          value={items.find((font) => font.family === value) ?? null}
          onValueChange={(font: GoogleFont | null) => {
            if (font) {
              onSelect(font.family)
              onOpenChange(false)
            }
          }}
        >
          <ComboboxInput
            placeholder="Search fonts"
            aria-label="Search fonts"
            showTrigger={false}
            className="w-full"
          />
          <ComboboxEmpty>No fonts match.</ComboboxEmpty>
          <ComboboxList className="h-80 max-h-80 rounded-2xl border">
            {(font: GoogleFont) => (
              <ComboboxItem key={font.id} value={font}>
                <FontPreview font={font} />
              </ComboboxItem>
            )}
          </ComboboxList>
        </Combobox>
      </DialogContent>
    </Dialog>
  )
}

// Loads only the glyphs of the family name, and only when the option is
// visible in the list.
function FontPreview({ font }: { font: GoogleFont }) {
  const ref = React.useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loadGoogleFont(font, font.family)
        observer.disconnect()
      }
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [font])

  return (
    <span className="flex min-w-0 flex-1 items-baseline justify-between gap-3">
      <span
        ref={ref}
        className="truncate text-base"
        style={{ fontFamily: `'${font.family}', system-ui` }}
      >
        {font.family}
      </span>
      <span className="shrink-0 text-xs text-muted-foreground">
        {font.category}
      </span>
    </span>
  )
}
