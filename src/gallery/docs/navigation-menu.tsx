import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Navigation Menu",
  description:
    "Shows the main links of a website. Some links open a panel with more links.",
  category: "Navigation",
}

export default function NavigationMenuDocs() {
  return (
    <>
      <Section title="Variants" columns={1}>
        <Example title="With panels" className="min-h-64 items-start" canvas>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-96 gap-1 p-2">
                    <li>
                      <NavigationMenuLink href="#/navigation-menu">
                        <div className="font-medium">Introduction</div>
                        <p className="text-muted-foreground">
                          Learn how the system works.
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#/navigation-menu">
                        <div className="font-medium">Installation</div>
                        <p className="text-muted-foreground">
                          Add the components to your app.
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#/navigation-menu">
                        <div className="font-medium">Typography</div>
                        <p className="text-muted-foreground">
                          Styles for headings and text.
                        </p>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[32rem] grid-cols-2 gap-1 p-2">
                    <li>
                      <NavigationMenuLink href="#/alert-dialog">
                        <div className="font-medium">Alert Dialog</div>
                        <p className="text-muted-foreground">
                          Asks the user to confirm an action.
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#/hover-card">
                        <div className="font-medium">Hover Card</div>
                        <p className="text-muted-foreground">
                          Shows a preview of a link.
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#/progress">
                        <div className="font-medium">Progress</div>
                        <p className="text-muted-foreground">
                          Shows how much of a task is complete.
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#/tabs">
                        <div className="font-medium">Tabs</div>
                        <p className="text-muted-foreground">
                          Shows one panel of content at a time.
                        </p>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#/navigation-menu"
                  className={navigationMenuTriggerStyle()}
                >
                  Docs
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Example>
        <Example title="Links only" canvas>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#/navigation-menu"
                  className={navigationMenuTriggerStyle()}
                  active
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#/navigation-menu"
                  className={navigationMenuTriggerStyle()}
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#/navigation-menu"
                  className={navigationMenuTriggerStyle()}
                >
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Example>
      </Section>

      <Section
        title="Trigger states"
        description="Hover and focus are forced so that you can compare them."
      >
        <Example title="Default">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#/navigation-menu"
                  className={navigationMenuTriggerStyle()}
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Example>
        <Example title="Hover" state="hover">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#/navigation-menu"
                  className={navigationMenuTriggerStyle()}
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Example>
        <Example title="Focus" state="focus">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#/navigation-menu"
                  className={navigationMenuTriggerStyle()}
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Example>
        <Example title="Active">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#/navigation-menu"
                  className={navigationMenuTriggerStyle()}
                  active
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Example>
      </Section>
    </>
  )
}
