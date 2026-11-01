import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/bubble"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Bubble",
  description:
    "Shows the text of one chat message in a rounded shape. Use it in a message or a bubble group.",
  category: "AI and chat",
}

const VARIANTS = [
  "default",
  "secondary",
  "muted",
  "tinted",
  "outline",
  "ghost",
  "destructive",
] as const

export default function BubbleDocs() {
  return (
    <>
      <Section title="Variants">
        <Example title="Default">
          <Bubble>
            <BubbleContent>Hello! How can I help?</BubbleContent>
          </Bubble>
        </Example>
        <Example title="Secondary">
          <Bubble variant="secondary">
            <BubbleContent>Hello! How can I help?</BubbleContent>
          </Bubble>
        </Example>
        <Example title="Muted">
          <Bubble variant="muted">
            <BubbleContent>Hello! How can I help?</BubbleContent>
          </Bubble>
        </Example>
        <Example title="Tinted">
          <Bubble variant="tinted">
            <BubbleContent>Hello! How can I help?</BubbleContent>
          </Bubble>
        </Example>
        <Example title="Outline">
          <Bubble variant="outline">
            <BubbleContent>Hello! How can I help?</BubbleContent>
          </Bubble>
        </Example>
        <Example title="Ghost">
          <Bubble variant="ghost">
            <BubbleContent>Hello! How can I help?</BubbleContent>
          </Bubble>
        </Example>
        <Example title="Destructive">
          <Bubble variant="destructive">
            <BubbleContent>The message did not send.</BubbleContent>
          </Bubble>
        </Example>
      </Section>

      {VARIANTS.map((variant) => (
        <Section
          key={variant}
          title={`Interactive states: ${variant}`}
          description="When the content is a button or a link, it reacts to hover and focus. These states are forced so that you can compare them."
        >
          <Example title="Default" vars={{ variant }}>
            <Bubble variant={variant}>
              <BubbleContent render={<button type="button" />}>
                Show the answer
              </BubbleContent>
            </Bubble>
          </Example>
          <Example title="Hover" state="hover" vars={{ variant }}>
            <Bubble variant={variant}>
              <BubbleContent render={<button type="button" />}>
                Show the answer
              </BubbleContent>
            </Bubble>
          </Example>
          <Example title="Focus" state="focus" vars={{ variant }}>
            <Bubble variant={variant}>
              <BubbleContent render={<button type="button" />}>
                Show the answer
              </BubbleContent>
            </Bubble>
          </Example>
        </Section>
      ))}

      <Section title="Alignment and reactions" columns={2}>
        <Example title="Start and end" className="flex-col items-stretch">
          <BubbleGroup className="w-full">
            <Bubble variant="muted">
              <BubbleContent>Can you send the report?</BubbleContent>
            </Bubble>
            <Bubble align="end">
              <BubbleContent>Yes. I will send it today.</BubbleContent>
            </Bubble>
          </BubbleGroup>
        </Example>
        <Example title="Reactions" className="flex-col items-stretch py-10">
          <BubbleGroup className="w-full gap-6">
            <Bubble variant="muted">
              <BubbleContent>The build passed.</BubbleContent>
              <BubbleReactions>🎉 2</BubbleReactions>
            </Bubble>
            <Bubble align="end">
              <BubbleContent>Good work, team.</BubbleContent>
              <BubbleReactions side="top" align="start">
                👍
              </BubbleReactions>
            </Bubble>
          </BubbleGroup>
        </Example>
      </Section>
    </>
  )
}
