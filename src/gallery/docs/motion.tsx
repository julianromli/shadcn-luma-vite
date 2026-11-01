import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Motion",
  description:
    "Motion tokens for duration, easing, scale, distance and blur. Choose a token by what the motion does, not by the nearest number. Hover or focus an example to play it.",
  category: "Foundations",
}

const RECIPES = [
  ["Tabs", "tabs", "The active tab background slides from tab to tab."],
  ["Switch", "switch", "The thumb travels with a small double bounce."],
  ["Checkbox", "checkbox", "The box fills, then the check draws itself."],
  ["Tooltip", "tooltip", "Opens after 80ms. Closes at once."],
  ["Toast", "toast", "Rises with a soft blur. Closes faster than it opens."],
  ["Accordion", "accordion", "Opens and closes in 250ms. The chevron flips."],
] as const

export default function MotionDocs() {
  return (
    <>
      <Section
        title="Durations"
        description="Use the tokens in Tailwind classes, for example duration-(--duration-fast). The tokens are in src/styles/motion.css."
      >
        <Example title="Stagger (40ms)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group h-12 w-48 rounded-xl bg-muted p-2 text-start outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block size-8 rounded-lg bg-primary transition-[translate] duration-(--duration-stagger) ease-(--ease-smooth-out) group-hover:translate-x-36 group-focus-visible:translate-x-36" />
          </button>
        </Example>
        <Example title="Micro (80ms)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group h-12 w-48 rounded-xl bg-muted p-2 text-start outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block size-8 rounded-lg bg-primary transition-[translate] duration-(--duration-micro) ease-(--ease-smooth-out) group-hover:translate-x-36 group-focus-visible:translate-x-36" />
          </button>
        </Example>
        <Example title="Quick (150ms)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group h-12 w-48 rounded-xl bg-muted p-2 text-start outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block size-8 rounded-lg bg-primary transition-[translate] duration-(--duration-quick) ease-(--ease-smooth-out) group-hover:translate-x-36 group-focus-visible:translate-x-36" />
          </button>
        </Example>
        <Example title="Fast (250ms)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group h-12 w-48 rounded-xl bg-muted p-2 text-start outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block size-8 rounded-lg bg-primary transition-[translate] duration-(--duration-fast) ease-(--ease-smooth-out) group-hover:translate-x-36 group-focus-visible:translate-x-36" />
          </button>
        </Example>
        <Example title="Medium (350ms)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group h-12 w-48 rounded-xl bg-muted p-2 text-start outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block size-8 rounded-lg bg-primary transition-[translate] duration-(--duration-medium) ease-(--ease-smooth-out) group-hover:translate-x-36 group-focus-visible:translate-x-36" />
          </button>
        </Example>
        <Example title="Slow (400ms)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group h-12 w-48 rounded-xl bg-muted p-2 text-start outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block size-8 rounded-lg bg-primary transition-[translate] duration-(--duration-slow) ease-(--ease-smooth-out) group-hover:translate-x-36 group-focus-visible:translate-x-36" />
          </button>
        </Example>
        <Example title="Very slow (500ms)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group h-12 w-48 rounded-xl bg-muted p-2 text-start outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block size-8 rounded-lg bg-primary transition-[translate] duration-(--duration-very-slow) ease-(--ease-smooth-out) group-hover:translate-x-36 group-focus-visible:translate-x-36" />
          </button>
        </Example>
      </Section>

      <Section
        title="Easings"
        description="Use --ease-smooth-out for surfaces that open, close, slide or resize. Use the bounce curves only for entrances, never for a close. For the keyword easings, use the Tailwind utilities ease-out, ease-in-out and ease-linear."
      >
        <Example title="Smooth out">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group h-12 w-48 rounded-xl bg-muted p-2 text-start outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block size-8 rounded-lg bg-primary transition-[translate] duration-(--duration-very-slow) ease-(--ease-smooth-out) group-hover:translate-x-36 group-focus-visible:translate-x-36" />
          </button>
        </Example>
        <Example title="Bounce">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group h-12 w-48 rounded-xl bg-muted p-2 text-start outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block size-8 rounded-lg bg-primary transition-[translate] duration-(--duration-very-slow) ease-(--ease-bounce) group-hover:translate-x-36 group-focus-visible:translate-x-36" />
          </button>
        </Example>
        <Example title="Bounce strong">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group h-12 w-48 rounded-xl bg-muted p-2 text-start outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block size-8 rounded-lg bg-primary transition-[translate] duration-(--duration-very-slow) ease-(--ease-bounce-strong) group-hover:translate-x-36 group-focus-visible:translate-x-36" />
          </button>
        </Example>
        <Example title="Tailwind ease-out">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group h-12 w-48 rounded-xl bg-muted p-2 text-start outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block size-8 rounded-lg bg-primary transition-[translate] duration-(--duration-very-slow) ease-out group-hover:translate-x-36 group-focus-visible:translate-x-36" />
          </button>
        </Example>
        <Example title="Tailwind ease-in-out">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group h-12 w-48 rounded-xl bg-muted p-2 text-start outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block size-8 rounded-lg bg-primary transition-[translate] duration-(--duration-very-slow) ease-in-out group-hover:translate-x-36 group-focus-visible:translate-x-36" />
          </button>
        </Example>
        <Example title="Tailwind linear">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group h-12 w-48 rounded-xl bg-muted p-2 text-start outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block size-8 rounded-lg bg-primary transition-[translate] duration-(--duration-very-slow) ease-linear group-hover:translate-x-36 group-focus-visible:translate-x-36" />
          </button>
        </Example>
      </Section>

      <Section
        title="Scales"
        description="The scale that a surface opens from. It always settles to 1. Large surfaces start further away. Small hints almost do not scale."
      >
        <Example title="Large (0.96)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group grid h-12 w-48 place-items-center rounded-xl bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block h-6 w-28 scale-(--scale-large) rounded-lg bg-primary opacity-0 transition-[opacity,scale] duration-(--duration-fast) ease-(--ease-smooth-out) group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100" />
          </button>
        </Example>
        <Example title="Medium (0.97)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group grid h-12 w-48 place-items-center rounded-xl bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block h-6 w-28 scale-(--scale-medium) rounded-lg bg-primary opacity-0 transition-[opacity,scale] duration-(--duration-fast) ease-(--ease-smooth-out) group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100" />
          </button>
        </Example>
        <Example title="Small (0.98)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group grid h-12 w-48 place-items-center rounded-xl bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block h-6 w-28 scale-(--scale-small) rounded-lg bg-primary opacity-0 transition-[opacity,scale] duration-(--duration-fast) ease-(--ease-smooth-out) group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100" />
          </button>
        </Example>
        <Example title="Tiny (0.99)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group grid h-12 w-48 place-items-center rounded-xl bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block h-6 w-28 scale-(--scale-tiny) rounded-lg bg-primary opacity-0 transition-[opacity,scale] duration-(--duration-fast) ease-(--ease-smooth-out) group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100" />
          </button>
        </Example>
      </Section>

      <Section
        title="Distances"
        description="How far an element travels. Use less distance for frequent motion and more for rare, important moments."
      >
        <Example title="Micro (4px)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group grid h-12 w-48 place-items-center rounded-xl bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block h-6 w-28 translate-y-(--distance-micro) rounded-lg bg-primary opacity-0 transition-[opacity,translate] duration-(--duration-fast) ease-(--ease-smooth-out) group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100" />
          </button>
        </Example>
        <Example title="Small (6px)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group grid h-12 w-48 place-items-center rounded-xl bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block h-6 w-28 translate-y-(--distance-small) rounded-lg bg-primary opacity-0 transition-[opacity,translate] duration-(--duration-fast) ease-(--ease-smooth-out) group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100" />
          </button>
        </Example>
        <Example title="Base (8px)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group grid h-12 w-48 place-items-center rounded-xl bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block h-6 w-28 translate-y-(--distance-base) rounded-lg bg-primary opacity-0 transition-[opacity,translate] duration-(--duration-fast) ease-(--ease-smooth-out) group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100" />
          </button>
        </Example>
        <Example title="Medium (12px)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group grid h-12 w-48 place-items-center rounded-xl bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block h-6 w-28 translate-y-(--distance-medium) rounded-lg bg-primary opacity-0 transition-[opacity,translate] duration-(--duration-fast) ease-(--ease-smooth-out) group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100" />
          </button>
        </Example>
        <Example title="Large (30px)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group grid h-12 w-48 place-items-center rounded-xl bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block h-6 w-28 translate-y-(--distance-large) rounded-lg bg-primary opacity-0 transition-[opacity,translate] duration-(--duration-fast) ease-(--ease-smooth-out) group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100" />
          </button>
        </Example>
      </Section>

      <Section
        title="Blur"
        description="The blur that an element opens from. It softens a swap or a slide. Do not use it on a plain fade or a color change."
      >
        <Example title="Small (2px)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group grid h-12 w-48 place-items-center rounded-xl bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block h-6 w-28 rounded-lg bg-primary opacity-0 blur-(--blur-small) transition-[opacity,filter] duration-(--duration-fast) ease-(--ease-smooth-out) group-hover:opacity-100 group-hover:blur-none group-focus-visible:opacity-100 group-focus-visible:blur-none" />
          </button>
        </Example>
        <Example title="Medium (3px)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group grid h-12 w-48 place-items-center rounded-xl bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block h-6 w-28 rounded-lg bg-primary opacity-0 blur-(--blur-medium) transition-[opacity,filter] duration-(--duration-fast) ease-(--ease-smooth-out) group-hover:opacity-100 group-hover:blur-none group-focus-visible:opacity-100 group-focus-visible:blur-none" />
          </button>
        </Example>
        <Example title="Large (8px)">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group grid h-12 w-48 place-items-center rounded-xl bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block h-6 w-28 rounded-lg bg-primary opacity-0 blur-(--blur-large) transition-[opacity,filter] duration-(--duration-fast) ease-(--ease-smooth-out) group-hover:opacity-100 group-hover:blur-none group-focus-visible:opacity-100 group-focus-visible:blur-none" />
          </button>
        </Example>
      </Section>

      <Section
        title="Open and close"
        description="A close is faster than an open. Popups and modals open in --duration-fast and close in --duration-quick. Panels open in --duration-slow and close in --duration-medium. Never delay a close."
        columns={2}
      >
        <Example title="Opens in 250ms, closes in 150ms">
          <button
            type="button"
            aria-label="Hover or focus"
            className="group grid h-12 w-48 place-items-center rounded-xl bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="block h-6 w-28 scale-(--scale-medium) rounded-lg bg-primary opacity-0 transition-[opacity,scale] duration-(--duration-quick) ease-(--ease-smooth-out) group-hover:scale-100 group-hover:opacity-100 group-hover:duration-(--duration-fast) group-focus-visible:scale-100 group-focus-visible:opacity-100 group-focus-visible:duration-(--duration-fast)" />
          </button>
        </Example>
      </Section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold tracking-tight">Recipes</h2>
          <p className="text-sm text-pretty text-muted-foreground">
            These components use transitions.dev recipes. Open a component to
            try it.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {RECIPES.map(([name, slug, text]) => (
            <li key={slug}>
              <a
                href={`#/${slug}`}
                className="flex h-full flex-col gap-1 rounded-2xl border bg-card p-4 transition-colors outline-none hover:bg-muted/50 focus-visible:ring-3 focus-visible:ring-ring/30"
              >
                <span className="font-medium">{name}</span>
                <span className="text-sm text-muted-foreground">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold tracking-tight">Reduced motion</h2>
        <p className="max-w-2xl text-sm text-pretty text-muted-foreground">
          When the operating system asks for less motion, all transitions and
          animations go to their end state at once. Spinners still turn, because
          they show that work is in progress.
        </p>
      </section>
    </>
  )
}
