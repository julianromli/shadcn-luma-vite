import { HugeiconsIcon } from "@hugeicons/react"
import { Settings01Icon, UserIcon } from "@hugeicons/core-free-icons"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Tabs",
  description:
    "Shows one panel of content at a time. The user selects a tab to change the panel.",
  category: "Navigation",
}

const VARIANTS = ["default", "line"] as const

export default function TabsDocs() {
  return (
    <>
      <Section title="Variants" columns={2}>
        <Example title="Default">
          <Tabs defaultValue="account" className="w-full max-w-sm">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Change your account details.</TabsContent>
            <TabsContent value="password">Change your password.</TabsContent>
          </Tabs>
        </Example>
        <Example title="Line">
          <Tabs defaultValue="account" className="w-full max-w-sm">
            <TabsList variant="line">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Change your account details.</TabsContent>
            <TabsContent value="password">Change your password.</TabsContent>
          </Tabs>
        </Example>
      </Section>

      <Section title="Orientation" columns={2}>
        <Example title="Vertical">
          <Tabs defaultValue="account" orientation="vertical" className="w-full max-w-sm">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Change your account details.</TabsContent>
            <TabsContent value="password">Change your password.</TabsContent>
            <TabsContent value="billing">Change your plan.</TabsContent>
          </Tabs>
        </Example>
        <Example title="Vertical line">
          <Tabs defaultValue="account" orientation="vertical" className="w-full max-w-sm">
            <TabsList variant="line">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Change your account details.</TabsContent>
            <TabsContent value="password">Change your password.</TabsContent>
            <TabsContent value="billing">Change your plan.</TabsContent>
          </Tabs>
        </Example>
      </Section>

      {VARIANTS.map((variant) => (
        <Section
          key={variant}
          title={`Trigger states: ${variant}`}
          description="The second tab shows the state. Hover and focus are forced so that you can compare them."
        >
          <Example title="Selected" vars={{ variant }}>
            <Tabs defaultValue="b">
              <TabsList variant={variant}>
                <TabsTrigger value="a">Overview</TabsTrigger>
                <TabsTrigger value="b">Activity</TabsTrigger>
              </TabsList>
            </Tabs>
          </Example>
          <Example title="Hover" state="hover" vars={{ variant }}>
            <Tabs defaultValue="b">
              <TabsList variant={variant}>
                <TabsTrigger value="a">Overview</TabsTrigger>
              </TabsList>
            </Tabs>
          </Example>
          <Example title="Focus" state="focus" vars={{ variant }}>
            <Tabs defaultValue="a">
              <TabsList variant={variant}>
                <TabsTrigger value="a">Overview</TabsTrigger>
              </TabsList>
            </Tabs>
          </Example>
          <Example title="Disabled" vars={{ variant }}>
            <Tabs defaultValue="a">
              <TabsList variant={variant}>
                <TabsTrigger value="a">Overview</TabsTrigger>
                <TabsTrigger value="b" disabled>
                  Activity
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </Example>
        </Section>
      ))}

      <Section title="With icons" columns={2}>
        <Example title="Icons">
          <Tabs defaultValue="profile">
            <TabsList>
              <TabsTrigger value="profile">
                <HugeiconsIcon icon={UserIcon} strokeWidth={2} data-icon="inline-start" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="settings">
                <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} data-icon="inline-start" />
                Settings
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </Example>
      </Section>
    </>
  )
}
