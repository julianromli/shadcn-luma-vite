import * as React from "react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Menubar",
  description:
    "Shows a row of menus, as in a desktop app. Each menu opens a list of commands.",
  category: "Navigation",
}

function AppMenubar() {
  const [wordWrap, setWordWrap] = React.useState(true)
  const [minimap, setMinimap] = React.useState(false)
  const [profile, setProfile] = React.useState("alex")

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent className="w-56">
          <MenubarItem>
            New tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New private window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem variant="destructive">Close all windows</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent className="w-56">
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent className="w-56">
          <MenubarCheckboxItem
            checked={wordWrap}
            onCheckedChange={setWordWrap}
          >
            Word wrap
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={minimap} onCheckedChange={setMinimap}>
            Minimap
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>Full screen</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent className="w-56">
          <MenubarGroup>
            <MenubarLabel inset>Profiles</MenubarLabel>
            <MenubarRadioGroup value={profile} onValueChange={setProfile}>
              <MenubarRadioItem value="alex">Alex Lee</MenubarRadioItem>
              <MenubarRadioItem value="sam">Sam Park</MenubarRadioItem>
              <MenubarRadioItem value="kim">Kim Diaz</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default function MenubarDocs() {
  return (
    <>
      <Section title="Variants" columns={2}>
        <Example title="Default">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New file</MenubarItem>
                <MenubarItem>Open</MenubarItem>
                <MenubarItem>Save</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Help</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Documentation</MenubarItem>
                <MenubarItem>About</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </Example>
        <Example title="Full example" source="AppMenubar">
          <AppMenubar />
        </Example>
      </Section>

      <Section
        title="Trigger states"
        description="Hover and focus are forced so that you can compare them."
      >
        <Example title="Default">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </Example>
        <Example title="Hover" state="hover">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </Example>
        <Example title="Disabled">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger disabled>File</MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </Example>
      </Section>
    </>
  )
}
