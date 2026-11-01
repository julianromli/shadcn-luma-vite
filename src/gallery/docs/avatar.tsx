import { HugeiconsIcon } from "@hugeicons/react"
import { PlusSignIcon, Tick02Icon } from "@hugeicons/core-free-icons"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Avatar",
  description:
    "Shows an image of a user. It shows initials when the image does not load.",
  category: "Data display",
}

export default function AvatarDocs() {
  return (
    <>
      <Section title="Variants">
        <Example title="Image" canvas>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Example>
        <Example title="Fallback" canvas>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Example>
        <Example title="Broken image">
          <Avatar>
            <AvatarImage src="/missing.png" alt="Jane Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Example>
      </Section>

      <Section title="Sizes">
        <Example title="Small" canvas>
          <Avatar size="sm">
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Example>
        <Example title="Default">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Example>
        <Example title="Large" canvas>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Example>
      </Section>

      <Section title="Badge">
        <Example title="Status dot" canvas>
          <Avatar size="sm">
            <AvatarFallback>JD</AvatarFallback>
            <AvatarBadge className="bg-green-600" />
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
            <AvatarBadge className="bg-green-600" />
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>JD</AvatarFallback>
            <AvatarBadge className="bg-green-600" />
          </Avatar>
        </Example>
        <Example title="Badge with icon" canvas>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            <AvatarBadge>
              <HugeiconsIcon icon={Tick02Icon} strokeWidth={3} />
            </AvatarBadge>
          </Avatar>
        </Example>
      </Section>

      <Section title="Group">
        <Example title="Group" canvas>
          <AvatarGroup>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </Example>
        <Example title="Group with count" canvas>
          <AvatarGroup>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+3</AvatarGroupCount>
          </AvatarGroup>
        </Example>
        <Example title="Large group with icon" canvas>
          <AvatarGroup>
            <Avatar size="lg">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>
              <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} />
            </AvatarGroupCount>
          </AvatarGroup>
        </Example>
      </Section>
    </>
  )
}
