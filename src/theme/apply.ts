import type { ResolvedValues, TransitionConfig } from "dialkit"

import type {
  motionConfig,
  shadowsConfig,
  shapeConfig,
  typographyConfig,
} from "@/theme/config"
import {
  DEFAULT_MONO,
  DEFAULT_SANS,
  TEXT_SIZES,
  darkColorDefaults,
  lightColorDefaults,
  motionDefaults,
  sharedDefaults,
  type Tokens,
} from "@/theme/tokens"

export type ThemeValues = {
  light: Tokens
  dark: Tokens
  typography: ResolvedValues<typeof typographyConfig>
  shape: ResolvedValues<typeof shapeConfig>
  shadows: ResolvedValues<typeof shadowsConfig>
  motion: ResolvedValues<typeof motionConfig>
}

export type ThemeTokens = {
  light: Tokens
  dark: Tokens
  // Tokens that are the same in light and dark mode.
  shared: Tokens
  motion: Tokens
}

const round = (value: number) => Math.round(value * 1000) / 1000

export function fontStack(family: string, fallback: string) {
  if (family === DEFAULT_SANS) {
    return sharedDefaults["ds-font-sans"]
  }
  return `'${family.replace(/'/g, "")}', ${fallback}`
}

// Scales the size and alpha of each layer in a Tailwind shadow, and uses
// the chosen color.
function shadow(base: string, color: string, opacity: number, size: number) {
  return base
    .split(/,(?![^(]*\))/)
    .map((layer) => {
      const [, lengths, alpha] =
        /^\s*(.*?)\s*rgb\(0 0 0 \/ ([\d.]+)\)\s*$/.exec(layer) ?? []
      const scaled = lengths
        .split(/\s+/)
        .map((length) =>
          length === "0" ? "0" : `${round(parseFloat(length) * size)}px`
        )
        .join(" ")
      const percent = round(Math.min(1, parseFloat(alpha) * opacity) * 100)
      return `${scaled} color-mix(in oklab, ${color} ${percent}%, transparent)`
    })
    .join(", ")
}

function ease(value: TransitionConfig, fallback: string) {
  // The physics (spring) mode of the editor has no cubic-bezier form.
  if (value.type !== "easing") return fallback
  return `cubic-bezier(${value.ease.map(round).join(", ")})`
}

export function themeTokens(values: ThemeValues): ThemeTokens {
  const { typography, shape, shadows, motion } = values

  const shared: Tokens = {
    radius: `${shape.radius}rem`,
    spacing: `${shape.spacing}rem`,
    "ds-font-sans": fontStack(typography.sans || DEFAULT_SANS, "sans-serif"),
    "ds-font-heading": typography.heading
      ? fontStack(typography.heading, "sans-serif")
      : "var(--ds-font-sans)",
    "ds-font-mono": typography.mono
      ? fontStack(typography.mono, "monospace")
      : DEFAULT_MONO,
  }

  for (const name of Object.keys(sharedDefaults)) {
    if (name.startsWith("ds-shadow-")) {
      shared[name] = shadow(
        sharedDefaults[name],
        shadows.color,
        shadows.opacity,
        shadows.size
      )
    }
  }

  if (typography.textScale !== 1) {
    for (const [size, value] of Object.entries(TEXT_SIZES)) {
      shared[`text-${size}`] = `${round(value * typography.textScale)}rem`
    }
  }

  const { durations, easings, scales, distances, blur } = motion
  const motionTokens: Tokens = {
    "duration-stagger": `${durations.stagger}ms`,
    "duration-micro": `${durations.micro}ms`,
    "duration-quick": `${durations.quick}ms`,
    "duration-fast": `${durations.fast}ms`,
    "duration-medium": `${durations.medium}ms`,
    "duration-slow": `${durations.slow}ms`,
    "duration-very-slow": `${durations.verySlow}ms`,
    "ease-smooth-out": ease(
      easings.smoothOut,
      motionDefaults["ease-smooth-out"]
    ),
    "ease-bounce": ease(easings.bounce, motionDefaults["ease-bounce"]),
    "ease-bounce-strong": ease(
      easings.bounceStrong,
      motionDefaults["ease-bounce-strong"]
    ),
    "scale-large": `${scales.large}`,
    "scale-medium": `${scales.medium}`,
    "scale-small": `${scales.small}`,
    "scale-tiny": `${scales.tiny}`,
    "distance-micro": `${distances.micro}px`,
    "distance-small": `${distances.small}px`,
    "distance-base": `${distances.base}px`,
    "distance-medium": `${distances.medium}px`,
    "distance-large": `${distances.large}px`,
    "blur-small": `${blur.small}px`,
    "blur-medium": `${blur.medium}px`,
    "blur-large": `${blur.large}px`,
  }

  return {
    light: values.light,
    dark: values.dark,
    shared,
    motion: motionTokens,
  }
}

const block = (selector: string, tokens: Tokens) =>
  `${selector} {\n${Object.entries(tokens)
    .map(([name, value]) => `  --${name}: ${value};`)
    .join("\n")}\n}`

const textDefaults = Object.fromEntries(
  Object.entries(TEXT_SIZES).map(([size, value]) => [
    `text-${size}`,
    `${value}rem`,
  ])
)

// The custom tokens go on :root, so popups (portals on <body>) get them.
// [data-ui-chrome] (the gallery interface) sets the defaults again, and
// [data-ui-preview] (a component preview inside it) sets the custom tokens
// again. Each later block wins over the earlier ones.
export function themeCss(tokens: ThemeTokens) {
  const custom = { ...tokens.light, ...tokens.shared, ...tokens.motion }

  return [
    block(":root", custom),
    block(".dark", tokens.dark),
    block("[data-ui-chrome]", {
      ...lightColorDefaults,
      ...sharedDefaults,
      ...textDefaults,
      ...motionDefaults,
    }),
    block(".dark [data-ui-chrome]", darkColorDefaults),
    block("[data-ui-preview]", custom),
    block(".dark [data-ui-preview], [data-ui-preview].dark", tokens.dark),
  ].join("\n\n")
}

export { block }
