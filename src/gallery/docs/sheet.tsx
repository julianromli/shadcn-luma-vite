import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Sheet",
  description:
    "Shows a panel that comes in from one edge of the screen. Use it for content that adds to the main page.",
  category: "Overlays",
}

export default function SheetDocs() {
  return (
    <>
      <Section title="Sides">
        <Example title="Right">
          <Sheet>
            <SheetTrigger render={<Button variant="outline" />}>
              Open right
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Change your profile data. Then click Save.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 px-6">
                <div className="grid gap-2">
                  <Label htmlFor="sheet-name">Name</Label>
                  <Input id="sheet-name" defaultValue="Alex Lee" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sheet-username">Username</Label>
                  <Input id="sheet-username" defaultValue="@alexlee" />
                </div>
              </div>
              <SheetFooter>
                <Button>Save</Button>
                <SheetClose render={<Button variant="outline" />}>
                  Cancel
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </Example>
        <Example title="Left">
          <Sheet>
            <SheetTrigger render={<Button variant="outline" />}>
              Open left
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Go to a page.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </Example>
        <Example title="Top">
          <Sheet>
            <SheetTrigger render={<Button variant="outline" />}>
              Open top
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>Notice</SheetTitle>
                <SheetDescription>
                  The system will stop for repairs at 22:00.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </Example>
        <Example title="Bottom">
          <Sheet>
            <SheetTrigger render={<Button variant="outline" />}>
              Open bottom
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Cookie settings</SheetTitle>
                <SheetDescription>
                  Select the cookies that this site can use.
                </SheetDescription>
              </SheetHeader>
              <SheetFooter>
                <SheetClose render={<Button />}>Accept</SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </Example>
      </Section>

      <Section title="Options">
        <Example title="No close button">
          <Sheet>
            <SheetTrigger render={<Button variant="outline" />}>
              Open sheet
            </SheetTrigger>
            <SheetContent showCloseButton={false}>
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>Select filters for the list.</SheetDescription>
              </SheetHeader>
              <SheetFooter>
                <SheetClose render={<Button />}>Apply</SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </Example>
        <Example title="Disabled trigger">
          <Sheet>
            <SheetTrigger render={<Button variant="outline" />} disabled>
              Open sheet
            </SheetTrigger>
          </Sheet>
        </Example>
      </Section>
    </>
  )
}
