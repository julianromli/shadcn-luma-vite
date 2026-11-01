import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Drawer",
  description:
    "Shows a panel that the user can swipe to close. It is good for mobile screens.",
  category: "Overlays",
}

export default function DrawerDocs() {
  return (
    <>
      <Section title="Variants">
        <Example title="Default" canvas>
          <Drawer>
            <DrawerTrigger render={<Button variant="outline" />}>
              Open drawer
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Move goal</DrawerTitle>
                <DrawerDescription>
                  Set your daily activity goal.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose render={<Button variant="outline" />}>
                  Cancel
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Example>
        <Example title="With swipe handle" canvas>
          <Drawer showSwipeHandle>
            <DrawerTrigger render={<Button variant="outline" />}>
              Open drawer
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Share</DrawerTitle>
                <DrawerDescription>
                  Swipe down on the handle to close.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose render={<Button variant="outline" />}>
                  Close
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Example>
        <Example title="Not modal">
          <Drawer modal={false}>
            <DrawerTrigger render={<Button variant="outline" />}>
              Open drawer
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Now playing</DrawerTitle>
                <DrawerDescription>
                  You can use the page while this drawer is open.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose render={<Button variant="outline" />}>
                  Close
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Example>
      </Section>

      <Section title="Swipe directions">
        <Example title="Down" canvas>
          <Drawer swipeDirection="down">
            <DrawerTrigger render={<Button variant="outline" />}>
              From bottom
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>From bottom</DrawerTitle>
                <DrawerDescription>Swipe down to close.</DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </Example>
        <Example title="Up" canvas>
          <Drawer swipeDirection="up">
            <DrawerTrigger render={<Button variant="outline" />}>
              From top
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>From top</DrawerTitle>
                <DrawerDescription>Swipe up to close.</DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </Example>
        <Example title="Left" canvas>
          <Drawer swipeDirection="left">
            <DrawerTrigger render={<Button variant="outline" />}>
              From left
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>From left</DrawerTitle>
                <DrawerDescription>Swipe left to close.</DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </Example>
        <Example title="Right" canvas>
          <Drawer swipeDirection="right">
            <DrawerTrigger render={<Button variant="outline" />}>
              From right
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>From right</DrawerTitle>
                <DrawerDescription>Swipe right to close.</DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </Example>
      </Section>
    </>
  )
}
