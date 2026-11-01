import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Table",
  description: "Shows data in rows and columns.",
  category: "Data display",
}

export default function TableDocs() {
  return (
    <>
      <Section title="Default" columns={1}>
        <Example title="Default" canvas>
          <Table>
            <TableCaption>Your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>
                  <Badge variant="secondary">Paid</Badge>
                </TableCell>
                <TableCell>Credit card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV002</TableCell>
                <TableCell>
                  <Badge variant="outline">Pending</Badge>
                </TableCell>
                <TableCell>Bank transfer</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV003</TableCell>
                <TableCell>
                  <Badge variant="destructive">Failed</Badge>
                </TableCell>
                <TableCell>PayPal</TableCell>
                <TableCell className="text-right">$350.00</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$750.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </Example>
      </Section>

      <Section
        title="Row states"
        description="Hover is forced so that you can compare it."
        columns={1}
      >
        <Example title="Hover" state="hover">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Credit card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Example>
        <Example title="Selected" canvas>
          <Table>
            <TableBody>
              <TableRow data-state="selected">
                <TableCell>
                  <Checkbox defaultChecked aria-label="Select row" />
                </TableCell>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Credit card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox aria-label="Select row" />
                </TableCell>
                <TableCell className="font-medium">INV002</TableCell>
                <TableCell>Bank transfer</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Example>
      </Section>
    </>
  )
}
