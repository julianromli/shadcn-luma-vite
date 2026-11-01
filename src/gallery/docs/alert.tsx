import { HugeiconsIcon } from "@hugeicons/react"
import {
  Alert02Icon,
  CheckmarkCircle02Icon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Alert",
  description: "Shows an important message in the page flow.",
  category: "Feedback",
}

export default function AlertDocs() {
  return (
    <>
      <Section title="Variants" columns={2}>
        <Example title="Default">
          <Alert>
            <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} />
            <AlertTitle>New version available</AlertTitle>
            <AlertDescription>
              Reload the page to get the latest changes.
            </AlertDescription>
          </Alert>
        </Example>
        <Example title="Destructive">
          <Alert variant="destructive">
            <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
            <AlertTitle>Payment failed</AlertTitle>
            <AlertDescription>
              Your card was declined. Use a different card.
            </AlertDescription>
          </Alert>
        </Example>
      </Section>

      <Section title="Content" columns={2}>
        <Example title="Title only">
          <Alert>
            <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
            <AlertTitle>Your changes are saved.</AlertTitle>
          </Alert>
        </Example>
        <Example title="Without icon">
          <Alert>
            <AlertTitle>Scheduled maintenance</AlertTitle>
            <AlertDescription>
              The service stops on Sunday from 02:00 to 04:00 UTC.
            </AlertDescription>
          </Alert>
        </Example>
        <Example title="With action">
          <Alert>
            <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} />
            <AlertTitle>Update available</AlertTitle>
            <AlertDescription>Install version 2.0 now.</AlertDescription>
            <AlertAction>
              <Button size="xs">Update</Button>
            </AlertAction>
          </Alert>
        </Example>
        <Example title="With link">
          <Alert variant="destructive">
            <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
            <AlertTitle>Session expired</AlertTitle>
            <AlertDescription>
              Please <a href="#/alert">sign in again</a> to continue.
            </AlertDescription>
          </Alert>
        </Example>
      </Section>
    </>
  )
}
