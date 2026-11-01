import * as React from "react"
import { useDialKitController } from "dialkit"

import { toast } from "@/components/ui/toast"
import { themeCss, themeTokens } from "@/theme/apply"
import {
  darkColorsConfig,
  flattenColors,
  lightColorsConfig,
  motionConfig,
  shadowsConfig,
  shapeConfig,
  themeConfig,
  typographyConfig,
} from "@/theme/config"
import { exportCss } from "@/theme/export-css"
import { FontPicker } from "@/theme/fonts/font-picker"
import { findFont, loadGoogleFont } from "@/theme/fonts/fonts"
import { DEFAULT_SANS } from "@/theme/tokens"

type FontSlot = "sans" | "heading" | "mono"

const PICKER_TITLE: Record<FontSlot, string> = {
  sans: "Sans font",
  heading: "Heading font",
  mono: "Mono font",
}

const ACTION_SLOT: Record<string, FontSlot> = {
  chooseSans: "sans",
  chooseHeading: "heading",
  chooseMono: "mono",
}

// Each panel saves its values and versions in localStorage (dialkit:<id>).
const options = (id: string) => ({
  id,
  persist: true,
  defaultCollapsed: true,
})

export function ThemeController() {
  const [pickerSlot, setPickerSlot] = React.useState<FontSlot | null>(null)
  const [lastSlot, setLastSlot] = React.useState<FontSlot>("sans")

  // Registered first, so it is at the top of the DialKit panel. The
  // actions run later, when the values below exist.
  useDialKitController("Theme", themeConfig, {
    id: "ds-theme",
    persist: true,
    onAction: (action) => {
      if (action === "exportCss") {
        exportCss(tokens, families)
          .then((css) => navigator.clipboard.writeText(css))
          .then(() =>
            toast.add({
              title: "Theme CSS copied",
              description:
                "Paste it into src/index.css and src/styles/motion.css.",
              type: "success",
            })
          )
          .catch(() =>
            toast.add({ title: "Could not copy the theme CSS", type: "error" })
          )
      }
      if (action === "resetAll") {
        for (const panel of [light, dark, typography, shape, shadows, motion]) {
          panel.resetValues()
        }
      }
    },
  })

  const light = useDialKitController(
    "Colors (light)",
    lightColorsConfig,
    options("ds-colors-light")
  )
  const dark = useDialKitController(
    "Colors (dark)",
    darkColorsConfig,
    options("ds-colors-dark")
  )
  const typography = useDialKitController("Typography", typographyConfig, {
    ...options("ds-typography"),
    onAction: (action) => {
      const slot = ACTION_SLOT[action]
      if (slot) {
        setPickerSlot(slot)
        setLastSlot(slot)
      }
    },
  })
  const shape = useDialKitController(
    "Radius & spacing",
    shapeConfig,
    options("ds-shape")
  )
  const shadows = useDialKitController(
    "Shadows",
    shadowsConfig,
    options("ds-shadows")
  )
  const motion = useDialKitController(
    "Motion",
    motionConfig,
    options("ds-motion")
  )

  const tokens = themeTokens({
    light: flattenColors(light.values),
    dark: flattenColors(dark.values),
    typography: typography.values,
    shape: shape.values,
    shadows: shadows.values,
    motion: motion.values,
  })
  const css = themeCss(tokens)

  const families = typography.values

  // Before paint, so a saved theme does not flash the default theme.
  React.useLayoutEffect(() => {
    let style = document.getElementById("ds-theme")
    if (!style) {
      style = document.createElement("style")
      style.id = "ds-theme"
      document.head.append(style)
    }
    style.textContent = css
  }, [css])

  React.useEffect(() => {
    for (const family of [families.sans, families.heading, families.mono]) {
      if (!family || family === DEFAULT_SANS) continue
      findFont(family).then((font) => font && loadGoogleFont(font))
    }
  }, [families.sans, families.heading, families.mono])

  return (
    <FontPicker
      title={PICKER_TITLE[lastSlot]}
      value={families[lastSlot]}
      open={pickerSlot !== null}
      onOpenChange={(open) => {
        if (!open) setPickerSlot(null)
      }}
      onSelect={(family) => typography.setValue(lastSlot, family)}
    />
  )
}
