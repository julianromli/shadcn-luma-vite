import { HugeiconsIcon } from "@hugeicons/react"
import {
  CloudUploadIcon,
  FolderOpenIcon,
  Search01Icon,
} from "@hugeicons/core-free-icons"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Empty",
  description:
    "Shows a message when there is no data. It tells the user what to do next.",
  category: "Feedback",
}

export default function EmptyDocs() {
  return (
    <>
      <Section title="Media variants" columns={2}>
        <Example title="Icon">
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <HugeiconsIcon icon={FolderOpenIcon} strokeWidth={2} />
              </EmptyMedia>
              <EmptyTitle>No projects yet</EmptyTitle>
              <EmptyDescription>
                Create a project to start your work.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button>Create project</Button>
            </EmptyContent>
          </Empty>
        </Example>
        <Example title="Default (custom media)">
          <Empty>
            <EmptyHeader>
              <EmptyMedia>
                <Avatar size="lg">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </EmptyMedia>
              <EmptyTitle>User is offline</EmptyTitle>
              <EmptyDescription>
                Leave a message. Jane will see it later.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </Example>
      </Section>

      <Section title="Composition" columns={2}>
        <Example title="Dashed border">
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <HugeiconsIcon icon={CloudUploadIcon} strokeWidth={2} />
              </EmptyMedia>
              <EmptyTitle>Upload files</EmptyTitle>
              <EmptyDescription>
                Drag files here or click the button.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="outline">Select files</Button>
            </EmptyContent>
          </Empty>
        </Example>
        <Example title="With link">
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
              </EmptyMedia>
              <EmptyTitle>No results</EmptyTitle>
              <EmptyDescription>
                Try a different search, or <a href="#/empty">clear the filters</a>.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </Example>
      </Section>
    </>
  )
}
