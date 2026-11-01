import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Resizable",
  description:
    "Divides an area into panels. The user can drag the handle between panels to change their size.",
  category: "Layout",
}

export default function ResizableDocs() {
  return (
    <>
      <Section title="Orientation" columns={2}>
        <Example title="Horizontal">
          <ResizablePanelGroup
            orientation="horizontal"
            className="min-h-48 max-w-md rounded-2xl border"
          >
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center p-6 text-sm">
                One
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center p-6 text-sm">
                Two
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Example>
        <Example title="Vertical">
          <ResizablePanelGroup
            orientation="vertical"
            className="min-h-48 max-w-md rounded-2xl border"
          >
            <ResizablePanel defaultSize="30%">
              <div className="flex h-full items-center justify-center p-6 text-sm">
                Header
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize="70%">
              <div className="flex h-full items-center justify-center p-6 text-sm">
                Content
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Example>
      </Section>

      <Section
        title="Handle"
        description="Focus is forced on the right. The handle gets focus when you press Tab. Then the arrow keys change the panel size."
        columns={2}
      >
        <Example title="With grip">
          <ResizablePanelGroup
            orientation="horizontal"
            className="min-h-48 max-w-md rounded-2xl border"
          >
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center p-6 text-sm">
                Sidebar
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center p-6 text-sm">
                Content
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Example>
        <Example title="Focus" state="focus">
          <ResizablePanelGroup
            orientation="horizontal"
            className="min-h-48 max-w-md rounded-2xl border"
          >
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center p-6 text-sm">
                Sidebar
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center p-6 text-sm">
                Content
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Example>
        <Example title="Disabled">
          <ResizablePanelGroup
            orientation="horizontal"
            className="min-h-48 max-w-md rounded-2xl border"
            disabled
          >
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center p-6 text-sm">
                Fixed
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center p-6 text-sm">
                Fixed
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Example>
      </Section>

      <Section title="Nested" columns={1}>
        <Example title="Panels in panels">
          <ResizablePanelGroup
            orientation="horizontal"
            className="min-h-64 max-w-2xl rounded-2xl border"
          >
            <ResizablePanel defaultSize="30%" minSize="20%">
              <div className="flex h-full items-center justify-center p-6 text-sm">
                Files
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="70%">
              <ResizablePanelGroup orientation="vertical">
                <ResizablePanel defaultSize="65%">
                  <div className="flex h-full items-center justify-center p-6 text-sm">
                    Editor
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize="35%" collapsible minSize="15%">
                  <div className="flex h-full items-center justify-center p-6 text-sm">
                    Terminal
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Example>
      </Section>
    </>
  )
}
