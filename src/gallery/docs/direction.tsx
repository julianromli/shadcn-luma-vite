import { DirectionProvider } from "@/components/ui/direction"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Direction",
  description:
    "Sets the reading direction for the components in it. Use right-to-left (RTL) for languages such as Arabic and Hebrew. Also set the dir attribute on the HTML element.",
  category: "Layout",
}

export default function DirectionDocs() {
  return (
    <>
      <Section
        title="Tabs"
        description="In RTL, the first tab is on the right. The arrow keys move in the reading direction."
        columns={2}
      >
        <Example title="Left to right">
          <DirectionProvider direction="ltr">
            <div dir="ltr">
              <Tabs defaultValue="account">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="text-sm">
                  Change your account settings.
                </TabsContent>
                <TabsContent value="password" className="text-sm">
                  Change your password.
                </TabsContent>
              </Tabs>
            </div>
          </DirectionProvider>
        </Example>
        <Example title="Right to left">
          <DirectionProvider direction="rtl">
            <div dir="rtl">
              <Tabs defaultValue="account">
                <TabsList>
                  <TabsTrigger value="account">الحساب</TabsTrigger>
                  <TabsTrigger value="password">كلمة المرور</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="text-sm">
                  غيّر إعدادات حسابك.
                </TabsContent>
                <TabsContent value="password" className="text-sm">
                  غيّر كلمة المرور.
                </TabsContent>
              </Tabs>
            </div>
          </DirectionProvider>
        </Example>
      </Section>

      <Section
        title="Slider"
        description="In RTL, the slider starts on the right."
        columns={2}
      >
        <Example title="Left to right">
          <DirectionProvider direction="ltr">
            <div dir="ltr" className="w-full max-w-xs">
              <Slider defaultValue={[30]} max={100} aria-label="Volume" />
            </div>
          </DirectionProvider>
        </Example>
        <Example title="Right to left">
          <DirectionProvider direction="rtl">
            <div dir="rtl" className="w-full max-w-xs">
              <Slider defaultValue={[30]} max={100} aria-label="الصوت" />
            </div>
          </DirectionProvider>
        </Example>
      </Section>

      <Section title="Radio group" columns={2}>
        <Example title="Left to right">
          <DirectionProvider direction="ltr">
            <RadioGroup dir="ltr" defaultValue="email">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="email" id="ltr-email" />
                <Label htmlFor="ltr-email">Email</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="sms" id="ltr-sms" />
                <Label htmlFor="ltr-sms">SMS</Label>
              </div>
            </RadioGroup>
          </DirectionProvider>
        </Example>
        <Example title="Right to left">
          <DirectionProvider direction="rtl">
            <RadioGroup dir="rtl" defaultValue="email">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="email" id="rtl-email" />
                <Label htmlFor="rtl-email">البريد الإلكتروني</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="sms" id="rtl-sms" />
                <Label htmlFor="rtl-sms">رسالة نصية</Label>
              </div>
            </RadioGroup>
          </DirectionProvider>
        </Example>
      </Section>
    </>
  )
}
