import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Field",
  description:
    "Puts a label, a control, help text and an error together. Use it to build forms.",
  category: "Forms",
}

export default function FieldDocs() {
  return (
    <>
      <Section title="Field" columns={2}>
        <Example title="Vertical" className="items-stretch" canvas>
          <Field>
            <FieldLabel htmlFor="field-name">Name</FieldLabel>
            <Input id="field-name" placeholder="Ada Lovelace" />
            <FieldDescription>Use your full name.</FieldDescription>
          </Field>
        </Example>
        <Example title="Horizontal" className="items-stretch" canvas>
          <Field orientation="horizontal">
            <Checkbox id="field-terms" />
            <FieldLabel htmlFor="field-terms">Accept the terms</FieldLabel>
          </Field>
        </Example>
        <Example title="Horizontal with content" className="items-stretch" canvas>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="field-marketing">Marketing emails</FieldLabel>
              <FieldDescription>Get news about new products.</FieldDescription>
            </FieldContent>
            <Switch id="field-marketing" />
          </Field>
        </Example>
        <Example title="Responsive" className="items-stretch" canvas>
          <FieldGroup>
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="field-username">Username</FieldLabel>
                <FieldDescription>It shows on your profile.</FieldDescription>
              </FieldContent>
              <Input id="field-username" placeholder="ada" />
            </Field>
          </FieldGroup>
        </Example>
      </Section>

      <Section title="States" columns={2}>
        <Example title="Invalid" className="items-stretch">
          <Field data-invalid>
            <FieldLabel htmlFor="field-email">Email</FieldLabel>
            <Input id="field-email" defaultValue="ada@" aria-invalid />
            <FieldError>Type a valid email address.</FieldError>
          </Field>
        </Example>
        <Example title="Disabled" className="items-stretch">
          <Field data-disabled>
            <FieldLabel htmlFor="field-disabled">Name</FieldLabel>
            <Input id="field-disabled" placeholder="Ada Lovelace" disabled />
            <FieldDescription>You cannot change this field.</FieldDescription>
          </Field>
        </Example>
        <Example title="More than one error" className="items-stretch">
          <Field data-invalid>
            <FieldLabel htmlFor="field-password">Password</FieldLabel>
            <Input id="field-password" type="password" aria-invalid />
            <FieldError
              errors={[
                { message: "Use 8 or more characters." },
                { message: "Use one or more numbers." },
              ]}
            />
          </Field>
        </Example>
      </Section>

      <Section title="Field set and group" columns={2}>
        <Example title="Form" className="items-stretch" canvas>
          <FieldSet>
            <FieldLegend>Profile</FieldLegend>
            <FieldDescription>This information is public.</FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="form-name">Name</FieldLabel>
                <Input id="form-name" placeholder="Ada Lovelace" />
              </Field>
              <Field>
                <FieldLabel htmlFor="form-bio">Bio</FieldLabel>
                <Textarea id="form-bio" placeholder="Tell us about you." />
              </Field>
            </FieldGroup>
          </FieldSet>
        </Example>
        <Example title="Choice cards" className="items-stretch" canvas>
          <FieldSet>
            <FieldLegend variant="label">Plan</FieldLegend>
            <RadioGroup defaultValue="pro">
              <FieldLabel htmlFor="plan-free">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Free</FieldTitle>
                    <FieldDescription>For one person.</FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="free" id="plan-free" />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="plan-pro">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Pro</FieldTitle>
                    <FieldDescription>For teams.</FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="pro" id="plan-pro" />
                </Field>
              </FieldLabel>
            </RadioGroup>
          </FieldSet>
        </Example>
        <Example title="Separator" className="items-stretch" canvas>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="sep-email">Email</FieldLabel>
              <Input id="sep-email" placeholder="you@example.com" />
            </Field>
            <FieldSeparator>Or</FieldSeparator>
            <Field>
              <FieldLabel htmlFor="sep-phone">Phone</FieldLabel>
              <Input id="sep-phone" placeholder="+1 555 0100" />
            </Field>
          </FieldGroup>
        </Example>
      </Section>
    </>
  )
}
