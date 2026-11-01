import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Toast",
  description:
    "Shows a short message that closes after some seconds. Put the Toaster at the root of your app. Then call toast.add() from any place.",
  category: "Feedback",
}

function UndoToast() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const id = toast.add({
          title: "Message deleted",
          description: "You can undo this action for 5 seconds.",
          timeout: 5000,
          actionProps: {
            children: "Undo",
            onClick: () => toast.close(id),
          },
        })
      }}
    >
      Delete message
    </Button>
  )
}

function PromiseToast() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.promise(
          new Promise((resolve) => setTimeout(resolve, 2000)),
          {
            loading: { title: "Uploading", type: "loading" },
            success: { title: "File uploaded", type: "success" },
            error: { title: "Upload failed", type: "error" },
          }
        )
      }}
    >
      Upload file
    </Button>
  )
}

export default function ToastDocs() {
  return (
    <>
      <Section title="Types">
        <Example title="Default" canvas>
          <Button
            variant="outline"
            onClick={() =>
              toast.add({
                title: "Event created",
                description: "Monday, 2 November at 09:00",
              })
            }
          >
            Show toast
          </Button>
        </Example>
        <Example title="Success" canvas>
          <Button
            variant="outline"
            onClick={() =>
              toast.add({
                type: "success",
                title: "Changes saved",
                description: "Your profile is up to date.",
              })
            }
          >
            Show success
          </Button>
        </Example>
        <Example title="Info" canvas>
          <Button
            variant="outline"
            onClick={() =>
              toast.add({
                type: "info",
                title: "New version",
                description: "Refresh the page to use version 2.0.",
              })
            }
          >
            Show info
          </Button>
        </Example>
        <Example title="Warning" canvas>
          <Button
            variant="outline"
            onClick={() =>
              toast.add({
                type: "warning",
                title: "Storage is almost full",
                description: "You used 90% of your storage.",
              })
            }
          >
            Show warning
          </Button>
        </Example>
        <Example title="Error" canvas>
          <Button
            variant="outline"
            onClick={() =>
              toast.add({
                type: "error",
                title: "Payment failed",
                description: "Make sure that your card is correct.",
              })
            }
          >
            Show error
          </Button>
        </Example>
        <Example title="Loading" canvas>
          <Button
            variant="outline"
            onClick={() =>
              toast.add({
                type: "loading",
                title: "Sending",
                description: "Please wait.",
              })
            }
          >
            Show loading
          </Button>
        </Example>
      </Section>

      <Section title="Options">
        <Example title="Title only" canvas>
          <Button
            variant="outline"
            onClick={() => toast.add({ title: "Link copied" })}
          >
            Copy link
          </Button>
        </Example>
        <Example title="With action" source="UndoToast" canvas>
          <UndoToast />
        </Example>
        <Example title="Promise" source="PromiseToast">
          <PromiseToast />
        </Example>
      </Section>
    </>
  )
}
