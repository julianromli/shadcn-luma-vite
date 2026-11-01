import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Pagination",
  description:
    "Divides long content into pages. The user moves between the pages with links.",
  category: "Navigation",
}

function ControlledPagination() {
  const [page, setPage] = React.useState(1)
  const pageCount = 5

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            aria-disabled={page === 1}
            className={page === 1 ? "pointer-events-none opacity-50" : ""}
            onClick={(event) => {
              event.preventDefault()
              setPage((value) => Math.max(1, value - 1))
            }}
          />
        </PaginationItem>
        {Array.from({ length: pageCount }, (_, index) => index + 1).map(
          (number) => (
            <PaginationItem key={number}>
              <PaginationLink
                href="#"
                isActive={number === page}
                onClick={(event) => {
                  event.preventDefault()
                  setPage(number)
                }}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            aria-disabled={page === pageCount}
            className={
              page === pageCount ? "pointer-events-none opacity-50" : ""
            }
            onClick={(event) => {
              event.preventDefault()
              setPage((value) => Math.min(pageCount, value + 1))
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default function PaginationDocs() {
  return (
    <>
      <Section title="Variants" columns={1}>
        <Example title="Default" canvas>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#/pagination" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#/pagination">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#/pagination" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#/pagination">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#/pagination" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Example>
        <Example title="Simple" canvas>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#/pagination" />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#/pagination" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Example>
        <Example title="Custom labels" canvas>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#/pagination" text="Back" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#/pagination" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#/pagination">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#/pagination" text="More" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Example>
        <Example title="Controlled" source="ControlledPagination">
          <ControlledPagination />
        </Example>
      </Section>

      <Section
        title="Link states"
        description="Hover and focus are forced so that you can compare them."
      >
        <Example title="Default">
          <PaginationLink href="#/pagination">4</PaginationLink>
        </Example>
        <Example title="Hover" state="hover">
          <PaginationLink href="#/pagination">4</PaginationLink>
        </Example>
        <Example title="Focus" state="focus">
          <PaginationLink href="#/pagination">4</PaginationLink>
        </Example>
        <Example title="Active page">
          <PaginationLink href="#/pagination" isActive>
            4
          </PaginationLink>
        </Example>
      </Section>
    </>
  )
}
