import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Native Select",
  description:
    "A select that uses the browser control. Use it on mobile or in simple forms.",
  category: "Forms",
}

export default function NativeSelectDocs() {
  return (
    <>
      <Section
        title="States"
        description="Focus is forced so that you can compare it. The default example reacts to your mouse and keyboard."
      >
        <Example title="Default">
          <NativeSelect aria-label="Status">
            <NativeSelectOption value="">Select a status</NativeSelectOption>
            <NativeSelectOption value="todo">To do</NativeSelectOption>
            <NativeSelectOption value="done">Done</NativeSelectOption>
          </NativeSelect>
        </Example>
        <Example title="Focus" state="focus">
          <NativeSelect aria-label="Status">
            <NativeSelectOption value="">Select a status</NativeSelectOption>
            <NativeSelectOption value="todo">To do</NativeSelectOption>
          </NativeSelect>
        </Example>
        <Example title="Disabled">
          <NativeSelect disabled aria-label="Status">
            <NativeSelectOption value="">Select a status</NativeSelectOption>
          </NativeSelect>
        </Example>
        <Example title="Invalid">
          <NativeSelect aria-invalid aria-label="Status">
            <NativeSelectOption value="">Select a status</NativeSelectOption>
          </NativeSelect>
        </Example>
      </Section>

      <Section title="Sizes and groups">
        <Example title="Small">
          <NativeSelect size="sm" aria-label="Status">
            <NativeSelectOption value="todo">To do</NativeSelectOption>
            <NativeSelectOption value="done">Done</NativeSelectOption>
          </NativeSelect>
        </Example>
        <Example title="Default">
          <NativeSelect aria-label="Status">
            <NativeSelectOption value="todo">To do</NativeSelectOption>
            <NativeSelectOption value="done">Done</NativeSelectOption>
          </NativeSelect>
        </Example>
        <Example title="Option groups">
          <NativeSelect aria-label="Food">
            <NativeSelectOptGroup label="Fruits">
              <NativeSelectOption value="apple">Apple</NativeSelectOption>
              <NativeSelectOption value="banana">Banana</NativeSelectOption>
            </NativeSelectOptGroup>
            <NativeSelectOptGroup label="Vegetables">
              <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
            </NativeSelectOptGroup>
          </NativeSelect>
        </Example>
      </Section>
    </>
  )
}
