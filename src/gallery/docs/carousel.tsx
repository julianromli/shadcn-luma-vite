import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Carousel",
  description:
    "Shows slides one after another. The user moves between them with buttons, swipes or arrow keys.",
  category: "Data display",
}

export default function CarouselDocs() {
  return (
    <>
      <Section title="Orientation" columns={2}>
        <Example title="Horizontal" canvas className="px-16">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center text-4xl font-semibold">
                    1
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center text-4xl font-semibold">
                    2
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center text-4xl font-semibold">
                    3
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Example>
        <Example title="Vertical" canvas className="py-20">
          <Carousel orientation="vertical" className="w-full max-w-xs">
            <CarouselContent className="h-48">
              <CarouselItem>
                <div className="flex h-full items-center justify-center rounded-2xl bg-muted text-3xl font-semibold">
                  1
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex h-full items-center justify-center rounded-2xl bg-muted text-3xl font-semibold">
                  2
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex h-full items-center justify-center rounded-2xl bg-muted text-3xl font-semibold">
                  3
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Example>
      </Section>

      <Section title="Options" columns={2}>
        <Example title="Several slides in view" canvas className="px-16">
          <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
            <CarouselContent>
              <CarouselItem className="basis-1/3">
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-muted text-2xl font-semibold">
                  1
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-muted text-2xl font-semibold">
                  2
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-muted text-2xl font-semibold">
                  3
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-muted text-2xl font-semibold">
                  4
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-muted text-2xl font-semibold">
                  5
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Example>
        <Example title="Loop" className="px-16">
          <Carousel opts={{ loop: true }} className="w-full max-w-xs">
            <CarouselContent>
              <CarouselItem>
                <div className="flex aspect-video items-center justify-center rounded-2xl bg-muted text-3xl font-semibold">
                  1
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex aspect-video items-center justify-center rounded-2xl bg-muted text-3xl font-semibold">
                  2
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex aspect-video items-center justify-center rounded-2xl bg-muted text-3xl font-semibold">
                  3
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Example>
      </Section>
    </>
  )
}
