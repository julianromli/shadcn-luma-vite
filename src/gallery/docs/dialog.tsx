import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Dialog",
  description:
    "Shows content in a window on top of the page. The page behind it is not available until the user closes the dialog.",
  category: "Overlays",
}

function ControlledDialog() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline" />}>
        Open controlled dialog
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Controlled dialog</DialogTitle>
          <DialogDescription>
            The parent component keeps the open state.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Done</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default function DialogDocs() {
  return (
    <>
      <Section title="Variants">
        <Example title="Default" canvas>
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Open dialog
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Share this file</DialogTitle>
                <DialogDescription>
                  All users with the link can see this file.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter showCloseButton>
                <Button>Copy link</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Example>
        <Example title="With form" canvas>
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Edit profile
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <form
                className="grid gap-4"
                onSubmit={(event) => event.preventDefault()}
              >
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Change your profile data. Then click Save.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-2">
                  <Label htmlFor="dialog-name">Name</Label>
                  <Input id="dialog-name" defaultValue="Alex Lee" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dialog-email">Email</Label>
                  <Input
                    id="dialog-email"
                    type="email"
                    defaultValue="alex@example.com"
                  />
                </div>
                <DialogFooter>
                  <DialogClose render={<Button variant="outline" />}>
                    Cancel
                  </DialogClose>
                  <Button type="submit">Save</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </Example>
        <Example title="No close button" canvas>
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Open dialog
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>Update is ready</DialogTitle>
                <DialogDescription>
                  Restart the app to use the new version.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>
                  Later
                </DialogClose>
                <DialogClose render={<Button />}>Restart</DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Example>
        <Example title="Long content" canvas>
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Read terms
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Terms of use</DialogTitle>
                <DialogDescription>
                  Read these terms before you continue.
                </DialogDescription>
              </DialogHeader>
              <div className="-mx-6 max-h-64 overflow-y-auto px-6 text-sm">
                {Array.from({ length: 8 }, (_, index) => (
                  <p key={index} className="mb-3">
                    You must use this service only for legal purposes. Do
                    not share your account with other persons.
                  </p>
                ))}
              </div>
              <DialogFooter showCloseButton>
                <DialogClose render={<Button />}>I agree</DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Example>
        <Example title="Controlled" source="ControlledDialog">
          <ControlledDialog />
        </Example>
      </Section>

      <Section
        title="Trigger states"
        description="Hover and focus are forced so that you can compare them."
      >
        <Example title="Default">
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Open dialog
            </DialogTrigger>
          </Dialog>
        </Example>
        <Example title="Hover" state="hover">
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Open dialog
            </DialogTrigger>
          </Dialog>
        </Example>
        <Example title="Focus" state="focus">
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Open dialog
            </DialogTrigger>
          </Dialog>
        </Example>
        <Example title="Disabled">
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />} disabled>
              Open dialog
            </DialogTrigger>
          </Dialog>
        </Example>
      </Section>
    </>
  )
}
