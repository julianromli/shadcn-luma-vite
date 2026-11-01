import { Separator } from "@/components/ui/separator"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Separator",
  description: "Shows a line between groups of content.",
  category: "Layout",
}

export default function SeparatorDocs() {
  return (
    <Section title="Orientation" columns={2}>
      <Example title="Horizontal">
        <div className="flex w-full max-w-xs flex-col gap-3 text-sm">
          <div>
            <p className="font-medium">Design System</p>
            <p className="text-muted-foreground">Components for your app.</p>
          </div>
          <Separator />
          <p className="text-muted-foreground">Version 1.0</p>
        </div>
      </Example>
      <Example title="Vertical">
        <div className="flex h-5 items-center gap-3 text-sm">
          <span>Blog</span>
          <Separator orientation="vertical" />
          <span>Docs</span>
          <Separator orientation="vertical" />
          <span>Source</span>
        </div>
      </Example>
    </Section>
  )
}
