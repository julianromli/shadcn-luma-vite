import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Accordion",
  description:
    "Shows a list of headings. Each heading opens or closes a section of content.",
  category: "Layout",
}

export default function AccordionDocs() {
  return (
    <>
      <Section title="Variants" columns={2}>
        <Example title="Single">
          <Accordion className="max-w-md">
            <AccordionItem value="shipping">
              <AccordionTrigger>How long is shipping?</AccordionTrigger>
              <AccordionContent>
                Shipping takes 3 to 5 working days.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger>Can I return an item?</AccordionTrigger>
              <AccordionContent>
                Yes. You can return an item in 30 days.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
              <AccordionTrigger>How do I get help?</AccordionTrigger>
              <AccordionContent>Send an email to our support team.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Example>
        <Example title="Multiple open">
          <Accordion multiple defaultValue={["shipping", "returns"]} className="max-w-md">
            <AccordionItem value="shipping">
              <AccordionTrigger>How long is shipping?</AccordionTrigger>
              <AccordionContent>
                Shipping takes 3 to 5 working days.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger>Can I return an item?</AccordionTrigger>
              <AccordionContent>
                Yes. You can return an item in 30 days.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Example>
      </Section>

      <Section
        title="States"
        description="Hover is forced so that you can compare it."
        columns={2}
      >
        <Example title="Closed">
          <Accordion className="max-w-md">
            <AccordionItem value="item">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It uses the WAI-ARIA pattern.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Example>
        <Example title="Open">
          <Accordion defaultValue={["item"]} className="max-w-md">
            <AccordionItem value="item">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It uses the WAI-ARIA pattern.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Example>
        <Example title="Hover" state="hover">
          <Accordion className="max-w-md">
            <AccordionItem value="item">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It uses the WAI-ARIA pattern.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Example>
        <Example title="Disabled">
          <Accordion className="max-w-md">
            <AccordionItem value="item" disabled>
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It uses the WAI-ARIA pattern.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Example>
      </Section>
    </>
  )
}
