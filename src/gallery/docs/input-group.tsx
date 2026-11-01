import { HugeiconsIcon } from "@hugeicons/react"
import {
  Copy01Icon,
  InformationCircleIcon,
  Mail01Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { Spinner } from "@/components/ui/spinner"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Input Group",
  description:
    "Adds icons, text or buttons to an input or a textarea. The parts look like one control.",
  category: "Forms",
}

export default function InputGroupDocs() {
  return (
    <>
      <Section title="Addon position">
        <Example title="Inline start" canvas>
          <InputGroup>
            <InputGroupInput placeholder="Search" />
            <InputGroupAddon>
              <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
            </InputGroupAddon>
          </InputGroup>
        </Example>
        <Example title="Inline end" canvas>
          <InputGroup>
            <InputGroupInput placeholder="Email" />
            <InputGroupAddon align="inline-end">
              <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
            </InputGroupAddon>
          </InputGroup>
        </Example>
        <Example title="Block start" canvas>
          <InputGroup>
            <InputGroupInput placeholder="Ada Lovelace" />
            <InputGroupAddon align="block-start">
              <InputGroupText>Full name</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Example>
        <Example title="Block end" canvas>
          <InputGroup>
            <InputGroupTextarea placeholder="Write a comment" />
            <InputGroupAddon align="block-end">
              <InputGroupText>0 / 280</InputGroupText>
              <InputGroupButton variant="default" size="sm" className="ms-auto">
                Post
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Example>
      </Section>

      <Section title="Addon content">
        <Example title="Text" canvas>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="example.com" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Example>
        <Example title="Icon button" canvas>
          <InputGroup>
            <InputGroupInput defaultValue="sk-12345" readOnly />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs" aria-label="Copy">
                <HugeiconsIcon icon={Copy01Icon} strokeWidth={2} />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Example>
        <Example title="Keyboard shortcut" canvas>
          <InputGroup>
            <InputGroupInput placeholder="Search" />
            <InputGroupAddon>
              <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <Kbd>⌘K</Kbd>
            </InputGroupAddon>
          </InputGroup>
        </Example>
        <Example title="Loading">
          <InputGroup>
            <InputGroupInput placeholder="Searching" />
            <InputGroupAddon align="inline-end">
              <Spinner />
            </InputGroupAddon>
          </InputGroup>
        </Example>
        <Example title="Help icon" canvas>
          <InputGroup>
            <InputGroupInput placeholder="Password" type="password" />
            <InputGroupAddon align="inline-end">
              <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} />
            </InputGroupAddon>
          </InputGroup>
        </Example>
      </Section>

      <Section
        title="States"
        description="Focus is forced so that you can compare it. The default example reacts to your mouse and keyboard."
      >
        <Example title="Default">
          <InputGroup>
            <InputGroupInput placeholder="Search" />
            <InputGroupAddon>
              <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
            </InputGroupAddon>
          </InputGroup>
        </Example>
        <Example title="Focus" state="focus">
          <InputGroup>
            <InputGroupInput placeholder="Search" />
            <InputGroupAddon>
              <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
            </InputGroupAddon>
          </InputGroup>
        </Example>
        <Example title="Disabled">
          <InputGroup data-disabled="true">
            <InputGroupInput placeholder="Search" disabled />
            <InputGroupAddon>
              <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
            </InputGroupAddon>
          </InputGroup>
        </Example>
        <Example title="Invalid">
          <InputGroup>
            <InputGroupInput defaultValue="ada@" aria-invalid />
            <InputGroupAddon>
              <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
            </InputGroupAddon>
          </InputGroup>
        </Example>
      </Section>
    </>
  )
}
