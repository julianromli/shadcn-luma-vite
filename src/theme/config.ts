import type { DialConfig } from "dialkit"

import {
  COLOR_TOKENS,
  DEFAULT_SANS,
  darkColorDefaults,
  lightColorDefaults,
  motionDefaults,
  sharedDefaults,
  type Tokens,
} from "@/theme/tokens"

// DialKit panel configs. Keys become the control labels.

const COLOR_GROUPS: Record<string, string[]> = {
  surface: [
    "background",
    "foreground",
    "card",
    "card-foreground",
    "popover",
    "popover-foreground",
  ],
  brand: [
    "primary",
    "primary-foreground",
    "secondary",
    "secondary-foreground",
    "accent",
    "accent-foreground",
    "muted",
    "muted-foreground",
  ],
  feedback: ["destructive"],
  lines: ["border", "input", "ring"],
  chart: ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"],
  sidebar: COLOR_TOKENS.filter((name) => name.startsWith("sidebar")),
}

const grouped = new Set(Object.values(COLOR_GROUPS).flat())
const otherColors = COLOR_TOKENS.filter((name) => !grouped.has(name))
if (otherColors.length) {
  COLOR_GROUPS.other = otherColors
}

function colorConfig(defaults: Tokens): DialConfig {
  return Object.fromEntries(
    Object.entries(COLOR_GROUPS).map(([group, names], index) => [
      group,
      {
        // Only the first folder starts open, so the panel stays short.
        ...(index > 0 && { _collapsed: true }),
        ...Object.fromEntries(
          names.map((name) => [
            name,
            { type: "color", default: defaults[name] },
          ])
        ),
      },
    ])
  ) as DialConfig
}

export const lightColorsConfig = colorConfig(lightColorDefaults)
export const darkColorsConfig = colorConfig(darkColorDefaults)

// Reads the nested color values back into a flat token map.
export function flattenColors(values: Record<string, unknown>): Tokens {
  const tokens: Tokens = {}
  for (const [group, names] of Object.entries(COLOR_GROUPS)) {
    const folder = values[group] as Record<string, string> | undefined
    for (const name of names) {
      if (folder?.[name]) tokens[name] = folder[name]
    }
  }
  return tokens
}

export const themeConfig = {
  exportCss: { type: "action", label: "Export CSS" },
  resetAll: { type: "action", label: "Reset all" },
} satisfies DialConfig

export const typographyConfig = {
  sans: { type: "text", default: DEFAULT_SANS },
  chooseSans: { type: "action", label: "Choose sans font" },
  heading: { type: "text", default: "", placeholder: "Same as sans" },
  chooseHeading: { type: "action", label: "Choose heading font" },
  mono: { type: "text", default: "", placeholder: "System mono" },
  chooseMono: { type: "action", label: "Choose mono font" },
  textScale: [1, 0.75, 1.5, 0.025],
} satisfies DialConfig

const rem = (name: string) => parseFloat(sharedDefaults[name])

export const shapeConfig = {
  radius: [rem("radius"), 0, 2, 0.025],
  spacing: [rem("spacing"), 0.15, 0.4, 0.005],
} satisfies DialConfig

export const shadowsConfig = {
  color: { type: "color", default: "#000000" },
  opacity: [1, 0, 3, 0.05],
  size: [1, 0, 3, 0.05],
} satisfies DialConfig

const number = (name: string) => parseFloat(motionDefaults[name])

function bezier(name: string): [number, number, number, number] {
  const [a, b, c, d] = motionDefaults[name]
    .replace(/^cubic-bezier\(|\)$/g, "")
    .split(",")
    .map(Number)
  return [a, b, c, d]
}

export const motionConfig = {
  durations: {
    stagger: [number("duration-stagger"), 0, 200, 5],
    micro: [number("duration-micro"), 0, 300, 5],
    quick: [number("duration-quick"), 0, 600, 5],
    fast: [number("duration-fast"), 0, 800, 5],
    medium: [number("duration-medium"), 0, 1000, 5],
    slow: [number("duration-slow"), 0, 1200, 5],
    verySlow: [number("duration-very-slow"), 0, 1500, 5],
  },
  easings: {
    _collapsed: true,
    smoothOut: {
      type: "easing",
      duration: 0.25,
      ease: bezier("ease-smooth-out"),
    },
    bounce: { type: "easing", duration: 0.5, ease: bezier("ease-bounce") },
    bounceStrong: {
      type: "easing",
      duration: 0.5,
      ease: bezier("ease-bounce-strong"),
    },
  },
  scales: {
    _collapsed: true,
    large: [number("scale-large"), 0.8, 1, 0.005],
    medium: [number("scale-medium"), 0.8, 1, 0.005],
    small: [number("scale-small"), 0.8, 1, 0.005],
    tiny: [number("scale-tiny"), 0.8, 1, 0.005],
  },
  distances: {
    _collapsed: true,
    micro: [number("distance-micro"), 0, 60, 1],
    small: [number("distance-small"), 0, 60, 1],
    base: [number("distance-base"), 0, 60, 1],
    medium: [number("distance-medium"), 0, 60, 1],
    large: [number("distance-large"), 0, 80, 1],
  },
  blur: {
    _collapsed: true,
    small: [number("blur-small"), 0, 20, 0.5],
    medium: [number("blur-medium"), 0, 20, 0.5],
    large: [number("blur-large"), 0, 30, 0.5],
  },
} satisfies DialConfig
