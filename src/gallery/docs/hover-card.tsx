import { HugeiconsIcon } from "@hugeicons/react"
import { Calendar03Icon } from "@hugeicons/core-free-icons"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Hover Card",
  description:
    "Shows a preview of linked content when the user moves the pointer onto a link.",
  category: "Overlays",
}

export default function HoverCardDocs() {
  return (
    <>
      <Section title="Variants" columns={2}>
        <Example title="Profile preview" canvas>
          <HoverCard>
            <HoverCardTrigger
              href="#/hover-card"
              render={<Button variant="link" nativeButton={false} />}
            >
              @alexlee
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex gap-4">
                <Avatar size="lg">
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-semibold">@alexlee</h4>
                  <p className="text-sm">
                    Designer and engineer. Makes tools for small teams.
                  </p>
                  <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground">
                    <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} className="size-4" />
                    Joined March 2024
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </Example>
        <Example title="Text link" canvas>
          <p className="text-sm">
            Read the{" "}
            <HoverCard>
              <HoverCardTrigger
                href="#/hover-card"
                className="font-medium underline underline-offset-4"
              >
                release notes
              </HoverCardTrigger>
              <HoverCardContent>
                <p className="text-sm">
                  Version 2.0 adds dark mode and a new sidebar.
                </p>
              </HoverCardContent>
            </HoverCard>{" "}
            for more data.
          </p>
        </Example>
      </Section>

      <Section title="Sides">
        <Example title="Top" canvas>
          <HoverCard>
            <HoverCardTrigger href="#/hover-card" className="text-sm underline">
              Top
            </HoverCardTrigger>
            <HoverCardContent side="top">
              <p className="text-sm">This opens above.</p>
            </HoverCardContent>
          </HoverCard>
        </Example>
        <Example title="Right" canvas>
          <HoverCard>
            <HoverCardTrigger href="#/hover-card" className="text-sm underline">
              Right
            </HoverCardTrigger>
            <HoverCardContent side="right">
              <p className="text-sm">This opens on the right.</p>
            </HoverCardContent>
          </HoverCard>
        </Example>
        <Example title="Bottom" canvas>
          <HoverCard>
            <HoverCardTrigger href="#/hover-card" className="text-sm underline">
              Bottom
            </HoverCardTrigger>
            <HoverCardContent side="bottom">
              <p className="text-sm">This opens below.</p>
            </HoverCardContent>
          </HoverCard>
        </Example>
        <Example title="Left" canvas>
          <HoverCard>
            <HoverCardTrigger href="#/hover-card" className="text-sm underline">
              Left
            </HoverCardTrigger>
            <HoverCardContent side="left">
              <p className="text-sm">This opens on the left.</p>
            </HoverCardContent>
          </HoverCard>
        </Example>
      </Section>
    </>
  )
}
