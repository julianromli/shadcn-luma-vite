import * as React from "react"

import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Message, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Message Scroller",
  description:
    "Holds a list of chat messages. It keeps the newest message in view and shows a button to go back to the end.",
  category: "AI and chat",
}

function MessageScrollerDemo() {
  const [messages, setMessages] = React.useState(() =>
    Array.from({ length: 12 }, (_, index) => ({
      id: String(index),
      fromUser: index % 2 === 0,
      text: index % 2 === 0 ? `Question ${index / 2 + 1}` : "Here is the answer.",
    }))
  )

  return (
    <div className="flex w-full flex-col gap-3">
      <MessageScrollerProvider>
        <MessageScroller className="h-80 rounded-2xl border">
          <MessageScrollerViewport>
            <MessageScrollerContent className="gap-3 p-4">
              {messages.map((message) => (
                <MessageScrollerItem
                  key={message.id}
                  messageId={message.id}
                  scrollAnchor={message.fromUser}
                >
                  <Message align={message.fromUser ? "end" : "start"}>
                    <MessageContent>
                      <Bubble variant={message.fromUser ? "default" : "muted"}>
                        <BubbleContent>{message.text}</BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
      <Button
        variant="outline"
        className="self-start"
        onClick={() =>
          setMessages((list) => [
            ...list,
            {
              id: String(list.length),
              fromUser: list.length % 2 === 0,
              text: `New message ${list.length + 1}`,
            },
          ])
        }
      >
        Add message
      </Button>
    </div>
  )
}

function ScrollToStartDemo() {
  return (
    <MessageScrollerProvider defaultScrollPosition="start">
      <MessageScroller className="h-64 w-full rounded-2xl border">
        <MessageScrollerViewport>
          <MessageScrollerContent className="gap-3 p-4">
            {Array.from({ length: 10 }, (_, index) => (
              <MessageScrollerItem key={index} messageId={String(index)}>
                <Bubble variant="muted">
                  <BubbleContent>Message {index + 1}</BubbleContent>
                </Bubble>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton direction="start" />
        <MessageScrollerButton direction="end" />
      </MessageScroller>
    </MessageScrollerProvider>
  )
}

export default function MessageScrollerDocs() {
  return (
    <>
      <Section title="Usage" columns={1}>
        <Example
          title="Chat with scroll button"
          source="MessageScrollerDemo"
          className="items-stretch"
        >
          <MessageScrollerDemo />
        </Example>
      </Section>
      <Section
        title="Options"
        description="This list starts at the top. It has a button for each direction."
        columns={1}
      >
        <Example title="Start position" source="ScrollToStartDemo">
          <ScrollToStartDemo />
        </Example>
      </Section>
    </>
  )
}
