import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Checkbox",
  description: "Lets the user turn an option on or off. Use it for one or more options.",
  category: "Forms",
}

export default function CheckboxDocs() {
  return (
    <>
      <Section
        title="States"
        description="Focus is forced so that you can compare it. The live examples react to your mouse and keyboard."
      >
        <Example title="Unchecked">
          <Checkbox aria-label="Accept" />
        </Example>
        <Example title="Checked">
          <Checkbox defaultChecked aria-label="Accept" />
        </Example>
        <Example title="Indeterminate">
          <Checkbox indeterminate aria-label="Select all" />
        </Example>
        <Example title="Focus" state="focus">
          <Checkbox aria-label="Accept" />
        </Example>
        <Example title="Focus, checked" state="focus">
          <Checkbox defaultChecked aria-label="Accept" />
        </Example>
        <Example title="Disabled">
          <Checkbox disabled aria-label="Accept" />
        </Example>
        <Example title="Disabled, checked">
          <Checkbox disabled defaultChecked aria-label="Accept" />
        </Example>
        <Example title="Invalid">
          <Checkbox aria-invalid aria-label="Accept" />
        </Example>
        <Example title="Invalid, checked">
          <Checkbox aria-invalid defaultChecked aria-label="Accept" />
        </Example>
      </Section>

      <Section title="With label">
        <Example title="Label">
          <Label>
            <Checkbox />
            Accept the terms
          </Label>
        </Example>
        <Example title="Disabled label">
          <Checkbox id="checkbox-disabled" disabled />
          <Label htmlFor="checkbox-disabled">Accept the terms</Label>
        </Example>
      </Section>
    </>
  )
}
