import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Label",
  description: "Gives a name to a form control. Click the label to focus the control.",
  category: "Forms",
}

export default function LabelDocs() {
  return (
    <Section title="Examples">
      <Example title="Default">
        <Label>Email</Label>
      </Example>
      <Example title="With input" className="flex-col items-stretch">
        <Label htmlFor="label-email">Email</Label>
        <Input id="label-email" placeholder="you@example.com" />
      </Example>
      <Example title="With checkbox">
        <Label>
          <Checkbox />
          Accept the terms
        </Label>
      </Example>
      <Example title="Disabled control">
        <Checkbox id="label-disabled" disabled />
        <Label htmlFor="label-disabled">Accept the terms</Label>
      </Example>
    </Section>
  )
}
