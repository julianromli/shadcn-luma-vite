import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Combobox",
  description:
    "An input with a list of options. The user types to filter the list, then selects an option.",
  category: "Forms",
}

function ComboboxDemo() {
  const frameworks = ["Next.js", "Remix", "Astro", "Nuxt", "SvelteKit"]

  return (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="Select a framework" />
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

function ComboboxClearDemo() {
  const frameworks = ["Next.js", "Remix", "Astro", "Nuxt", "SvelteKit"]

  return (
    <Combobox items={frameworks} defaultValue="Astro">
      <ComboboxInput placeholder="Select a framework" showClear />
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

function ComboboxMultipleDemo() {
  const frameworks = ["Next.js", "Remix", "Astro", "Nuxt", "SvelteKit"]
  const anchor = useComboboxAnchor()

  return (
    <Combobox items={frameworks} multiple defaultValue={["Astro", "Remix"]}>
      <ComboboxChips ref={anchor} className="w-72">
        <ComboboxValue>
          {(values: string[]) => (
            <>
              {values.map((value) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder="Add a framework" />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

function ComboboxDisabledDemo() {
  const frameworks = ["Next.js", "Remix", "Astro"]

  return (
    <Combobox items={frameworks} disabled>
      <ComboboxInput placeholder="Select a framework" disabled />
      <ComboboxContent>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

function ComboboxInvalidDemo() {
  const frameworks = ["Next.js", "Remix", "Astro"]

  return (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="Select a framework" aria-invalid />
      <ComboboxContent>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export default function ComboboxDocs() {
  return (
    <>
      <Section title="Examples" columns={2}>
        <Example title="Default" source="ComboboxDemo" canvas>
          <ComboboxDemo />
        </Example>
        <Example title="With clear button" source="ComboboxClearDemo" canvas>
          <ComboboxClearDemo />
        </Example>
        <Example
          title="More than one value"
          source="ComboboxMultipleDemo"
          canvas
        >
          <ComboboxMultipleDemo />
        </Example>
      </Section>

      <Section
        title="States"
        description="Focus is forced so that you can compare it. The live examples react to your mouse and keyboard."
      >
        <Example title="Focus" state="focus" source="ComboboxDemo">
          <ComboboxDemo />
        </Example>
        <Example title="Disabled" source="ComboboxDisabledDemo">
          <ComboboxDisabledDemo />
        </Example>
        <Example title="Invalid" source="ComboboxInvalidDemo">
          <ComboboxInvalidDemo />
        </Example>
      </Section>
    </>
  )
}
