import { Slider } from "@/components/ui/slider"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Slider",
  description: "Lets the user select a value or a range in a set of numbers.",
  category: "Forms",
}

export default function SliderDocs() {
  return (
    <>
      <Section title="Examples">
        <Example title="Single value">
          <Slider defaultValue={[40]} aria-label="Volume" />
        </Example>
        <Example title="Range">
          <Slider defaultValue={[25, 75]} aria-label="Price" />
        </Example>
        <Example title="With step">
          <Slider defaultValue={[50]} step={10} aria-label="Volume" />
        </Example>
        <Example title="Vertical" className="h-48">
          <Slider
            defaultValue={[60]}
            orientation="vertical"
            aria-label="Volume"
          />
        </Example>
      </Section>

      <Section
        title="States"
        description="Hover and focus are forced so that you can compare them. The default example reacts to your mouse and keyboard."
      >
        <Example title="Default">
          <Slider defaultValue={[40]} aria-label="Volume" />
        </Example>
        <Example title="Hover" state="hover">
          <Slider defaultValue={[40]} aria-label="Volume" />
        </Example>
        <Example title="Focus" state="focus">
          <Slider defaultValue={[40]} aria-label="Volume" />
        </Example>
        <Example title="Disabled">
          <Slider defaultValue={[40]} disabled aria-label="Volume" />
        </Example>
      </Section>
    </>
  )
}
