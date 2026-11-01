import { Skeleton } from "@/components/ui/skeleton"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Skeleton",
  description: "Shows a placeholder while content loads.",
  category: "Feedback",
}

export default function SkeletonDocs() {
  return (
    <Section title="Shapes">
      <Example title="Text lines" canvas>
        <div className="flex w-full max-w-xs flex-col gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-3/5" />
        </div>
      </Example>
      <Example title="Profile" canvas>
        <div className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </Example>
      <Example title="Card" canvas>
        <div className="flex w-full max-w-xs flex-col gap-3">
          <Skeleton className="aspect-video w-full" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </Example>
    </Section>
  )
}
