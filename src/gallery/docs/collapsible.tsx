import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpDownIcon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Collapsible",
  description: "Opens and closes one section of content.",
  category: "Layout",
}

function ControlledCollapsible() {
  const [open, setOpen] = React.useState(false)

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="flex w-full max-w-xs flex-col gap-2"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium">
          {open ? "Repositories are open" : "Repositories are closed"}
        </span>
        <CollapsibleTrigger
          render={<Button variant="ghost" size="icon-sm" aria-label="Toggle" />}
        >
          <HugeiconsIcon icon={ArrowUpDownIcon} strokeWidth={2} />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-xl border px-3 py-2 text-sm">design-system</div>
        <div className="rounded-xl border px-3 py-2 text-sm">website</div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default function CollapsibleDocs() {
  return (
    <>
      <Section title="States">
        <Example title="Closed" canvas>
          <Collapsible className="flex w-full max-w-xs flex-col gap-2">
            <CollapsibleTrigger render={<Button variant="outline" />}>
              Show details
            </CollapsibleTrigger>
            <CollapsibleContent className="rounded-xl border px-3 py-2 text-sm">
              The order ships in 2 days.
            </CollapsibleContent>
          </Collapsible>
        </Example>
        <Example title="Open" canvas>
          <Collapsible defaultOpen className="flex w-full max-w-xs flex-col gap-2">
            <CollapsibleTrigger render={<Button variant="outline" />}>
              Show details
            </CollapsibleTrigger>
            <CollapsibleContent className="rounded-xl border px-3 py-2 text-sm">
              The order ships in 2 days.
            </CollapsibleContent>
          </Collapsible>
        </Example>
        <Example title="Disabled">
          <Collapsible disabled className="flex w-full max-w-xs flex-col gap-2">
            <CollapsibleTrigger render={<Button variant="outline" />}>
              Show details
            </CollapsibleTrigger>
            <CollapsibleContent className="rounded-xl border px-3 py-2 text-sm">
              The order ships in 2 days.
            </CollapsibleContent>
          </Collapsible>
        </Example>
      </Section>

      <Section title="Controlled" columns={2}>
        <Example title="Controlled" source="ControlledCollapsible">
          <ControlledCollapsible />
        </Example>
      </Section>
    </>
  )
}
