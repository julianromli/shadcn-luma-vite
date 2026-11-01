# shadcn-luma-vite

A design system based on [shadcn/ui](https://ui.shadcn.com), with a gallery website. Developers can use the gallery to:

- Browse all 63 components.
- See every variant, size and state of each component (for example, default, hover, focus, active, disabled and invalid).
- Copy the code for each example.

## Stack

| Part       | Value                                               |
| ---------- | --------------------------------------------------- |
| Framework  | React 19, TypeScript, Vite                          |
| Styles     | Tailwind CSS v4, CSS variables                      |
| Primitives | [Base UI](https://base-ui.com) (`render` prop, not `asChild`) |
| shadcn style | `base-luma`, base color `neutral`                 |
| Icons      | Hugeicons                                           |
| Code highlighting | Shiki                                        |

The project was made with this command:

```bash
bunx --bun shadcn@latest init --preset b1VlJAwK --template vite
```

## Start

Install the dependencies:

```bash
bun install
```

Start the dev server:

```bash
bun run dev
```

## Scripts

| Script              | What it does                                    |
| ------------------- | ----------------------------------------------- |
| `bun run dev`       | Starts the Vite dev server.                     |
| `bun run build`     | Checks the types (`tsc -b`) and builds to `dist/`. |
| `bun run preview`   | Serves the `dist/` build.                       |
| `bun run typecheck` | Checks the types only.                          |
| `bun run lint`      | Runs ESLint.                                    |
| `bun run format`    | Formats the code with Prettier.                 |
| `bun run fonts:update` | Downloads the latest list of Google fonts for the font picker. |

## Project structure

```
plugins/
  example-source.ts     Vite plugin that makes the code snippet for each example
src/
  components/ui/        The design system components (from shadcn)
  gallery/
    docs/               One page for each component (<slug>.tsx)
    example.tsx         <Section>, <Example> and <CodeView>
    forced-states.ts    Makes the forced hover, focus and active states
    registry.ts         Finds the doc pages and sets the categories
  canvas/               Infinite canvas: pan and zoom, frames
  theme/                Theme engine: DialKit panels, CSS output, export, fonts
  App.tsx               Gallery layout: sidebar, search, pages
scripts/
  update-fonts.ts       Writes src/theme/fonts/google-fonts.json
```

## Add a component page

1. Add the component:

   ```bash
   bunx --bun shadcn@latest add <component>
   ```

2. Make the file `src/gallery/docs/<component>.tsx`. The gallery finds the file automatically. The file name is the URL (`#/<component>`).

   ```tsx
   import { Button } from "@/components/ui/button"
   import { Example, Section } from "@/gallery/example"
   import type { DocMeta } from "@/gallery/registry"

   export const meta: DocMeta = {
     name: "Button",
     description: "Starts an action, such as a form submit.",
     category: "Actions",
   }

   export default function ButtonDocs() {
     return (
       <Section title="States">
         <Example title="Default">
           <Button>Button</Button>
         </Example>
         <Example title="Hover" state="hover">
           <Button>Button</Button>
         </Example>
         <Example title="Disabled">
           <Button disabled>Button</Button>
         </Example>
       </Section>
     )
   }
   ```

   Use a category from `CATEGORIES` in `src/gallery/registry.ts`.

### Code snippets

You do not write the code snippets. When the site builds, the `example-source` plugin copies the JSX inside each `<Example>` and makes it the snippet. Thus the copied code is always the same as the preview.

The plugin also makes the import block at the top of each page. This block contains all the imports of the doc file, but not the imports from `@/gallery/*`.

| `<Example>` prop       | Use                                                                 |
| ---------------------- | ------------------------------------------------------------------- |
| `canvas`               | Shows the example on the canvas. Mark the default state of each variant, size, value and composition. |
| `state="hover"`        | Shows the hover look. You can also use `"focus"` or `"active"`.     |
| `source="FnName"`      | Uses the full `function FnName` from the same file as the snippet. Use it for examples that have state (hooks). |
| `vars={{ variant }}`   | Puts the real value in place of a loop variable, so `variant={variant}` becomes `variant="outline"`. |
| `code="..."`           | Sets the snippet yourself. The plugin then does not change it.      |
| `className`            | Adds classes to the preview area.                                   |

`<Section columns={1 | 2 | 3}>` sets the number of columns. Use `1` for wide components, such as tables and charts.

### Forced states

Real `:hover`, `:focus` and `:active` styles need a mouse or a keyboard. To show these states side by side, `forced-states.ts` reads the page CSS. It copies each rule that has one of these pseudo-classes and puts a data attribute in place of the pseudo-class (for example, `[data-force-hover]`). An `<Example state="hover">` puts this attribute on its content. Forced examples do not accept input. The Default example stays live.

## Motion

The motion tokens come from [transitions.dev](https://transitions.dev). They are in `src/styles/motion.css`. The gallery page **Motion** shows each token with a live demo.

Use the tokens in Tailwind classes:

```tsx
<div className="data-open:duration-(--duration-fast) data-closed:duration-(--duration-quick) ease-(--ease-smooth-out) data-open:zoom-in-97 data-closed:zoom-out-99" />
```

Rules:

- Choose a token by what the motion does, not by the nearest number.
- A close is faster than an open. Popups and modals open in `--duration-fast` (250ms) and close in `--duration-quick` (150ms). Panels open in `--duration-slow` (400ms) and close in `--duration-medium` (350ms).
- Use `--ease-smooth-out` for surfaces that open, close, slide or resize. Do not use a bounce curve for a close.
- Do not use `transition-all`. Write the exact properties, for example `transition-[color,background-color,box-shadow]`.

The keyword easings `--ease-out`, `--ease-in-out` and `--ease-linear` are not tokens in this project. Tailwind already uses these names, and a token with the same name would change the Tailwind `ease-out`, `ease-in-out` and `ease-linear` utilities. Use those utilities instead.

These components use transitions.dev recipes:

| Component | Motion |
| --- | --- |
| Tabs | The active tab background slides from tab to tab (`TabsIndicator`). |
| Switch | The thumb travels with a double bounce. It does not animate on page load. |
| Checkbox | The box fills, then the check draws itself. |
| Tooltip | Opens after 80ms. Closes in 50ms. |
| Toast | Rises with a 2px blur and a small scale in 350ms. Closes in 250ms. |
| Accordion | Opens and closes in 250ms. The chevron flips. |

When the operating system asks for less motion, all transitions and animations go to their end state at once. Spinners still turn.

## Canvas

Open the canvas from the sidebar (**Open canvas**), or go to `#/canvas`. It shows only the components, with no code. Each component is a frame, in one column for each category. A frame shows the examples that have the `canvas` prop:

- Each variant, size and other prop value, in its default state.
- Off and on, for controls with a value (Checkbox, Switch, Tabs ...).
- Composition examples (with an icon, with a label, with a footer ...).

Interaction states (hover, focus, active, disabled, invalid, read-only, loading) are only on the gallery pages. The Motion page is not on the canvas.

| Input | Action |
| --- | --- |
| Drag the background, or Space + drag | Pan |
| Scroll or trackpad swipe | Pan |
| Ctrl/⌘ + scroll, or pinch | Zoom at the pointer |
| Two fingers (touch) | Pan and pinch zoom |
| Arrow keys (Shift for a larger step) | Pan, when the canvas has focus |
| `+` / `-` | Zoom in / out |
| `0` | Zoom to 100% |
| `1` | Fit all frames |
| `2` | Fit the selected frame (click a frame title to select it) |

The components in the frames are live:
- Frames far from the screen do not render.
- Below 20% zoom, a frame shows only its name.
- Menus and other popups open at 100% size, and they close when the canvas moves.

The **Canvas** panel (DialKit) sets:
- the preview mode: current theme, light, dark, or light and dark side by side;
- the background: dots, grid or plain;
- the frame gap;
- the labels.

In the light modes, the page is set to light while the canvas shows them.

## Theme

The DialKit panel (top right, on every page) changes the design foundation live:

| Panel | Controls |
| --- | --- |
| Theme | Export CSS, Reset all |
| Colors (light), Colors (dark) | Every semantic color token |
| Typography | Sans, heading and mono font (any Google font, with a searchable picker), text scale |
| Radius & spacing | `--radius`, `--spacing` |
| Shadows | Color, opacity and size of all shadows |
| Motion | Durations, easings, scales, distances and blur |

How it works:
- The values are saved in localStorage, one key for each panel (`dialkit:ds-*`). DialKit **versions** let you save, compare and switch between themes.
- The custom tokens go on `:root`, so the components and their popups use them. The gallery interface (`[data-ui-chrome]`) keeps the default theme, and the component previews (`[data-ui-preview]`) use the custom theme.
- A chosen font loads from Google Fonts in the browser.

**Export CSS** copies the theme as CSS:
- `:root` and `.dark` blocks for `src/index.css`;
- a `:root` block for `src/styles/motion.css`;
- for custom fonts, the Fontsource `@import` lines and the `bun add` command, so the exported theme does not use Google Fonts.

## Known problems

These problems are in the files that shadcn generates:

- `bun run lint` shows 2 errors (`react-hooks/set-state-in-effect`) in `src/components/ui/carousel.tsx` and `src/hooks/use-mobile.ts`. The code works.
- The Accordion trigger has no visible focus style.
- On the canvas, popups open at 100% size. In the light and dark side-by-side mode, popups use the page theme, not the theme of the frame.
- On the Sidebar page, Ctrl+B opens and closes the demo sidebars and the gallery sidebar together.

The production bundle is approximately 600 kB because all pages load at the start. The build shows a chunk size warning.
