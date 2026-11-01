import { HugeiconsIcon } from "@hugeicons/react"
import { TextBoldIcon, TextItalicIcon } from "@hugeicons/core-free-icons"

import { Toggle } from "@/components/ui/toggle"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Toggle",
  description: "A button that the user can turn on or off.",
  category: "Actions",
}

const VARIANTS = ["default", "outline"] as const

export default function ToggleDocs() {
  return (
    <>
      <Section title="Variants">
        <Example title="Default" canvas>
          <Toggle aria-label="Bold">
            <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
          </Toggle>
        </Example>
        <Example title="On" canvas>
          <Toggle defaultPressed aria-label="Bold">
            <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
          </Toggle>
        </Example>
        <Example title="Outline" canvas>
          <Toggle variant="outline" aria-label="Italic">
            <HugeiconsIcon icon={TextItalicIcon} strokeWidth={2} />
          </Toggle>
        </Example>
        <Example title="With text" canvas>
          <Toggle variant="outline">
            <HugeiconsIcon
              icon={TextItalicIcon}
              strokeWidth={2}
              data-icon="inline-start"
            />
            Italic
          </Toggle>
        </Example>
      </Section>

      {VARIANTS.map((variant) => (
        <Section
          key={variant}
          title={`States: ${variant}`}
          description="Hover and focus are forced so that you can compare them. The live examples react to your mouse and keyboard."
        >
          <Example title="Off" vars={{ variant }}>
            <Toggle variant={variant} aria-label="Bold">
              <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
            </Toggle>
          </Example>
          <Example title="On" vars={{ variant }}>
            <Toggle variant={variant} defaultPressed aria-label="Bold">
              <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
            </Toggle>
          </Example>
          <Example title="Hover" state="hover" vars={{ variant }}>
            <Toggle variant={variant} aria-label="Bold">
              <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
            </Toggle>
          </Example>
          <Example title="Focus" state="focus" vars={{ variant }}>
            <Toggle variant={variant} aria-label="Bold">
              <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
            </Toggle>
          </Example>
          <Example title="Disabled" vars={{ variant }}>
            <Toggle variant={variant} disabled aria-label="Bold">
              <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
            </Toggle>
          </Example>
        </Section>
      ))}

      <Section title="Sizes">
        <Example title="Small" canvas>
          <Toggle size="sm" variant="outline" aria-label="Bold">
            <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
          </Toggle>
        </Example>
        <Example title="Default">
          <Toggle variant="outline" aria-label="Bold">
            <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
          </Toggle>
        </Example>
        <Example title="Large" canvas>
          <Toggle size="lg" variant="outline" aria-label="Bold">
            <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
          </Toggle>
        </Example>
      </Section>
    </>
  )
}
