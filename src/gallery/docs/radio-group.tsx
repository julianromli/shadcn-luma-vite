import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Radio Group",
  description: "Lets the user select one option from a set. Only one option can be on.",
  category: "Forms",
}

export default function RadioGroupDocs() {
  return (
    <>
      <Section title="Examples">
        <Example title="Default" canvas>
          <RadioGroup defaultValue="comfortable" className="w-fit">
            <Label>
              <RadioGroupItem value="default" />
              Default
            </Label>
            <Label>
              <RadioGroupItem value="comfortable" />
              Comfortable
            </Label>
            <Label>
              <RadioGroupItem value="compact" />
              Compact
            </Label>
          </RadioGroup>
        </Example>
        <Example title="Disabled option">
          <RadioGroup defaultValue="email" className="w-fit">
            <Label>
              <RadioGroupItem value="email" />
              Email
            </Label>
            <Label>
              <RadioGroupItem value="sms" disabled />
              SMS
            </Label>
          </RadioGroup>
        </Example>
        <Example title="Disabled group">
          <RadioGroup defaultValue="email" disabled className="w-fit">
            <Label>
              <RadioGroupItem value="email" />
              Email
            </Label>
            <Label>
              <RadioGroupItem value="sms" />
              SMS
            </Label>
          </RadioGroup>
        </Example>
      </Section>

      <Section
        title="States"
        description="Focus is forced so that you can compare it. The live examples react to your mouse and keyboard."
      >
        <Example title="Unchecked">
          <RadioGroup>
            <RadioGroupItem value="a" aria-label="Option A" />
          </RadioGroup>
        </Example>
        <Example title="Checked">
          <RadioGroup defaultValue="a">
            <RadioGroupItem value="a" aria-label="Option A" />
          </RadioGroup>
        </Example>
        <Example title="Focus" state="focus">
          <RadioGroup>
            <RadioGroupItem value="a" aria-label="Option A" />
          </RadioGroup>
        </Example>
        <Example title="Disabled">
          <RadioGroup disabled>
            <RadioGroupItem value="a" aria-label="Option A" />
          </RadioGroup>
        </Example>
        <Example title="Disabled, checked">
          <RadioGroup disabled defaultValue="a">
            <RadioGroupItem value="a" aria-label="Option A" />
          </RadioGroup>
        </Example>
        <Example title="Invalid">
          <RadioGroup>
            <RadioGroupItem value="a" aria-invalid aria-label="Option A" />
          </RadioGroup>
        </Example>
      </Section>
    </>
  )
}
