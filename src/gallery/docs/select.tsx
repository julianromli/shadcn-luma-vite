import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Select",
  description: "Shows a list of options in a popup. The user selects one option.",
  category: "Forms",
}

export default function SelectDocs() {
  return (
    <>
      <Section
        title="States"
        description="Focus is forced so that you can compare it. The live examples react to your mouse and keyboard."
      >
        <Example title="Placeholder">
          <Select>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
          </Select>
        </Example>
        <Example title="With value">
          <Select defaultValue="banana">
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
          </Select>
        </Example>
        <Example title="Focus" state="focus">
          <Select>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>
        </Example>
        <Example title="Disabled">
          <Select disabled>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>
        </Example>
        <Example title="Invalid">
          <Select>
            <SelectTrigger className="w-44" aria-invalid>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>
        </Example>
        <Example title="Disabled option">
          <Select>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana" disabled>
                Banana
              </SelectItem>
            </SelectContent>
          </Select>
        </Example>
      </Section>

      <Section title="Sizes and groups">
        <Example title="Small">
          <Select defaultValue="apple">
            <SelectTrigger size="sm" className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
            </SelectContent>
          </Select>
        </Example>
        <Example title="Default">
          <Select defaultValue="apple">
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
            </SelectContent>
          </Select>
        </Example>
        <Example title="Groups">
          <Select>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Select food" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Vegetables</SelectLabel>
                <SelectItem value="carrot">Carrot</SelectItem>
                <SelectItem value="potato">Potato</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Example>
      </Section>
    </>
  )
}
