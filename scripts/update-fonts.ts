// Writes the list of Google fonts from the Fontsource API to
// src/theme/fonts/google-fonts.json. Run it with `bun run fonts:update`.

type ApiFont = {
  id: string
  family: string
  category: string
  variable: boolean
  weights: number[]
  type: string
}

const response = await fetch("https://api.fontsource.org/v1/fonts?type=google")
if (!response.ok) {
  throw new Error(`Fontsource API returned ${response.status}`)
}

const fonts = ((await response.json()) as ApiFont[])
  // Icon fonts are not text fonts.
  .filter((font) => font.type === "google" && font.category !== "icons")
  .map(({ id, family, category, variable, weights }) => ({
    id,
    family,
    category,
    variable,
    weights,
  }))
  .sort((a, b) => a.family.localeCompare(b.family))

const path = new URL("../src/theme/fonts/google-fonts.json", import.meta.url)
await Bun.write(path, JSON.stringify(fonts))
console.log(`Wrote ${fonts.length} fonts to ${path.pathname}`)
