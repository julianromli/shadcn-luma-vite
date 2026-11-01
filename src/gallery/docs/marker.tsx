import { HugeiconsIcon } from "@hugeicons/react"
import { Calendar03Icon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons"

import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Marker",
  description:
    "Shows a short note between messages, such as a date or an event in a conversation.",
  category: "AI and chat",
}

export default function MarkerDocs() {
  return (
    <>
      <Section title="Variants">
        <Example title="Default" canvas>
          <Marker>
            <MarkerContent>The chat started.</MarkerContent>
          </Marker>
        </Example>
        <Example title="Separator" canvas>
          <Marker variant="separator">
            <MarkerContent>Today</MarkerContent>
          </Marker>
        </Example>
        <Example title="Border" canvas>
          <Marker variant="border">
            <MarkerContent>Earlier messages</MarkerContent>
          </Marker>
        </Example>
      </Section>

      <Section title="With content">
        <Example title="With icon" canvas>
          <Marker>
            <MarkerIcon>
              <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
            </MarkerIcon>
            <MarkerContent>The task is complete.</MarkerContent>
          </Marker>
        </Example>
        <Example title="Separator with icon" canvas>
          <Marker variant="separator">
            <MarkerIcon>
              <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
            </MarkerIcon>
            <MarkerContent>1 November</MarkerContent>
          </Marker>
        </Example>
        <Example title="With link" canvas>
          <Marker>
            <MarkerContent>
              Alex joined the chat. <a href="#/marker">Show profile</a>
            </MarkerContent>
          </Marker>
        </Example>
        <Example title="Link hover" state="hover">
          <Marker>
            <MarkerContent>
              Alex joined the chat. <a href="#/marker">Show profile</a>
            </MarkerContent>
          </Marker>
        </Example>
      </Section>
    </>
  )
}
