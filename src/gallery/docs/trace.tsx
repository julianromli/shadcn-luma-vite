import { HugeiconsIcon } from "@hugeicons/react"
import {
  Alert02Icon,
  CheckmarkCircle02Icon,
  Clock01Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons"

import { Spinner } from "@/components/ui/spinner"
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ui/trace"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Trace",
  description:
    "Shows the steps that an AI agent does, such as a search or a tool call. Each step shows its status.",
  category: "AI and chat",
}

export default function TraceDocs() {
  return (
    <>
      <Section title="Status">
        <Example title="Done">
          <Trace>
            <TraceLine>
              <TraceIcon>
                <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
              </TraceIcon>
              <TraceTitle>Read 3 files</TraceTitle>
              <TraceDescription>2s</TraceDescription>
            </TraceLine>
          </Trace>
        </Example>
        <Example title="Running">
          <Trace>
            <TraceLine status="running">
              <TraceIcon>
                <Spinner />
              </TraceIcon>
              <TraceTitle>Searching the web</TraceTitle>
            </TraceLine>
          </Trace>
        </Example>
        <Example title="Pending">
          <Trace>
            <TraceLine status="pending">
              <TraceIcon>
                <HugeiconsIcon icon={Clock01Icon} strokeWidth={2} />
              </TraceIcon>
              <TraceTitle>Write the summary</TraceTitle>
            </TraceLine>
          </Trace>
        </Example>
        <Example title="Error">
          <Trace>
            <TraceLine status="error">
              <TraceIcon>
                <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
              </TraceIcon>
              <TraceTitle>The request failed</TraceTitle>
            </TraceLine>
          </Trace>
        </Example>
      </Section>

      <Section
        title="Interactive states"
        description="Put a line in a button or a link to make it interactive. Hover and focus are forced so that you can compare them."
      >
        <Example title="Default">
          <Trace>
            <button type="button">
              <TraceLine>
                <TraceIcon>
                  <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
                </TraceIcon>
                <TraceTitle>Searched for “design tokens”</TraceTitle>
              </TraceLine>
            </button>
          </Trace>
        </Example>
        <Example title="Hover" state="hover">
          <Trace>
            <button type="button">
              <TraceLine>
                <TraceIcon>
                  <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
                </TraceIcon>
                <TraceTitle>Searched for “design tokens”</TraceTitle>
              </TraceLine>
            </button>
          </Trace>
        </Example>
        <Example title="Focus" state="focus">
          <Trace>
            <button type="button">
              <TraceLine>
                <TraceIcon>
                  <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
                </TraceIcon>
                <TraceTitle>Searched for “design tokens”</TraceTitle>
              </TraceLine>
            </button>
          </Trace>
        </Example>
      </Section>

      <Section title="Collapsible" columns={2}>
        <Example title="Closed" className="items-start justify-start">
          <Trace>
            <TraceCollapsible>
              <TraceCollapsibleTrigger>
                <TraceLine>
                  <TraceTitle>Thought for 8 seconds</TraceTitle>
                </TraceLine>
              </TraceCollapsibleTrigger>
              <TraceCollapsibleContent>
                I read the files. Then I compared the colors with the tokens.
              </TraceCollapsibleContent>
            </TraceCollapsible>
          </Trace>
        </Example>
        <Example title="Open" className="items-start justify-start">
          <Trace>
            <TraceCollapsible defaultOpen>
              <TraceCollapsibleTrigger>
                <TraceLine>
                  <TraceTitle>Thought for 8 seconds</TraceTitle>
                </TraceLine>
              </TraceCollapsibleTrigger>
              <TraceCollapsibleContent>
                I read the files. Then I compared the colors with the tokens.
              </TraceCollapsibleContent>
            </TraceCollapsible>
          </Trace>
        </Example>
      </Section>

      <Section title="Steps" columns={1}>
        <Example title="Full trace" className="justify-start">
          <Trace>
            <TraceLine>
              <TraceIcon>
                <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
              </TraceIcon>
              <TraceTitle>Read 3 files</TraceTitle>
              <TraceDescription>2s</TraceDescription>
            </TraceLine>
            <TraceLine>
              <TraceIcon>
                <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
              </TraceIcon>
              <TraceTitle>Searched the web</TraceTitle>
              <TraceDescription>5s</TraceDescription>
            </TraceLine>
            <TraceLine status="running">
              <TraceIcon>
                <Spinner />
              </TraceIcon>
              <TraceTitle>Writing the answer</TraceTitle>
            </TraceLine>
            <TraceLine status="pending">
              <TraceIcon>
                <HugeiconsIcon icon={Clock01Icon} strokeWidth={2} />
              </TraceIcon>
              <TraceTitle>Check the answer</TraceTitle>
            </TraceLine>
          </Trace>
        </Example>
      </Section>
    </>
  )
}
