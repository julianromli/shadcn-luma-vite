import { block, type ThemeTokens } from "@/theme/apply"
import { findFont } from "@/theme/fonts/fonts"
import { DEFAULT_SANS } from "@/theme/tokens"

type Families = { sans: string; heading: string; mono: string }

const FALLBACK: Record<keyof Families, string> = {
  sans: "sans-serif",
  heading: "sans-serif",
  mono: "monospace",
}

const TOKEN: Record<keyof Families, string> = {
  sans: "ds-font-sans",
  heading: "ds-font-heading",
  mono: "ds-font-mono",
}

// Makes the CSS to paste into the project. The project loads fonts with
// Fontsource packages, so the export uses them and not Google Fonts.
export async function exportCss(tokens: ThemeTokens, families: Families) {
  const shared = { ...tokens.shared }
  const packages: string[] = []

  for (const slot of Object.keys(TOKEN) as (keyof Families)[]) {
    const family = families[slot]
    if (!family || family === DEFAULT_SANS) continue

    const font = await findFont(family)
    if (!font) continue

    const name = font.variable
      ? `@fontsource-variable/${font.id}`
      : `@fontsource/${font.id}`
    if (!packages.includes(name)) packages.push(name)

    // A Fontsource variable font has "Variable" at the end of its name.
    const cssFamily = font.variable ? `${font.family} Variable` : font.family
    shared[TOKEN[slot]] = `'${cssFamily}', ${FALLBACK[slot]}`
  }

  const lines = [
    `/* Design system theme, exported from the gallery on ${new Date().toISOString().slice(0, 10)}. */`,
  ]

  if (packages.length) {
    lines.push(
      "",
      `/* Install the fonts: bun add ${packages.join(" ")} */`,
      ...packages.map((name) => `@import "${name}";`)
    )
  }

  lines.push(
    "",
    "/* src/index.css: put these 2 blocks in place of the :root and .dark blocks. */",
    block(":root", { ...tokens.light, ...shared }),
    "",
    block(".dark", tokens.dark),
    "",
    "/* src/styles/motion.css: put these tokens in its :root block. */",
    block(":root", tokens.motion)
  )

  return lines.join("\n") + "\n"
}
