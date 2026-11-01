import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  BookOpen01Icon,
  Notification03Icon,
} from "@hugeicons/core-free-icons"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Item",
  description:
    "Shows one row of content with media, text and actions. Use it in lists.",
  category: "Data display",
}

export default function ItemDocs() {
  return (
    <>
      <Section title="Variants">
        <Example title="Default">
          <Item>
            <ItemContent>
              <ItemTitle>Basic item</ItemTitle>
              <ItemDescription>A simple row with a title.</ItemDescription>
            </ItemContent>
          </Item>
        </Example>
        <Example title="Outline">
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Outline item</ItemTitle>
              <ItemDescription>A row with a border.</ItemDescription>
            </ItemContent>
          </Item>
        </Example>
        <Example title="Muted">
          <Item variant="muted">
            <ItemContent>
              <ItemTitle>Muted item</ItemTitle>
              <ItemDescription>A row with a muted background.</ItemDescription>
            </ItemContent>
          </Item>
        </Example>
      </Section>

      <Section title="Sizes">
        <Example title="Default">
          <Item variant="outline">
            <ItemMedia variant="icon">
              <HugeiconsIcon icon={Notification03Icon} strokeWidth={2} />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Notifications</ItemTitle>
            </ItemContent>
          </Item>
        </Example>
        <Example title="Small">
          <Item variant="outline" size="sm">
            <ItemMedia variant="icon">
              <HugeiconsIcon icon={Notification03Icon} strokeWidth={2} />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Notifications</ItemTitle>
            </ItemContent>
          </Item>
        </Example>
        <Example title="Extra small">
          <Item variant="outline" size="xs">
            <ItemMedia variant="icon">
              <HugeiconsIcon icon={Notification03Icon} strokeWidth={2} />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Notifications</ItemTitle>
            </ItemContent>
          </Item>
        </Example>
      </Section>

      <Section
        title="States: link"
        description="An item that is a link has hover and focus styles. Hover and focus are forced so that you can compare them."
      >
        <Example title="Default">
          <Item variant="outline" render={<a href="#/item" />}>
            <ItemContent>
              <ItemTitle>Read the guide</ItemTitle>
            </ItemContent>
            <ItemActions>
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
            </ItemActions>
          </Item>
        </Example>
        <Example title="Hover" state="hover">
          <Item variant="outline" render={<a href="#/item" />}>
            <ItemContent>
              <ItemTitle>Read the guide</ItemTitle>
            </ItemContent>
            <ItemActions>
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
            </ItemActions>
          </Item>
        </Example>
        <Example title="Focus" state="focus">
          <Item variant="outline" render={<a href="#/item" />}>
            <ItemContent>
              <ItemTitle>Read the guide</ItemTitle>
            </ItemContent>
            <ItemActions>
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
            </ItemActions>
          </Item>
        </Example>
      </Section>

      <Section title="Media">
        <Example title="Icon">
          <Item variant="outline">
            <ItemMedia variant="icon">
              <HugeiconsIcon icon={BookOpen01Icon} strokeWidth={2} />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Documentation</ItemTitle>
              <ItemDescription>Learn how to use the components.</ItemDescription>
            </ItemContent>
          </Item>
        </Example>
        <Example title="Image">
          <Item variant="outline">
            <ItemMedia variant="image">
              <div className="size-full bg-linear-to-br from-primary/40 to-primary/10" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Summer playlist</ItemTitle>
              <ItemDescription>24 songs</ItemDescription>
            </ItemContent>
          </Item>
        </Example>
        <Example title="Avatar">
          <Item variant="outline">
            <ItemMedia>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>shadcn</ItemTitle>
              <ItemDescription>Invited you to a project.</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="outline">
                Accept
              </Button>
            </ItemActions>
          </Item>
        </Example>
      </Section>

      <Section title="Composition" columns={2}>
        <Example title="Header and footer">
          <Item variant="outline">
            <ItemHeader>
              <span className="text-xs text-muted-foreground">Today</span>
            </ItemHeader>
            <ItemContent>
              <ItemTitle>Weekly report</ItemTitle>
              <ItemDescription>The report for week 12 is ready.</ItemDescription>
            </ItemContent>
            <ItemFooter>
              <span className="text-xs text-muted-foreground">PDF, 2 MB</span>
              <Button size="xs" variant="ghost">
                Download
              </Button>
            </ItemFooter>
          </Item>
        </Example>
        <Example title="Group">
          <ItemGroup>
            <Item size="sm">
              <ItemContent>
                <ItemTitle>Profile</ItemTitle>
              </ItemContent>
            </Item>
            <ItemSeparator />
            <Item size="sm">
              <ItemContent>
                <ItemTitle>Billing</ItemTitle>
              </ItemContent>
            </Item>
            <ItemSeparator />
            <Item size="sm">
              <ItemContent>
                <ItemTitle>Team</ItemTitle>
              </ItemContent>
            </Item>
          </ItemGroup>
        </Example>
      </Section>
    </>
  )
}
