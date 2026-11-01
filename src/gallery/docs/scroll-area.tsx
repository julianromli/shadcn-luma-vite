import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Scroll Area",
  description:
    "Adds a scroll bar with the same look on all browsers. Use it when content is larger than its box.",
  category: "Layout",
}

function VerticalScrollArea() {
  const tags = Array.from({ length: 30 }, (_, index) => `v1.${30 - index}.0`)

  return (
    <ScrollArea className="h-64 w-48 rounded-2xl border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium">Releases</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

function HorizontalScrollArea() {
  const colors = ["red", "orange", "amber", "lime", "teal", "sky", "violet", "pink"]

  return (
    <ScrollArea className="w-full max-w-sm rounded-2xl border whitespace-nowrap">
      <div className="flex w-max gap-3 p-4">
        {colors.map((color) => (
          <div
            key={color}
            className="flex size-28 shrink-0 items-end rounded-xl bg-muted p-2 text-xs"
          >
            {color}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default function ScrollAreaDocs() {
  return (
    <>
      <Section title="Orientation" columns={2}>
        <Example title="Vertical" canvas source="VerticalScrollArea">
          <VerticalScrollArea />
        </Example>
        <Example title="Horizontal" canvas source="HorizontalScrollArea">
          <HorizontalScrollArea />
        </Example>
      </Section>

      <Section
        title="States"
        description="The scroll area gets a focus ring when you go to it with the keyboard. Focus is forced on the right."
        columns={2}
      >
        <Example title="Default">
          <ScrollArea className="h-32 w-56 rounded-2xl border">
            <p className="p-4 text-sm">
              A design system is a set of rules and parts. Teams use it to make
              products that look and work the same. It has tokens, components
              and guidelines. Each part has a clear purpose. When the system
              changes, all products get the change.
            </p>
          </ScrollArea>
        </Example>
        <Example title="Focus" state="focus">
          <ScrollArea className="h-32 w-56 rounded-2xl border">
            <p className="p-4 text-sm">
              A design system is a set of rules and parts. Teams use it to make
              products that look and work the same. It has tokens, components
              and guidelines. Each part has a clear purpose. When the system
              changes, all products get the change.
            </p>
          </ScrollArea>
        </Example>
      </Section>
    </>
  )
}
