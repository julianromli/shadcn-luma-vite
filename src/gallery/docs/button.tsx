import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight02Icon,
  Delete02Icon,
  PlusSignIcon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Button",
  description:
    "Starts an action or an event, such as a form submit or a dialog open.",
  category: "Actions",
}

const VARIANTS = [
  "default",
  "outline",
  "secondary",
  "ghost",
  "destructive",
  "link",
] as const

export default function ButtonDocs() {
  return (
    <>
      <Section title="Variants">
        <Example title="Default" canvas>
          <Button>Button</Button>
        </Example>
        <Example title="Outline" canvas>
          <Button variant="outline">Button</Button>
        </Example>
        <Example title="Secondary" canvas>
          <Button variant="secondary">Button</Button>
        </Example>
        <Example title="Ghost" canvas>
          <Button variant="ghost">Button</Button>
        </Example>
        <Example title="Destructive" canvas>
          <Button variant="destructive">Delete</Button>
        </Example>
        <Example title="Link" canvas>
          <Button variant="link">Button</Button>
        </Example>
      </Section>

      {VARIANTS.map((variant) => (
        <Section
          key={variant}
          title={`States: ${variant}`}
          description="Hover, focus and active are forced so that you can compare them. The live example on the left reacts to your mouse and keyboard."
        >
          <Example title="Default" vars={{ variant }}>
            <Button variant={variant}>Button</Button>
          </Example>
          <Example title="Hover" state="hover" vars={{ variant }}>
            <Button variant={variant}>Button</Button>
          </Example>
          <Example title="Focus" state="focus" vars={{ variant }}>
            <Button variant={variant}>Button</Button>
          </Example>
          <Example title="Active" state="active" vars={{ variant }}>
            <Button variant={variant}>Button</Button>
          </Example>
          <Example title="Disabled" vars={{ variant }}>
            <Button variant={variant} disabled>
              Button
            </Button>
          </Example>
          <Example title="Invalid" vars={{ variant }}>
            <Button variant={variant} aria-invalid>
              Button
            </Button>
          </Example>
        </Section>
      ))}

      <Section title="Sizes">
        <Example title="Extra small" canvas>
          <Button size="xs">Button</Button>
        </Example>
        <Example title="Small" canvas>
          <Button size="sm">Button</Button>
        </Example>
        <Example title="Default">
          <Button>Button</Button>
        </Example>
        <Example title="Large" canvas>
          <Button size="lg">Button</Button>
        </Example>
        <Example title="Icon" canvas>
          <Button size="icon-xs" variant="outline" aria-label="Add">
            <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} />
          </Button>
          <Button size="icon-sm" variant="outline" aria-label="Add">
            <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} />
          </Button>
          <Button size="icon" variant="outline" aria-label="Add">
            <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} />
          </Button>
          <Button size="icon-lg" variant="outline" aria-label="Add">
            <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} />
          </Button>
        </Example>
      </Section>

      <Section title="With content">
        <Example title="Icon at start" canvas>
          <Button>
            <HugeiconsIcon
              icon={PlusSignIcon}
              strokeWidth={2}
              data-icon="inline-start"
            />
            New project
          </Button>
        </Example>
        <Example title="Icon at end" canvas>
          <Button variant="outline">
            Continue
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              strokeWidth={2}
              data-icon="inline-end"
            />
          </Button>
        </Example>
        <Example title="Loading">
          <Button disabled>
            <Spinner data-icon="inline-start" />
            Saving
          </Button>
        </Example>
        <Example title="Destructive with icon" canvas>
          <Button variant="destructive">
            <HugeiconsIcon
              icon={Delete02Icon}
              strokeWidth={2}
              data-icon="inline-start"
            />
            Delete
          </Button>
        </Example>
        <Example title="As a link" canvas>
          <Button render={<a href="#/button" />} nativeButton={false}>
            Go to page
          </Button>
        </Example>
      </Section>
    </>
  )
}
