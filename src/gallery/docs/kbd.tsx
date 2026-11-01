import { HugeiconsIcon } from "@hugeicons/react"
import { CommandIcon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Kbd",
  description: "Shows a keyboard key or a keyboard shortcut.",
  category: "Data display",
}

export default function KbdDocs() {
  return (
    <>
      <Section title="Variants">
        <Example title="Single key">
          <Kbd>Esc</Kbd>
        </Example>
        <Example title="With icon">
          <Kbd>
            <HugeiconsIcon icon={CommandIcon} strokeWidth={2} />
          </Kbd>
        </Example>
        <Example title="Group">
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>Shift</Kbd>
            <Kbd>P</Kbd>
          </KbdGroup>
        </Example>
      </Section>

      <Section title="In context">
        <Example title="In text">
          <p className="text-sm text-muted-foreground">
            Press <Kbd>D</Kbd> to change the theme.
          </p>
        </Example>
        <Example title="In a button">
          <Button variant="outline">
            Search
            <Kbd>⌘K</Kbd>
          </Button>
        </Example>
        <Example title="In a tooltip">
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Save
            </TooltipTrigger>
            <TooltipContent>
              Save the file <Kbd>⌘S</Kbd>
            </TooltipContent>
          </Tooltip>
        </Example>
      </Section>
    </>
  )
}
