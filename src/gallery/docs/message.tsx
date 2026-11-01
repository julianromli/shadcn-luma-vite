import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Message",
  description:
    "Puts a chat message together: an avatar, a header, one or more bubbles and a footer.",
  category: "AI and chat",
}

export default function MessageDocs() {
  return (
    <>
      <Section title="Alignment" columns={2}>
        <Example title="Start" canvas>
          <Message>
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble variant="muted">
                <BubbleContent>Hello! How can I help you today?</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
        </Example>
        <Example title="End" canvas>
          <Message align="end">
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble>
                <BubbleContent>Please make a summary of this file.</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
        </Example>
      </Section>

      <Section title="Parts" columns={2}>
        <Example title="Header and footer" canvas>
          <Message>
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <MessageHeader>Assistant</MessageHeader>
              <Bubble variant="muted">
                <BubbleContent>The file has three main parts.</BubbleContent>
              </Bubble>
              <MessageFooter>10:42</MessageFooter>
            </MessageContent>
          </Message>
        </Example>
        <Example title="Ghost bubble" canvas>
          <Message>
            <MessageContent>
              <MessageHeader>Assistant</MessageHeader>
              <Bubble variant="ghost">
                <BubbleContent>
                  A ghost bubble has no background. Use it for long answers.
                </BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
        </Example>
        <Example title="More than one bubble" canvas>
          <Message align="end">
            <MessageContent>
              <Bubble>
                <BubbleContent>I have two questions.</BubbleContent>
              </Bubble>
              <Bubble>
                <BubbleContent>When is the next release?</BubbleContent>
              </Bubble>
              <MessageFooter>Read</MessageFooter>
            </MessageContent>
          </Message>
        </Example>
      </Section>

      <Section title="Conversation" columns={1}>
        <Example title="Message group" canvas>
          <MessageGroup className="w-full max-w-lg gap-4">
            <Message align="end">
              <MessageContent>
                <Bubble>
                  <BubbleContent>What is a design token?</BubbleContent>
                </Bubble>
              </MessageContent>
            </Message>
            <Message>
              <MessageAvatar>
                <Avatar>
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              </MessageAvatar>
              <MessageContent>
                <Bubble variant="muted">
                  <BubbleContent>
                    A design token is a named value, such as a color or a
                    space. Components use tokens, not fixed values.
                  </BubbleContent>
                </Bubble>
              </MessageContent>
            </Message>
          </MessageGroup>
        </Example>
      </Section>
    </>
  )
}
