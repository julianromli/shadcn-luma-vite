import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Popover",
  description:
    "Shows rich content in a small panel next to its trigger. The panel opens when the user clicks the trigger.",
  category: "Overlays",
}

export default function PopoverDocs() {
  return (
    <>
      <Section title="Variants">
        <Example title="Default" canvas>
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              Open popover
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>About this file</PopoverTitle>
                <PopoverDescription>
                  You changed this file two hours ago.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </Example>
        <Example title="With form" canvas>
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              Dimensions
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <PopoverHeader>
                <PopoverTitle>Dimensions</PopoverTitle>
                <PopoverDescription>
                  Set the dimensions of the layer.
                </PopoverDescription>
              </PopoverHeader>
              <div className="grid gap-3">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="popover-width">Width</Label>
                  <Input
                    id="popover-width"
                    defaultValue="100%"
                    className="col-span-2"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="popover-height">Height</Label>
                  <Input
                    id="popover-height"
                    defaultValue="25px"
                    className="col-span-2"
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </Example>
      </Section>

      <Section title="Sides">
        <Example title="Top" canvas>
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              Top
            </PopoverTrigger>
            <PopoverContent side="top">
              <PopoverDescription>This opens above.</PopoverDescription>
            </PopoverContent>
          </Popover>
        </Example>
        <Example title="Right" canvas>
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              Right
            </PopoverTrigger>
            <PopoverContent side="right">
              <PopoverDescription>This opens on the right.</PopoverDescription>
            </PopoverContent>
          </Popover>
        </Example>
        <Example title="Bottom" canvas>
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              Bottom
            </PopoverTrigger>
            <PopoverContent side="bottom">
              <PopoverDescription>This opens below.</PopoverDescription>
            </PopoverContent>
          </Popover>
        </Example>
        <Example title="Left" canvas>
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              Left
            </PopoverTrigger>
            <PopoverContent side="left">
              <PopoverDescription>This opens on the left.</PopoverDescription>
            </PopoverContent>
          </Popover>
        </Example>
      </Section>

      <Section title="Alignment">
        <Example title="Start" canvas>
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              Align start
            </PopoverTrigger>
            <PopoverContent align="start">
              <PopoverDescription>Aligned to the start.</PopoverDescription>
            </PopoverContent>
          </Popover>
        </Example>
        <Example title="Center" canvas>
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              Align center
            </PopoverTrigger>
            <PopoverContent align="center">
              <PopoverDescription>Aligned to the center.</PopoverDescription>
            </PopoverContent>
          </Popover>
        </Example>
        <Example title="End" canvas>
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              Align end
            </PopoverTrigger>
            <PopoverContent align="end">
              <PopoverDescription>Aligned to the end.</PopoverDescription>
            </PopoverContent>
          </Popover>
        </Example>
      </Section>

      <Section
        title="Trigger states"
        description="Hover and focus are forced so that you can compare them."
      >
        <Example title="Default">
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              Open popover
            </PopoverTrigger>
          </Popover>
        </Example>
        <Example title="Hover" state="hover">
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              Open popover
            </PopoverTrigger>
          </Popover>
        </Example>
        <Example title="Focus" state="focus">
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              Open popover
            </PopoverTrigger>
          </Popover>
        </Example>
        <Example title="Disabled">
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />} disabled>
              Open popover
            </PopoverTrigger>
          </Popover>
        </Example>
      </Section>
    </>
  )
}
