import indexCss from "@/index.css?raw"
import motionCss from "@/styles/motion.css?raw"

// The defaults come from the CSS files themselves, so they always match.

export type Tokens = Record<string, string>

function readBlock(css: string, selector: string): Tokens {
  const start = css.search(
    new RegExp(`^${selector.replace(".", "\\.")} \\{`, "m")
  )
  if (start === -1) {
    throw new Error(`No "${selector}" block in the CSS`)
  }

  const body = css.slice(css.indexOf("{", start) + 1, css.indexOf("}", start))
  const tokens: Tokens = {}

  for (const match of body.matchAll(/--([\w-]+):\s*([^;]+);/g)) {
    tokens[match[1]] = match[2].trim()
  }

  return tokens
}

const lightBlock = readBlock(indexCss, ":root")
const darkBlock = readBlock(indexCss, ".dark")

const NOT_COLORS = /^(radius|spacing|ds-)/

export const COLOR_TOKENS = Object.keys(lightBlock).filter(
  (name) => !NOT_COLORS.test(name)
)

export const lightColorDefaults: Tokens = Object.fromEntries(
  COLOR_TOKENS.map((name) => [name, lightBlock[name]])
)

export const darkColorDefaults: Tokens = Object.fromEntries(
  COLOR_TOKENS.map((name) => [name, darkBlock[name] ?? lightBlock[name]])
)

// Tokens that are the same in light and dark mode.
export const sharedDefaults: Tokens = Object.fromEntries(
  Object.entries(lightBlock).filter(([name]) => NOT_COLORS.test(name))
)

export const motionDefaults: Tokens = readBlock(motionCss, ":root")

// Tailwind's default type scale, in rem. The text scale multiplies it.
export const TEXT_SIZES: Record<string, number> = {
  xs: 0.75,
  sm: 0.875,
  base: 1,
  lg: 1.125,
  xl: 1.25,
  "2xl": 1.5,
  "3xl": 1.875,
  "4xl": 2.25,
  "5xl": 3,
  "6xl": 3.75,
}

export const DEFAULT_SANS = "Inter Variable"
export const DEFAULT_MONO = sharedDefaults["ds-font-mono"]
