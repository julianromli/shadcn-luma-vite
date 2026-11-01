import { HugeiconsIcon } from "@hugeicons/react"
import { Delete02Icon } from "@hugeicons/core-free-icons"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Alert Dialog",
  description:
    "Asks the user to confirm an important action. The user must select an action to close it.",
  category: "Overlays",
}

export default function AlertDialogDocs() {
  return (
    <>
      <Section title="Variants">
        <Example title="Default" canvas>
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>
              Show dialog
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  You cannot undo this action. This deletes your account and
                  all your data.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Example>
        <Example title="Small" canvas>
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>
              Show small dialog
            </AlertDialogTrigger>
            <AlertDialogContent size="sm">
              <AlertDialogHeader>
                <AlertDialogTitle>Discard changes?</AlertDialogTitle>
                <AlertDialogDescription>
                  You will lose the changes that you did not save.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Discard</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Example>
        <Example title="With media" canvas>
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>
              Delete project
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogMedia>
                  <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} />
                </AlertDialogMedia>
                <AlertDialogTitle>Delete this project?</AlertDialogTitle>
                <AlertDialogDescription>
                  This deletes the project and all its files.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction variant="destructive">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Example>
        <Example title="Small with media" canvas>
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="destructive" />}>
              Delete chat
            </AlertDialogTrigger>
            <AlertDialogContent size="sm">
              <AlertDialogHeader>
                <AlertDialogMedia className="bg-destructive/10 text-destructive">
                  <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} />
                </AlertDialogMedia>
                <AlertDialogTitle>Delete chat?</AlertDialogTitle>
                <AlertDialogDescription>
                  This deletes all messages in this chat.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction variant="destructive">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Example>
      </Section>

      <Section
        title="Trigger states"
        description="Hover and focus are forced so that you can compare them."
      >
        <Example title="Default">
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>
              Show dialog
            </AlertDialogTrigger>
          </AlertDialog>
        </Example>
        <Example title="Hover" state="hover">
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>
              Show dialog
            </AlertDialogTrigger>
          </AlertDialog>
        </Example>
        <Example title="Focus" state="focus">
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>
              Show dialog
            </AlertDialogTrigger>
          </AlertDialog>
        </Example>
        <Example title="Disabled">
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />} disabled>
              Show dialog
            </AlertDialogTrigger>
          </AlertDialog>
        </Example>
      </Section>
    </>
  )
}
