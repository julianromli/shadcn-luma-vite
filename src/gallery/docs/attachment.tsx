import { HugeiconsIcon } from "@hugeicons/react"
import {
  Alert02Icon,
  Cancel01Icon,
  File02Icon,
  Pdf02Icon,
  RefreshIcon,
} from "@hugeicons/core-free-icons"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/components/ui/attachment"
import { Spinner } from "@/components/ui/spinner"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Attachment",
  description:
    "Shows a file that the user adds to a message or a form. It shows the upload state of the file.",
  category: "AI and chat",
}

export default function AttachmentDocs() {
  return (
    <>
      <Section title="States">
        <Example title="Done" canvas>
          <Attachment>
            <AttachmentMedia>
              <HugeiconsIcon icon={Pdf02Icon} strokeWidth={2} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>report.pdf</AttachmentTitle>
              <AttachmentDescription>2.4 MB</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction aria-label="Remove">
                <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </Example>
        <Example title="Idle" canvas>
          <Attachment state="idle">
            <AttachmentMedia>
              <HugeiconsIcon icon={File02Icon} strokeWidth={2} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>notes.txt</AttachmentTitle>
              <AttachmentDescription>Not uploaded</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </Example>
        <Example title="Uploading" canvas>
          <Attachment state="uploading">
            <AttachmentMedia>
              <Spinner />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>report.pdf</AttachmentTitle>
              <AttachmentDescription>Uploading 45%</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </Example>
        <Example title="Processing" canvas>
          <Attachment state="processing">
            <AttachmentMedia>
              <Spinner />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>report.pdf</AttachmentTitle>
              <AttachmentDescription>Reading the file</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </Example>
        <Example title="Error" canvas>
          <Attachment state="error">
            <AttachmentMedia>
              <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>report.pdf</AttachmentTitle>
              <AttachmentDescription>Upload failed</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction aria-label="Try again">
                <HugeiconsIcon icon={RefreshIcon} strokeWidth={2} />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </Example>
      </Section>

      <Section
        title="Interactive states"
        description="An attachment with a trigger opens the file. Hover and focus are forced so that you can compare them."
      >
        <Example title="Default">
          <Attachment>
            <AttachmentTrigger aria-label="Open report.pdf" />
            <AttachmentMedia>
              <HugeiconsIcon icon={Pdf02Icon} strokeWidth={2} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>report.pdf</AttachmentTitle>
              <AttachmentDescription>2.4 MB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </Example>
        <Example title="Hover" state="hover">
          <Attachment>
            <AttachmentTrigger aria-label="Open report.pdf" />
            <AttachmentMedia>
              <HugeiconsIcon icon={Pdf02Icon} strokeWidth={2} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>report.pdf</AttachmentTitle>
              <AttachmentDescription>2.4 MB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </Example>
        <Example title="Focus" state="focus">
          <Attachment>
            <AttachmentTrigger aria-label="Open report.pdf" />
            <AttachmentMedia>
              <HugeiconsIcon icon={Pdf02Icon} strokeWidth={2} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>report.pdf</AttachmentTitle>
              <AttachmentDescription>2.4 MB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </Example>
      </Section>

      <Section title="Sizes">
        <Example title="Default">
          <Attachment>
            <AttachmentMedia>
              <HugeiconsIcon icon={File02Icon} strokeWidth={2} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>data.csv</AttachmentTitle>
              <AttachmentDescription>12 KB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </Example>
        <Example title="Small" canvas>
          <Attachment size="sm">
            <AttachmentMedia>
              <HugeiconsIcon icon={File02Icon} strokeWidth={2} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>data.csv</AttachmentTitle>
              <AttachmentDescription>12 KB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </Example>
        <Example title="Extra small" canvas>
          <Attachment size="xs">
            <AttachmentMedia>
              <HugeiconsIcon icon={File02Icon} strokeWidth={2} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>data.csv</AttachmentTitle>
            </AttachmentContent>
          </Attachment>
        </Example>
      </Section>

      <Section title="Orientation and media">
        <Example title="Vertical" canvas>
          <Attachment orientation="vertical">
            <AttachmentMedia>
              <HugeiconsIcon icon={Pdf02Icon} strokeWidth={2} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>report.pdf</AttachmentTitle>
              <AttachmentDescription>2.4 MB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </Example>
        <Example title="Image" canvas>
          <Attachment>
            <AttachmentMedia variant="image">
              <img src="https://github.com/shadcn.png" alt="" />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>photo.jpg</AttachmentTitle>
              <AttachmentDescription>840 KB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </Example>
        <Example title="Image only, vertical" canvas>
          <Attachment orientation="vertical">
            <AttachmentMedia variant="image">
              <img src="https://github.com/shadcn.png" alt="photo.jpg" />
            </AttachmentMedia>
            <AttachmentActions>
              <AttachmentAction variant="secondary" aria-label="Remove">
                <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </Example>
      </Section>

      <Section title="Group" columns={1}>
        <Example title="Attachment group" canvas>
          <AttachmentGroup className="w-full">
            <Attachment>
              <AttachmentMedia>
                <HugeiconsIcon icon={Pdf02Icon} strokeWidth={2} />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>report.pdf</AttachmentTitle>
                <AttachmentDescription>2.4 MB</AttachmentDescription>
              </AttachmentContent>
            </Attachment>
            <Attachment state="uploading">
              <AttachmentMedia>
                <Spinner />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>data.csv</AttachmentTitle>
                <AttachmentDescription>Uploading</AttachmentDescription>
              </AttachmentContent>
            </Attachment>
            <Attachment state="error">
              <AttachmentMedia>
                <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>video.mov</AttachmentTitle>
                <AttachmentDescription>File is too large</AttachmentDescription>
              </AttachmentContent>
            </Attachment>
          </AttachmentGroup>
        </Example>
      </Section>
    </>
  )
}
