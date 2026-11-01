import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Switch",
  description: "Turns a setting on or off. The change occurs immediately.",
  category: "Forms",
}

export default function SwitchDocs() {
  return (
    <>
      <Section
        title="States"
        description="Focus is forced so that you can compare it. The live examples react to your mouse and keyboard."
      >
        <Example title="Off" canvas>
          <Switch aria-label="Airplane mode" />
        </Example>
        <Example title="On" canvas>
          <Switch defaultChecked aria-label="Airplane mode" />
        </Example>
        <Example title="Focus" state="focus">
          <Switch aria-label="Airplane mode" />
        </Example>
        <Example title="Focus, on" state="focus">
          <Switch defaultChecked aria-label="Airplane mode" />
        </Example>
        <Example title="Disabled">
          <Switch disabled aria-label="Airplane mode" />
        </Example>
        <Example title="Disabled, on">
          <Switch disabled defaultChecked aria-label="Airplane mode" />
        </Example>
        <Example title="Invalid">
          <Switch aria-invalid aria-label="Airplane mode" />
        </Example>
      </Section>

      <Section title="Sizes">
        <Example title="Small" canvas>
          <Switch size="sm" aria-label="Airplane mode" />
          <Switch size="sm" defaultChecked aria-label="Airplane mode" />
        </Example>
        <Example title="Default">
          <Switch aria-label="Airplane mode" />
          <Switch defaultChecked aria-label="Airplane mode" />
        </Example>
        <Example title="With label" canvas>
          <Label>
            <Switch />
            Airplane mode
          </Label>
        </Example>
      </Section>
    </>
  )
}
