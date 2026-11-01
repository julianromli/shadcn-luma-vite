import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Calculator01Icon,
  Calendar03Icon,
  CreditCardIcon,
  Settings01Icon,
  SmileIcon,
  UserIcon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Kbd } from "@/components/ui/kbd"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Command",
  description:
    "Shows a list of commands that the user can search with the keyboard. Use it inline or in a dialog.",
  category: "Navigation",
}

function CommandMenuDialog() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((value) => !value)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Search <Kbd>⌘K</Kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem onSelect={() => setOpen(false)}>
                <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
                Calendar
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <HugeiconsIcon icon={SmileIcon} strokeWidth={2} />
                Search emoji
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem onSelect={() => setOpen(false)}>
                <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
                Profile
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
                Settings
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}

function SelectableCommand() {
  const [value, setValue] = React.useState("next")

  return (
    <Command className="max-w-sm rounded-3xl border">
      <CommandInput placeholder="Search framework" />
      <CommandList>
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandGroup heading="Frameworks">
          {["next", "remix", "astro", "vite"].map((item) => (
            <CommandItem
              key={item}
              value={item}
              data-checked={item === value}
              onSelect={setValue}
            >
              {item}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export default function CommandDocs() {
  return (
    <>
      <Section title="Variants" columns={2}>
        <Example title="Inline" canvas>
          <Command className="max-w-sm rounded-3xl border">
            <CommandInput placeholder="Type a command or search" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
                  Calendar
                </CommandItem>
                <CommandItem>
                  <HugeiconsIcon icon={SmileIcon} strokeWidth={2} />
                  Search emoji
                </CommandItem>
                <CommandItem disabled>
                  <HugeiconsIcon icon={Calculator01Icon} strokeWidth={2} />
                  Calculator
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
                  Profile
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <HugeiconsIcon icon={CreditCardIcon} strokeWidth={2} />
                  Billing
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
                  Settings
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </Example>
        <Example title="Selected item" source="SelectableCommand" canvas>
          <SelectableCommand />
        </Example>
        <Example title="Empty result" canvas>
          <Command className="max-w-sm rounded-3xl border">
            <CommandInput placeholder="Search" defaultValue="xyz" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Pages">
                <CommandItem>Home</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </Example>
        <Example title="Dialog" source="CommandMenuDialog" canvas>
          <CommandMenuDialog />
        </Example>
      </Section>
    </>
  )
}
