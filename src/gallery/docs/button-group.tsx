import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowDown01Icon,
  Copy01Icon,
  MoreHorizontalIcon,
  Search01Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Button Group",
  description: "Puts related buttons together in one row or one column.",
  category: "Actions",
}

export default function ButtonGroupDocs() {
  return (
    <>
      <Section title="Orientation">
        <Example title="Horizontal" canvas>
          <ButtonGroup>
            <Button variant="outline">Archive</Button>
            <Button variant="outline">Report</Button>
            <Button variant="outline">Snooze</Button>
          </ButtonGroup>
        </Example>
        <Example title="Vertical" canvas>
          <ButtonGroup orientation="vertical">
            <Button variant="outline">Top</Button>
            <Button variant="outline">Middle</Button>
            <Button variant="outline">Bottom</Button>
          </ButtonGroup>
        </Example>
        <Example title="Nested groups" canvas>
          <ButtonGroup>
            <ButtonGroup>
              <Button variant="outline">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="outline" size="icon" aria-label="More">
                <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
              </Button>
            </ButtonGroup>
          </ButtonGroup>
        </Example>
      </Section>

      <Section title="Sizes">
        <Example title="Small" canvas>
          <ButtonGroup>
            <Button variant="outline" size="sm">Day</Button>
            <Button variant="outline" size="sm">Week</Button>
            <Button variant="outline" size="sm">Month</Button>
          </ButtonGroup>
        </Example>
        <Example title="Default">
          <ButtonGroup>
            <Button variant="outline">Day</Button>
            <Button variant="outline">Week</Button>
            <Button variant="outline">Month</Button>
          </ButtonGroup>
        </Example>
        <Example title="Large" canvas>
          <ButtonGroup>
            <Button variant="outline" size="lg">Day</Button>
            <Button variant="outline" size="lg">Week</Button>
            <Button variant="outline" size="lg">Month</Button>
          </ButtonGroup>
        </Example>
      </Section>

      <Section
        title="States"
        description="Hover and focus are forced so that you can compare them. A focused button moves above its neighbors."
      >
        <Example title="Hover" state="hover">
          <ButtonGroup>
            <Button variant="outline">Archive</Button>
            <Button variant="outline">Report</Button>
          </ButtonGroup>
        </Example>
        <Example title="Focus" state="focus">
          <ButtonGroup>
            <Button variant="outline">Archive</Button>
            <Button variant="outline">Report</Button>
          </ButtonGroup>
        </Example>
        <Example title="Disabled item">
          <ButtonGroup>
            <Button variant="outline">Archive</Button>
            <Button variant="outline" disabled>
              Report
            </Button>
          </ButtonGroup>
        </Example>
      </Section>

      <Section title="With content">
        <Example title="Separator" canvas>
          <ButtonGroup>
            <Button variant="secondary">Copy</Button>
            <ButtonGroupSeparator />
            <Button variant="secondary">Paste</Button>
          </ButtonGroup>
        </Example>
        <Example title="Split button" canvas>
          <ButtonGroup>
            <Button>Save</Button>
            <ButtonGroupSeparator />
            <Button size="icon" aria-label="More save options">
              <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} />
            </Button>
          </ButtonGroup>
        </Example>
        <Example title="Text" canvas>
          <ButtonGroup>
            <ButtonGroupText>https://</ButtonGroupText>
            <Input placeholder="example.com" aria-label="Website" />
          </ButtonGroup>
        </Example>
        <Example title="Input" canvas>
          <ButtonGroup>
            <Input placeholder="Search" aria-label="Search" />
            <Button variant="outline" size="icon" aria-label="Search">
              <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
            </Button>
          </ButtonGroup>
        </Example>
        <Example title="Icon buttons" canvas>
          <ButtonGroup>
            <Button variant="outline" size="icon" aria-label="Copy">
              <HugeiconsIcon icon={Copy01Icon} strokeWidth={2} />
            </Button>
            <Button variant="outline" size="icon" aria-label="More">
              <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
            </Button>
          </ButtonGroup>
        </Example>
      </Section>
    </>
  )
}
