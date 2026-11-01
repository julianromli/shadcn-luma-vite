import type { Plugin } from "vite"

// Gives each <Example> in the gallery docs a `code` prop with the JSX that it
// renders, so the copied snippet always matches the preview.
//
//   <Example title="Outline"><Button variant="outline" /></Example>
//     -> code is the children source
//   <Example title="Controlled" source="DialogDemo"><DialogDemo /></Example>
//     -> code is the source of `function DialogDemo` in the same file
//
// It also exports `imports`: the file's imports, without the gallery's own.

const DOCS_FILE = /\/src\/gallery\/docs\/[^/]+\.tsx$/

export function exampleSource(): Plugin {
  return {
    name: "gallery-example-source",
    enforce: "pre",
    transform(code, id) {
      if (!DOCS_FILE.test(id.split("?")[0])) {
        return null
      }

      return { code: injectCode(code), map: null }
    },
  }
}

export function injectCode(source: string) {
  let output = ""
  let cursor = 0
  let search = 0

  for (;;) {
    const start = source.indexOf("<Example", search)
    if (start === -1) {
      break
    }
    search = start + 8
    if (!/\s/.test(source[start + 8] ?? "")) {
      continue
    }

    const openEnd = findTagEnd(source, start + 8)
    const openTag = source.slice(start, openEnd)
    const close = source.indexOf("</Example>", openEnd + 1)
    if (close === -1) {
      throw new Error("<Example> has no closing tag")
    }

    output += source.slice(cursor, openEnd)

    if (!/\scode=/.test(openTag)) {
      const name = /\ssource="([^"]+)"/.exec(openTag)?.[1]
      const snippet = name
        ? extractFunction(source, name)
        : dedent(source.slice(openEnd + 1, close))
      output += ` code={${JSON.stringify(snippet)}}`
    }

    cursor = openEnd
    search = close
  }

  output += source.slice(cursor)

  const imports = [...source.matchAll(/^import [^"]*?from "([^"]+)"$/gm)]
    .filter((match) => !match[1].startsWith("@/gallery/"))
    .map((match) => match[0].replace(/\s+/g, " ").replace(/,\s*}/, " }"))
  output += `\nexport const imports = ${JSON.stringify(imports.join("\n"))}\n`

  return output
}

// Returns the index of the ">" that ends the opening tag. Skips "{...}"
// expressions and strings in attributes.
function findTagEnd(source: string, from: number) {
  let depth = 0
  let quote = ""

  for (let i = from; i < source.length; i++) {
    const char = source[i]

    if (quote) {
      if (char === quote && source[i - 1] !== "\\") quote = ""
    } else if (char === '"' || char === "'" || char === "`") {
      quote = char
    } else if (char === "{") {
      depth++
    } else if (char === "}") {
      depth--
    } else if (char === ">" && depth === 0) {
      return i
    }
  }

  throw new Error("<Example> opening tag has no end")
}

function extractFunction(source: string, name: string) {
  const start = source.search(new RegExp(`^function ${name}\\b`, "m"))
  if (start === -1) {
    throw new Error(`function ${name} not found for <Example source>`)
  }

  const body = source.indexOf(") {", start) + 2
  let depth = 0

  for (let i = body; i < source.length; i++) {
    if (source[i] === "{") depth++
    if (source[i] === "}" && --depth === 0) {
      return source.slice(start, i + 1)
    }
  }

  throw new Error(`function ${name} has no end`)
}

function dedent(text: string) {
  const lines = text
    .replace(/^\s*\n/, "")
    .replace(/\n\s*$/, "")
    .split("\n")
  const indent = Math.min(
    ...lines
      .filter((line) => line.trim())
      .map((line) => line.match(/^ */)![0].length)
  )

  return lines.map((line) => line.slice(indent)).join("\n")
}
