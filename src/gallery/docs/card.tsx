import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Card",
  description: "Puts related content and actions in one container.",
  category: "Layout",
}

export default function CardDocs() {
  return (
    <>
      <Section title="Sizes" columns={2}>
        <Example title="Default">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Project settings</CardTitle>
              <CardDescription>Change the name of your project.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>The name shows on the dashboard and in emails.</p>
            </CardContent>
            <CardFooter>
              <Button>Save</Button>
            </CardFooter>
          </Card>
        </Example>
        <Example title="Small">
          <Card size="sm" className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Project settings</CardTitle>
              <CardDescription>Change the name of your project.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>The name shows on the dashboard and in emails.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Save</Button>
            </CardFooter>
          </Card>
        </Example>
      </Section>

      <Section title="Composition" columns={2}>
        <Example title="With action">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>You have 3 unread messages.</CardDescription>
              <CardAction>
                <Button variant="link" size="sm">
                  Mark all as read
                </Button>
              </CardAction>
            </CardHeader>
          </Card>
        </Example>
        <Example title="Form">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>Enter your email to continue.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Label htmlFor="card-email">Email</Label>
              <Input id="card-email" type="email" placeholder="you@example.com" />
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Continue</Button>
            </CardFooter>
          </Card>
        </Example>
        <Example title="With borders">
          <Card className="w-full max-w-sm">
            <CardHeader className="border-b">
              <CardTitle>Invoice</CardTitle>
              <CardDescription>March 2026</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Total: $240.00</p>
            </CardContent>
            <CardFooter className="border-t">
              <Button variant="outline" size="sm">
                Download
              </Button>
            </CardFooter>
          </Card>
        </Example>
        <Example title="With image">
          <Card className="w-full max-w-sm">
            <div className="aspect-video bg-linear-to-br from-primary/30 to-primary/5" />
            <CardHeader>
              <CardTitle>Mountain trip</CardTitle>
              <CardDescription>Three days in the Alps.</CardDescription>
            </CardHeader>
          </Card>
        </Example>
      </Section>
    </>
  )
}
