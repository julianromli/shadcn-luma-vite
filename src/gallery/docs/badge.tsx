import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons"

import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Badge",
  description: "Shows a short label, such as a status or a count.",
  category: "Data display",
}

const VARIANTS = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
] as const

export default function BadgeDocs() {
  return (
    <>
      <Section title="Variants">
        <Example title="Default">
          <Badge>Badge</Badge>
        </Example>
        <Example title="Secondary">
          <Badge variant="secondary">Secondary</Badge>
        </Example>
        <Example title="Destructive">
          <Badge variant="destructive">Destructive</Badge>
        </Example>
        <Example title="Outline">
          <Badge variant="outline">Outline</Badge>
        </Example>
        <Example title="Ghost">
          <Badge variant="ghost">Ghost</Badge>
        </Example>
        <Example title="Link">
          <Badge variant="link">Link</Badge>
        </Example>
      </Section>

      {VARIANTS.map((variant) => (
        <Section
          key={variant}
          title={`States: ${variant} link`}
          description="A badge that is a link has hover and focus styles. Hover and focus are forced so that you can compare them."
        >
          <Example title="Default" vars={{ variant }}>
            <Badge variant={variant} render={<a href="#/badge" />}>
              Badge
            </Badge>
          </Example>
          <Example title="Hover" state="hover" vars={{ variant }}>
            <Badge variant={variant} render={<a href="#/badge" />}>
              Badge
            </Badge>
          </Example>
          <Example title="Focus" state="focus" vars={{ variant }}>
            <Badge variant={variant} render={<a href="#/badge" />}>
              Badge
            </Badge>
          </Example>
          <Example title="Invalid" vars={{ variant }}>
            <Badge variant={variant} aria-invalid>
              Badge
            </Badge>
          </Example>
        </Section>
      ))}

      <Section title="With content">
        <Example title="Icon at start">
          <Badge variant="secondary">
            <HugeiconsIcon
              icon={CheckmarkCircle02Icon}
              strokeWidth={2}
              data-icon="inline-start"
            />
            Verified
          </Badge>
        </Example>
        <Example title="Icon at end">
          <Badge variant="outline">
            Open
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              strokeWidth={2}
              data-icon="inline-end"
            />
          </Badge>
        </Example>
        <Example title="Loading">
          <Badge variant="secondary">
            <Spinner data-icon="inline-start" />
            Syncing
          </Badge>
        </Example>
        <Example title="Count">
          <Badge className="h-5 min-w-5 px-1 tabular-nums">8</Badge>
          <Badge variant="destructive" className="h-5 min-w-5 px-1 tabular-nums">
            99+
          </Badge>
        </Example>
      </Section>
    </>
  )
}
