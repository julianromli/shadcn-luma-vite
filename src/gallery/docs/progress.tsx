import * as React from "react"

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Progress",
  description: "Shows how much of a task is complete.",
  category: "Feedback",
}

function AnimatedProgress() {
  const [value, setValue] = React.useState(10)

  React.useEffect(() => {
    const timer = setInterval(
      () => setValue((current) => (current >= 100 ? 10 : current + 10)),
      800
    )
    return () => clearInterval(timer)
  }, [])

  return (
    <Progress value={value} className="w-full max-w-xs">
      <ProgressLabel>Uploading</ProgressLabel>
      <ProgressValue />
    </Progress>
  )
}

export default function ProgressDocs() {
  return (
    <>
      <Section title="Values">
        <Example title="Empty">
          <Progress value={0} className="w-full max-w-xs" aria-label="Progress" />
        </Example>
        <Example title="Partial">
          <Progress value={60} className="w-full max-w-xs" aria-label="Progress" />
        </Example>
        <Example title="Complete">
          <Progress value={100} className="w-full max-w-xs" aria-label="Progress" />
        </Example>
        <Example title="Indeterminate">
          <Progress value={null} className="w-full max-w-xs" aria-label="Loading" />
        </Example>
      </Section>

      <Section title="With content">
        <Example title="Label and value">
          <Progress value={45} className="w-full max-w-xs">
            <ProgressLabel>Storage</ProgressLabel>
            <ProgressValue />
          </Progress>
        </Example>
        <Example title="Animated" source="AnimatedProgress">
          <AnimatedProgress />
        </Example>
      </Section>
    </>
  )
}
