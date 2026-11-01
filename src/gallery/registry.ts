import type * as React from "react"

export const CATEGORIES = [
  "Foundations",
  "Actions",
  "Forms",
  "Data display",
  "Feedback",
  "Overlays",
  "Navigation",
  "Layout",
  "AI and chat",
] as const

export type Category = (typeof CATEGORIES)[number]

export type DocMeta = {
  name: string
  description: string
  category: Category
}

type DocModule = {
  meta: DocMeta
  default: React.ComponentType
  // Added by the example-source Vite plugin.
  imports: string
}

export type Doc = DocMeta & {
  slug: string
  Page: React.ComponentType
  imports: string
}

const modules = import.meta.glob<DocModule>("./docs/*.tsx", { eager: true })

export const docs: Doc[] = Object.entries(modules)
  .map(([path, module]) => ({
    ...module.meta,
    slug: path.slice("./docs/".length, -".tsx".length),
    Page: module.default,
    imports: module.imports,
  }))
  .sort((a, b) => a.name.localeCompare(b.name))
