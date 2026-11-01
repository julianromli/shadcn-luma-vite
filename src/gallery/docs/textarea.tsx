import { Textarea } from "@/components/ui/textarea"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Textarea",
  description:
    "Lets the user type text on more than one line. It grows with the text.",
  category: "Forms",
}

export default function TextareaDocs() {
  return (
    <Section
      title="States"
      description="Focus is forced so that you can compare it. The default example reacts to your mouse and keyboard."
    >
      <Example title="Default">
        <Textarea placeholder="Type your message here." />
      </Example>
      <Example title="With value">
        <Textarea defaultValue={"The first line.\nThe second line."} />
      </Example>
      <Example title="Focus" state="focus">
        <Textarea placeholder="Type your message here." />
      </Example>
      <Example title="Disabled">
        <Textarea placeholder="Type your message here." disabled />
      </Example>
      <Example title="Read-only">
        <Textarea defaultValue="You cannot change this text." readOnly />
      </Example>
      <Example title="Invalid">
        <Textarea placeholder="Type your message here." aria-invalid />
      </Example>
    </Section>
  )
}
