import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Spinner",
  description: "Shows that a task is in progress.",
  category: "Feedback",
}

export default function SpinnerDocs() {
  return (
    <>
      <Section title="Sizes">
        <Example title="Small">
          <Spinner className="size-3" />
        </Example>
        <Example title="Default">
          <Spinner />
        </Example>
        <Example title="Large">
          <Spinner className="size-6" />
          <Spinner className="size-8" />
        </Example>
      </Section>

      <Section title="Colors">
        <Example title="Muted">
          <Spinner className="text-muted-foreground" />
        </Example>
        <Example title="Primary">
          <Spinner className="text-primary" />
        </Example>
        <Example title="Destructive">
          <Spinner className="text-destructive" />
        </Example>
      </Section>

      <Section title="In context">
        <Example title="In a button">
          <Button disabled>
            <Spinner data-icon="inline-start" />
            Saving
          </Button>
        </Example>
        <Example title="In a badge">
          <Badge variant="secondary">
            <Spinner data-icon="inline-start" />
            Syncing
          </Badge>
        </Example>
        <Example title="With text">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Spinner />
            Loading data
          </div>
        </Example>
      </Section>
    </>
  )
}
