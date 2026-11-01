export type FontCategory =
  "sans-serif" | "serif" | "display" | "handwriting" | "monospace"

export type GoogleFont = {
  id: string
  family: string
  category: FontCategory
  variable: boolean
  weights: number[]
}

let fontList: Promise<GoogleFont[]> | undefined

// The list is large (approximately 200 KB), so it loads only when needed.
export function loadFontList() {
  fontList ??= import("./google-fonts.json").then(
    (module) => module.default as GoogleFont[]
  )
  return fontList
}

export async function findFont(family: string) {
  const fonts = await loadFontList()
  return fonts.find((font) => font.family === family)
}

function familyParam(font: GoogleFont) {
  const name = encodeURIComponent(font.family).replace(/%20/g, "+")
  if (font.weights.length < 2) {
    return name
  }

  const weights = font.variable
    ? `${Math.min(...font.weights)}..${Math.max(...font.weights)}`
    : font.weights.join(";")
  return `${name}:wght@${weights}`
}

const loaded = new Set<string>()

// Adds the Google Fonts stylesheet for a family. With `text`, it loads only
// the glyphs for that text, which is enough for a preview.
export function loadGoogleFont(font: GoogleFont, text?: string) {
  const href = text
    ? `https://fonts.googleapis.com/css2?family=${encodeURIComponent(font.family).replace(/%20/g, "+")}&text=${encodeURIComponent(text)}&display=swap`
    : `https://fonts.googleapis.com/css2?family=${familyParam(font)}&display=swap`

  if (loaded.has(href)) {
    return
  }
  loaded.add(href)

  const link = document.createElement("link")
  link.rel = "stylesheet"
  link.href = href
  document.head.append(link)
}
