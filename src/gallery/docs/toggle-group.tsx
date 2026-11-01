import { HugeiconsIcon } from "@hugeicons/react"
import {
  TextBoldIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@hugeicons/core-free-icons"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Toggle Group",
  description: "A set of toggle buttons. Use it to turn one or more options on.",
  category: "Actions",
}

export default function ToggleGroupDocs() {
  return (
    <>
      <Section title="Variants">
        <Example title="Default" canvas>
          <ToggleGroup multiple>
            <ToggleGroupItem value="bold" aria-label="Bold">
              <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <HugeiconsIcon icon={TextItalicIcon} strokeWidth={2} />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <HugeiconsIcon icon={TextUnderlineIcon} strokeWidth={2} />
            </ToggleGroupItem>
          </ToggleGroup>
        </Example>
        <Example title="Outline" canvas>
          <ToggleGroup variant="outline" multiple>
            <ToggleGroupItem value="bold" aria-label="Bold">
              <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <HugeiconsIcon icon={TextItalicIcon} strokeWidth={2} />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <HugeiconsIcon icon={TextUnderlineIcon} strokeWidth={2} />
            </ToggleGroupItem>
          </ToggleGroup>
        </Example>
        <Example title="Outline, no spacing" canvas>
          <ToggleGroup variant="outline" spacing={0} multiple>
            <ToggleGroupItem value="bold" aria-label="Bold">
              <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <HugeiconsIcon icon={TextItalicIcon} strokeWidth={2} />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <HugeiconsIcon icon={TextUnderlineIcon} strokeWidth={2} />
            </ToggleGroupItem>
          </ToggleGroup>
        </Example>
      </Section>

      <Section title="Selection">
        <Example title="One value" canvas>
          <ToggleGroup variant="outline" defaultValue={["left"]}>
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="center">Center</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
          </ToggleGroup>
        </Example>
        <Example title="More than one value" canvas>
          <ToggleGroup variant="outline" multiple defaultValue={["bold", "italic"]}>
            <ToggleGroupItem value="bold" aria-label="Bold">
              <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <HugeiconsIcon icon={TextItalicIcon} strokeWidth={2} />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <HugeiconsIcon icon={TextUnderlineIcon} strokeWidth={2} />
            </ToggleGroupItem>
          </ToggleGroup>
        </Example>
        <Example title="Vertical" canvas>
          <ToggleGroup variant="outline" orientation="vertical" defaultValue={["top"]}>
            <ToggleGroupItem value="top">Top</ToggleGroupItem>
            <ToggleGroupItem value="middle">Middle</ToggleGroupItem>
            <ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>
          </ToggleGroup>
        </Example>
      </Section>

      <Section
        title="States"
        description="Hover and focus are forced so that you can compare them. The live examples react to your mouse and keyboard."
      >
        <Example title="Hover" state="hover">
          <ToggleGroup variant="outline">
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
          </ToggleGroup>
        </Example>
        <Example title="Focus" state="focus">
          <ToggleGroup variant="outline">
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
          </ToggleGroup>
        </Example>
        <Example title="Disabled item">
          <ToggleGroup variant="outline">
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="right" disabled>
              Right
            </ToggleGroupItem>
          </ToggleGroup>
        </Example>
        <Example title="Disabled group">
          <ToggleGroup variant="outline" disabled defaultValue={["left"]}>
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
          </ToggleGroup>
        </Example>
      </Section>

      <Section title="Sizes">
        <Example title="Small" canvas>
          <ToggleGroup variant="outline" size="sm" defaultValue={["a"]}>
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
          </ToggleGroup>
        </Example>
        <Example title="Default">
          <ToggleGroup variant="outline" defaultValue={["a"]}>
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
          </ToggleGroup>
        </Example>
        <Example title="Large" canvas>
          <ToggleGroup variant="outline" size="lg" defaultValue={["a"]}>
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
          </ToggleGroup>
        </Example>
      </Section>
    </>
  )
}
