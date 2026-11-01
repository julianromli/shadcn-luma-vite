import { Input } from "@/components/ui/input"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Input",
  description: "Lets the user type one line of text, such as a name or an email.",
  category: "Forms",
}

export default function InputDocs() {
  return (
    <>
      <Section
        title="States"
        description="Focus is forced so that you can compare it. The default example reacts to your mouse and keyboard."
      >
        <Example title="Default" canvas>
          <Input placeholder="Email" />
        </Example>
        <Example title="With value" canvas>
          <Input defaultValue="ada@example.com" />
        </Example>
        <Example title="Focus" state="focus">
          <Input placeholder="Email" />
        </Example>
        <Example title="Disabled">
          <Input placeholder="Email" disabled />
        </Example>
        <Example title="Read-only">
          <Input defaultValue="ada@example.com" readOnly />
        </Example>
        <Example title="Invalid">
          <Input defaultValue="ada@" aria-invalid />
        </Example>
      </Section>

      <Section title="Types">
        <Example title="Email" canvas>
          <Input type="email" placeholder="you@example.com" />
        </Example>
        <Example title="Password" canvas>
          <Input type="password" defaultValue="password" />
        </Example>
        <Example title="Number" canvas>
          <Input type="number" defaultValue={42} />
        </Example>
        <Example title="Search" canvas>
          <Input type="search" placeholder="Search" />
        </Example>
        <Example title="Date" canvas>
          <Input type="date" />
        </Example>
        <Example title="File" canvas>
          <Input type="file" />
        </Example>
      </Section>
    </>
  )
}
