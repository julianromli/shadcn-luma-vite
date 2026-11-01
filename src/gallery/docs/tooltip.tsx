import { HugeiconsIcon } from "@hugeicons/react"
import { PlusSignIcon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Tooltip",
  description:
    "Shows a short label when the user moves the pointer onto an element or focuses it. Put the TooltipProvider at the root of your app.",
  category: "Overlays",
}

export default function TooltipDocs() {
  return (
    <>
      <Section title="Variants">
        <Example title="Default" canvas>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Hover me
            </TooltipTrigger>
            <TooltipContent>Add to library</TooltipContent>
          </Tooltip>
        </Example>
        <Example title="Icon button" canvas>
          <Tooltip>
            <TooltipTrigger
              render={<Button variant="outline" size="icon" aria-label="Add" />}
            >
              <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} />
            </TooltipTrigger>
            <TooltipContent>Add item</TooltipContent>
          </Tooltip>
        </Example>
        <Example title="With shortcut" canvas>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Save
            </TooltipTrigger>
            <TooltipContent>
              Save file <Kbd>⌘S</Kbd>
            </TooltipContent>
          </Tooltip>
        </Example>
        <Example title="Disabled button">
          <Tooltip>
            <TooltipTrigger render={<span tabIndex={0} />}>
              <Button variant="outline" disabled>
                Publish
              </Button>
            </TooltipTrigger>
            <TooltipContent>You do not have permission</TooltipContent>
          </Tooltip>
        </Example>
      </Section>

      <Section title="Sides">
        <Example title="Top" canvas>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Top
            </TooltipTrigger>
            <TooltipContent side="top">Tooltip on top</TooltipContent>
          </Tooltip>
        </Example>
        <Example title="Right" canvas>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Right
            </TooltipTrigger>
            <TooltipContent side="right">Tooltip on the right</TooltipContent>
          </Tooltip>
        </Example>
        <Example title="Bottom" canvas>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Bottom
            </TooltipTrigger>
            <TooltipContent side="bottom">Tooltip below</TooltipContent>
          </Tooltip>
        </Example>
        <Example title="Left" canvas>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Left
            </TooltipTrigger>
            <TooltipContent side="left">Tooltip on the left</TooltipContent>
          </Tooltip>
        </Example>
      </Section>
    </>
  )
}
