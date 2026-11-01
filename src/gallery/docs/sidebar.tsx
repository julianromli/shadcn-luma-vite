import { HugeiconsIcon } from "@hugeicons/react"
import {
  Calendar03Icon,
  Folder01Icon,
  Home01Icon,
  InboxIcon,
  MoreHorizontalIcon,
  PlusSignIcon,
  Settings01Icon,
} from "@hugeicons/core-free-icons"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Sidebar",
  description:
    "Shows the main navigation at the side of the page. It can collapse to icons or move off the screen.",
  category: "Navigation",
}

const VARIANTS = ["sidebar", "floating", "inset"] as const
const COLLAPSIBLE = ["offcanvas", "icon", "none"] as const

export default function SidebarDocs() {
  return (
    <>
      <Section
        title="Variants"
        description="These examples are in a box. In an app, remove the box classes. Then the sidebar fills the height of the screen."
        columns={1}
      >
        {VARIANTS.map((variant) => (
          <Example
            key={variant}
            title={variant}
            vars={{ variant }}
            canvas
            className="block p-0"
          >
            <SidebarProvider className="relative h-96 min-h-0 overflow-hidden">
              <Sidebar variant={variant} className="absolute h-full">
                <SidebarHeader className="px-4 py-3 font-semibold">
                  Acme
                </SidebarHeader>
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Main</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton isActive>
                            <HugeiconsIcon icon={Home01Icon} strokeWidth={2} />
                            <span>Home</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <HugeiconsIcon icon={InboxIcon} strokeWidth={2} />
                            <span>Inbox</span>
                          </SidebarMenuButton>
                          <SidebarMenuBadge>12</SidebarMenuBadge>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
                            <span>Calendar</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
                        <span>Settings</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarFooter>
              </Sidebar>
              <SidebarInset>
                <header className="flex h-12 items-center gap-2 border-b px-3">
                  <SidebarTrigger />
                  <span className="text-sm font-medium">Home</span>
                </header>
                <div className="p-4 text-sm text-muted-foreground">
                  Page content
                </div>
              </SidebarInset>
            </SidebarProvider>
          </Example>
        ))}
      </Section>

      <Section
        title="Collapsible"
        description="Click the trigger to collapse the sidebar. With icon, only the icons stay. With offcanvas, the sidebar moves off the screen. With none, it does not collapse."
        columns={1}
      >
        {COLLAPSIBLE.map((collapsible) => (
          <Example
            key={collapsible}
            title={collapsible}
            vars={{ collapsible }}
            className="block p-0"
          >
            <SidebarProvider className="relative h-72 min-h-0 overflow-hidden">
              <Sidebar collapsible={collapsible} className="absolute h-full">
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton isActive tooltip="Home">
                            <HugeiconsIcon icon={Home01Icon} strokeWidth={2} />
                            <span>Home</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton tooltip="Inbox">
                            <HugeiconsIcon icon={InboxIcon} strokeWidth={2} />
                            <span>Inbox</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton tooltip="Settings">
                            <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
                            <span>Settings</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>
              <SidebarInset>
                <header className="flex h-12 items-center gap-2 border-b px-3">
                  <SidebarTrigger />
                </header>
              </SidebarInset>
            </SidebarProvider>
          </Example>
        ))}
      </Section>

      <Section
        title="Menu button states"
        description="Hover, focus and active are forced so that you can compare them."
      >
        <Example title="Default" canvas>
          <SidebarProvider className="min-h-0 w-56">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={InboxIcon} strokeWidth={2} />
                  <span>Inbox</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarProvider>
        </Example>
        <Example title="Hover" state="hover">
          <SidebarProvider className="min-h-0 w-56">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={InboxIcon} strokeWidth={2} />
                  <span>Inbox</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarProvider>
        </Example>
        <Example title="Focus" state="focus">
          <SidebarProvider className="min-h-0 w-56">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={InboxIcon} strokeWidth={2} />
                  <span>Inbox</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarProvider>
        </Example>
        <Example title="Active (pressed)" state="active">
          <SidebarProvider className="min-h-0 w-56">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={InboxIcon} strokeWidth={2} />
                  <span>Inbox</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarProvider>
        </Example>
        <Example title="Current page" canvas>
          <SidebarProvider className="min-h-0 w-56">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <HugeiconsIcon icon={InboxIcon} strokeWidth={2} />
                  <span>Inbox</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarProvider>
        </Example>
        <Example title="Disabled">
          <SidebarProvider className="min-h-0 w-56">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton disabled>
                  <HugeiconsIcon icon={InboxIcon} strokeWidth={2} />
                  <span>Inbox</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarProvider>
        </Example>
      </Section>

      <Section title="Menu button variants and sizes">
        <Example title="Outline" canvas>
          <SidebarProvider className="min-h-0 w-56">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton variant="outline">
                  <HugeiconsIcon icon={Folder01Icon} strokeWidth={2} />
                  <span>Projects</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarProvider>
        </Example>
        <Example title="Small" canvas>
          <SidebarProvider className="min-h-0 w-56">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="sm">
                  <HugeiconsIcon icon={Folder01Icon} strokeWidth={2} />
                  <span>Projects</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarProvider>
        </Example>
        <Example title="Large" canvas>
          <SidebarProvider className="min-h-0 w-56">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    A
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="font-medium">Acme</span>
                    <span className="text-xs text-muted-foreground">
                      Pro plan
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarProvider>
        </Example>
      </Section>

      <Section title="Menu parts">
        <Example title="Group with action" canvas>
          <SidebarProvider className="min-h-0 w-56">
            <SidebarGroup>
              <SidebarGroupLabel>Projects</SidebarGroupLabel>
              <SidebarGroupAction aria-label="Add project">
                <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} />
              </SidebarGroupAction>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <span>Website</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarProvider>
        </Example>
        <Example title="Badge and action" canvas>
          <SidebarProvider className="min-h-0 w-56">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={InboxIcon} strokeWidth={2} />
                  <span>Inbox</span>
                </SidebarMenuButton>
                <SidebarMenuBadge>24</SidebarMenuBadge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={Folder01Icon} strokeWidth={2} />
                  <span>Website</span>
                </SidebarMenuButton>
                <SidebarMenuAction aria-label="More">
                  <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
                </SidebarMenuAction>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarProvider>
        </Example>
        <Example title="Sub menu" canvas>
          <SidebarProvider className="min-h-0 w-56">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={Folder01Icon} strokeWidth={2} />
                  <span>Docs</span>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton href="#/sidebar" isActive>
                      Introduction
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton href="#/sidebar">
                      Install
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton href="#/sidebar" size="sm">
                      Small item
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarProvider>
        </Example>
        <Example title="Loading" canvas>
          <SidebarProvider className="min-h-0 w-56">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuSkeleton />
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuSkeleton showIcon />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarProvider>
        </Example>
      </Section>
    </>
  )
}
