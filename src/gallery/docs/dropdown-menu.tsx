import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CreditCardIcon,
  Delete02Icon,
  Logout01Icon,
  Mail01Icon,
  MoreHorizontalIcon,
  Settings01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Dropdown Menu",
  description:
    "Shows a list of actions or options when the user clicks a button.",
  category: "Overlays",
}

function CheckboxMenu() {
  const [statusBar, setStatusBar] = React.useState(true)
  const [activityBar, setActivityBar] = React.useState(false)
  const [panel, setPanel] = React.useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        View
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={statusBar}
            onCheckedChange={setStatusBar}
          >
            Status bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={activityBar}
            onCheckedChange={setActivityBar}
          >
            Activity bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={panel}
            onCheckedChange={setPanel}
            disabled
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function RadioMenu() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Panel position
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Position</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function DropdownMenuDocs() {
  return (
    <>
      <Section title="Variants">
        <Example title="Default">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Open menu
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Example>
        <Example title="Icons and shortcuts">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              My account
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>My account</DropdownMenuLabel>
                <DropdownMenuItem>
                  <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HugeiconsIcon icon={CreditCardIcon} strokeWidth={2} />
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <HugeiconsIcon icon={Logout01Icon} strokeWidth={2} />
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Example>
        <Example title="Destructive and disabled items">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="More actions" />
              }
            >
              <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem disabled>Archive</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Example>
        <Example title="Submenu">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Share
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem>Copy link</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
                    Email
                  </DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </Example>
        <Example title="Inset items">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Open menu
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuGroup>
                <DropdownMenuLabel inset>Actions</DropdownMenuLabel>
                <DropdownMenuItem inset>Rename</DropdownMenuItem>
                <DropdownMenuItem inset>Move</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </Example>
        <Example title="Checkbox items" source="CheckboxMenu">
          <CheckboxMenu />
        </Example>
        <Example title="Radio items" source="RadioMenu">
          <RadioMenu />
        </Example>
      </Section>

      <Section title="Placement">
        <Example title="Bottom, start">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Bottom start
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="start">
              <DropdownMenuItem>Item one</DropdownMenuItem>
              <DropdownMenuItem>Item two</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Example>
        <Example title="Bottom, end">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Bottom end
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="end">
              <DropdownMenuItem>Item one</DropdownMenuItem>
              <DropdownMenuItem>Item two</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Example>
        <Example title="Top">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Top
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top">
              <DropdownMenuItem>Item one</DropdownMenuItem>
              <DropdownMenuItem>Item two</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Example>
        <Example title="Right">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Right
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right">
              <DropdownMenuItem>Item one</DropdownMenuItem>
              <DropdownMenuItem>Item two</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Example>
        <Example title="Left">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Left
            </DropdownMenuTrigger>
            <DropdownMenuContent side="left">
              <DropdownMenuItem>Item one</DropdownMenuItem>
              <DropdownMenuItem>Item two</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Example>
      </Section>

      <Section
        title="Trigger states"
        description="Hover and focus are forced so that you can compare them."
      >
        <Example title="Default">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Open menu
            </DropdownMenuTrigger>
          </DropdownMenu>
        </Example>
        <Example title="Hover" state="hover">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Open menu
            </DropdownMenuTrigger>
          </DropdownMenu>
        </Example>
        <Example title="Focus" state="focus">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Open menu
            </DropdownMenuTrigger>
          </DropdownMenu>
        </Example>
        <Example title="Disabled">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />} disabled>
              Open menu
            </DropdownMenuTrigger>
          </DropdownMenu>
        </Example>
      </Section>
    </>
  )
}
