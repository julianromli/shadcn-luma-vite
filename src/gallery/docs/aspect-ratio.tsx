import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Aspect Ratio",
  description: "Keeps content at a fixed ratio of width to height.",
  category: "Layout",
}

export default function AspectRatioDocs() {
  return (
    <Section title="Ratios">
      <Example title="16:9">
        <div className="w-full max-w-xs">
          <AspectRatio
            ratio={16 / 9}
            className="rounded-2xl bg-linear-to-br from-primary/30 to-primary/5"
          />
        </div>
      </Example>
      <Example title="4:3">
        <div className="w-full max-w-xs">
          <AspectRatio
            ratio={4 / 3}
            className="rounded-2xl bg-linear-to-br from-primary/30 to-primary/5"
          />
        </div>
      </Example>
      <Example title="1:1">
        <div className="w-full max-w-40">
          <AspectRatio
            ratio={1}
            className="rounded-2xl bg-linear-to-br from-primary/30 to-primary/5"
          />
        </div>
      </Example>
      <Example title="9:16">
        <div className="w-full max-w-28">
          <AspectRatio
            ratio={9 / 16}
            className="rounded-2xl bg-linear-to-br from-primary/30 to-primary/5"
          />
        </div>
      </Example>
      <Example title="With content">
        <div className="w-full max-w-xs">
          <AspectRatio
            ratio={16 / 9}
            className="flex items-center justify-center rounded-2xl bg-muted text-sm text-muted-foreground"
          >
            16:9
          </AspectRatio>
        </div>
      </Example>
    </Section>
  )
}
