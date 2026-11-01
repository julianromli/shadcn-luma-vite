import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Copy01Icon,
  Delete02Icon,
  Edit02Icon,
  Share08Icon,
} from "@hugeicons/core-free-icons"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Context Menu",
  description:
    "Shows a menu when the user right-clicks an area, or touches and holds it.",
  category: "Overlays",
}

function OptionsContextMenu() {
  const [showBookmarks, setShowBookmarks] = React.useState(true)
  const [showFullUrls, setShowFullUrls] = React.useState(false)
  const [person, setPerson] = React.useState("alex")

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-36 w-full items-center justify-center rounded-2xl border border-dashed text-sm text-muted-foreground">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuCheckboxItem
          checked={showBookmarks}
          onCheckedChange={setShowBookmarks}
        >
          Show bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={showFullUrls}
          onCheckedChange={setShowFullUrls}
        >
          Show full URLs
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
            <ContextMenuRadioItem value="alex">Alex Lee</ContextMenuRadioItem>
            <ContextMenuRadioItem value="sam">Sam Park</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default function ContextMenuDocs() {
  return (
    <Section title="Variants" columns={2}>
      <Example title="Default" canvas>
        <ContextMenu>
          <ContextMenuTrigger className="flex h-36 w-full items-center justify-center rounded-2xl border border-dashed text-sm text-muted-foreground">
            Right-click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem disabled>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Example>
      <Example title="Icons, shortcuts and submenu" canvas>
        <ContextMenu>
          <ContextMenuTrigger className="flex h-36 w-full items-center justify-center rounded-2xl border border-dashed text-sm text-muted-foreground">
            Right-click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-56">
            <ContextMenuItem>
              <HugeiconsIcon icon={Edit02Icon} strokeWidth={2} />
              Edit
              <ContextMenuShortcut>⌘E</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <HugeiconsIcon icon={Copy01Icon} strokeWidth={2} />
              Copy
              <ContextMenuShortcut>⌘C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <HugeiconsIcon icon={Share08Icon} strokeWidth={2} />
                Share
              </ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-44">
                <ContextMenuItem>Email</ContextMenuItem>
                <ContextMenuItem>Message</ContextMenuItem>
                <ContextMenuItem>Copy link</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">
              <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} />
              Delete
              <ContextMenuShortcut>⌫</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Example>
      <Example title="Checkbox and radio items" source="OptionsContextMenu" canvas>
        <OptionsContextMenu />
      </Example>
    </Section>
  )
}
