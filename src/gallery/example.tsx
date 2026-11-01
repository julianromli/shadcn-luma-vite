import * as React from "react"
import { cn } from "cn"

import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockLine,
} from "@/components/ui/code-block"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useHighlightedCode } from "@/hooks/use-highlighted-code"
import type { ForcedState } from "@/gallery/forced-states"

export function Section({
  title,
  description,
  columns = 3,
  children,
}: {
  title: string
  description?: React.ReactNode
  columns?: 1 | 2 | 3
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="text-sm text-pretty text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      <div
        className={cn(
          "grid gap-4",
          columns === 2 && "md:grid-cols-2",
          columns === 3 && "md:grid-cols-2 xl:grid-cols-3"
        )}
      >
        {children}
      </div>
    </section>
  )
}

const STATE_LABEL: Record<ForcedState, string> = {
  hover: "Forced hover",
  focus: "Forced focus",
  active: "Forced active",
}

export function Example({
  title,
  state,
  code = "",
  vars,
  className,
  children,
}: {
  title: string
  // Shows the hover, focus or active look without a mouse or keyboard.
  state?: ForcedState
  // The name of a function in the same docs file to show as the code.
  source?: string
  // Added by the example-source Vite plugin from the children.
  code?: string
  // Values for loop variables in the code, so the copied code is literal.
  // With vars={{ variant: "outline" }}, `variant={variant}` becomes
  // `variant="outline"`.
  vars?: Record<string, string>
  className?: string
  children: React.ReactNode
}) {
  const [showCode, setShowCode] = React.useState(false)
  const codeId = React.useId()
  const snippet = vars ? fillVars(code, vars) : code

  return (
    <div className="flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-card">
      <div
        data-ui-preview
        className={cn(
          "flex min-h-36 flex-1 flex-wrap items-center justify-center gap-3 bg-background p-6 text-foreground",
          className
        )}
      >
        {state ? <Forced state={state}>{children}</Forced> : children}
      </div>
      <div className="flex items-center gap-2 border-t bg-muted/40 py-1.5 ps-4 pe-1.5">
        <span className="min-w-0 truncate text-sm font-medium">{title}</span>
        {state && <Badge variant="outline">{STATE_LABEL[state]}</Badge>}
        <div className="ms-auto flex shrink-0 items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            aria-expanded={showCode}
            aria-controls={codeId}
            onClick={() => setShowCode((value) => !value)}
          >
            {showCode ? "Hide code" : "Code"}
          </Button>
          <CodeBlockCopyButton value={snippet} variant="ghost" size="icon-sm" />
        </div>
      </div>
      {showCode && (
        <div id={codeId} className="border-t">
          <CodeView code={snippet} className="rounded-none ring-0" />
        </div>
      )}
    </div>
  )
}

function fillVars(code: string, vars: Record<string, string>) {
  let text = code
  for (const [name, value] of Object.entries(vars)) {
    text = text
      .replaceAll(`={${name}}`, `=${JSON.stringify(value)}`)
      .replaceAll(`{${name}}`, value)
  }
  return text
}

function Forced({
  state,
  children,
}: {
  state: ForcedState
  children: React.ReactNode
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const root = ref.current
    if (!root) return

    const attribute = `data-force-${state}`
    const apply = () => {
      for (const element of root.querySelectorAll("*")) {
        element.setAttribute(attribute, "")
      }
    }

    apply()
    const observer = new MutationObserver(apply)
    observer.observe(root, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [state])

  // The copy is only a picture of the state, so it takes no input.
  return (
    <div ref={ref} inert className="contents">
      {children}
    </div>
  )
}

export function CodeView({
  code,
  language = "tsx",
  className,
  copy = false,
}: {
  code: string
  language?: string
  className?: string
  copy?: boolean
}) {
  const lines = useHighlightedCode(code, language)

  return (
    <CodeBlock size="sm" className={className}>
      {copy && (
        <CodeBlockActions>
          <CodeBlockCopyButton value={code} />
        </CodeBlockActions>
      )}
      <CodeBlockContent className="max-h-96">
        {lines.map((line, index) => (
          <CodeBlockLine key={index}>{line}</CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  )
}
