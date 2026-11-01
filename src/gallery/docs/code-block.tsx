import { HugeiconsIcon } from "@hugeicons/react"
import { Alert02Icon, File02Icon } from "@hugeicons/core-free-icons"

import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFooter,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/components/ui/code-block"
import { useHighlightedCode } from "@/hooks/use-highlighted-code"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Code Block",
  description:
    "Shows code in a box. It can show a title, line numbers, changed lines and a copy button.",
  category: "Data display",
}

function HighlightedCodeBlock() {
  const code = `import { Button } from "@/components/ui/button"

export function Save() {
  return <Button>Save</Button>
}`
  const lines = useHighlightedCode(code, "tsx")

  return (
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockTitle>save.tsx</CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton value={code} />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent lineNumbers>
        {lines.map((line, index) => (
          <CodeBlockLine key={index}>{line}</CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  )
}

export default function CodeBlockDocs() {
  return (
    <>
      <Section title="Variants" columns={2}>
        <Example title="Default">
          <CodeBlock>
            <CodeBlockContent>bun add @base-ui/react</CodeBlockContent>
          </CodeBlock>
        </Example>
        <Example title="Destructive">
          <CodeBlock variant="destructive">
            <CodeBlockHeader>
              <CodeBlockTitle>
                <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
                Build failed
              </CodeBlockTitle>
            </CodeBlockHeader>
            <CodeBlockContent>
              error TS2322: Type 'string' is not assignable to type 'number'.
            </CodeBlockContent>
          </CodeBlock>
        </Example>
      </Section>

      <Section title="Sizes" columns={2}>
        <Example title="Default">
          <CodeBlock>
            <CodeBlockContent>bun run build</CodeBlockContent>
          </CodeBlock>
        </Example>
        <Example title="Small">
          <CodeBlock size="sm">
            <CodeBlockContent>bun run build</CodeBlockContent>
          </CodeBlock>
        </Example>
      </Section>

      <Section
        title="Copy button"
        description="The copy button shows when you move the pointer on the block or when the block has focus. Hover is forced on the right."
        columns={2}
      >
        <Example title="Default">
          <CodeBlock>
            <CodeBlockActions>
              <CodeBlockCopyButton value="bunx shadcn add button" />
            </CodeBlockActions>
            <CodeBlockContent>bunx shadcn add button</CodeBlockContent>
          </CodeBlock>
        </Example>
        <Example title="Hover" state="hover">
          <CodeBlock>
            <CodeBlockActions>
              <CodeBlockCopyButton value="bunx shadcn add button" />
            </CodeBlockActions>
            <CodeBlockContent>bunx shadcn add button</CodeBlockContent>
          </CodeBlock>
        </Example>
        <Example title="Focus" state="focus">
          <CodeBlock>
            <CodeBlockContent>bunx shadcn add button</CodeBlockContent>
          </CodeBlock>
        </Example>
      </Section>

      <Section title="Parts" columns={2}>
        <Example title="Header and footer">
          <CodeBlock>
            <CodeBlockHeader>
              <CodeBlockTitle>
                <HugeiconsIcon icon={File02Icon} strokeWidth={2} />
                components.json
              </CodeBlockTitle>
              <CodeBlockActions>
                <CodeBlockCopyButton value={'{ "style": "base-luma" }'} />
              </CodeBlockActions>
            </CodeBlockHeader>
            <CodeBlockContent>{'{ "style": "base-luma" }'}</CodeBlockContent>
            <CodeBlockFooter>JSON · 1 line</CodeBlockFooter>
          </CodeBlock>
        </Example>
        <Example title="Line numbers">
          <CodeBlock>
            <CodeBlockContent lineNumbers startLine={10}>
              {"const a = 1\nconst b = 2\nconst sum = a + b"}
            </CodeBlockContent>
          </CodeBlock>
        </Example>
        <Example title="Changed lines">
          <CodeBlock>
            <CodeBlockContent>
              <CodeBlockLine>{"<Button"}</CodeBlockLine>
              <CodeBlockLine variant="removed">{'  variant="default"'}</CodeBlockLine>
              <CodeBlockLine variant="added">{'  variant="outline"'}</CodeBlockLine>
              <CodeBlockLine variant="highlighted">{"  disabled"}</CodeBlockLine>
              <CodeBlockLine>{"/>"}</CodeBlockLine>
            </CodeBlockContent>
          </CodeBlock>
        </Example>
        <Example title="Wrap long lines">
          <CodeBlock>
            <CodeBlockContent wrap>
              This line is long. With wrap, it goes onto more than one line and
              you do not have to scroll to the side.
            </CodeBlockContent>
          </CodeBlock>
        </Example>
      </Section>

      <Section title="Syntax highlight" columns={1}>
        <Example title="Highlighted code" source="HighlightedCodeBlock">
          <HighlightedCodeBlock />
        </Example>
      </Section>
    </>
  )
}
