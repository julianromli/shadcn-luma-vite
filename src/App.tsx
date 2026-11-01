import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "@/components/theme-provider"
import { CodeView } from "@/gallery/example"
import { CATEGORIES, docs, type Doc } from "@/gallery/registry"

function useHashSlug() {
  const read = () => window.location.hash.replace(/^#\/?/, "")
  const [slug, setSlug] = React.useState(read)

  React.useEffect(() => {
    const onChange = () => {
      setSlug(read())
      document.querySelector("main")?.scrollTo({ top: 0 })
      window.scrollTo({ top: 0 })
    }
    window.addEventListener("hashchange", onChange)
    return () => window.removeEventListener("hashchange", onChange)
  }, [])

  return slug
}

export function App() {
  const slug = useHashSlug()
  const doc = docs.find((item) => item.slug === slug)

  React.useEffect(() => {
    document.title = doc ? `${doc.name} – Design System` : "Design System"
  }, [doc])

  return (
    <SidebarProvider>
      <GallerySidebar active={doc?.slug} />
      <SidebarInset className="min-w-0">
        <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          <span className="truncate text-sm font-medium">
            {doc?.name ?? "Overview"}
          </span>
          <ThemeToggle />
        </header>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-10 md:px-8">
          {doc ? <DocPage doc={doc} key={doc.slug} /> : <Overview />}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

function GallerySidebar({ active }: { active?: string }) {
  const [query, setQuery] = React.useState("")
  const matches = docs.filter((doc) =>
    doc.name.toLowerCase().includes(query.trim().toLowerCase())
  )

  return (
    <Sidebar>
      <SidebarHeader className="gap-3 p-4">
        <a href="#/" className="text-base font-semibold tracking-tight">
          Design System
        </a>
        <SidebarInput
          type="search"
          placeholder="Search components"
          aria-label="Search components"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </SidebarHeader>
      <SidebarContent>
        {CATEGORIES.map((category) => {
          const items = matches.filter((doc) => doc.category === category)
          if (!items.length) return null

          return (
            <SidebarGroup key={category}>
              <SidebarGroupLabel>{category}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((doc) => (
                    <SidebarMenuItem key={doc.slug}>
                      <SidebarMenuButton
                        isActive={doc.slug === active}
                        render={<a href={`#/${doc.slug}`} />}
                      >
                        {doc.name}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )
        })}
        {!matches.length && (
          <p className="px-4 py-2 text-sm text-muted-foreground">
            No components match “{query}”.
          </p>
        )}
      </SidebarContent>
    </Sidebar>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const dark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className="ms-auto"
      aria-label={dark ? "Use light theme" : "Use dark theme"}
      onClick={() => setTheme(dark ? "light" : "dark")}
    >
      <HugeiconsIcon icon={dark ? Sun03Icon : Moon02Icon} strokeWidth={2} />
    </Button>
  )
}

function DocPage({ doc }: { doc: Doc }) {
  const { Page } = doc

  return (
    <>
      <div className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">{doc.category}</p>
        <h1 className="text-3xl font-semibold tracking-tight">{doc.name}</h1>
        <p className="max-w-2xl text-pretty text-muted-foreground">
          {doc.description}
        </p>
        {doc.imports && (
          <CodeView code={doc.imports} copy className="mt-2" />
        )}
      </div>
      <Page />
    </>
  )
}

function Overview() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">Components</h1>
        <p className="max-w-2xl text-pretty text-muted-foreground">
          Browse every component with its variants and states. Open a
          component to copy the code for each example.
        </p>
      </div>
      {CATEGORIES.map((category) => {
        const items = docs.filter((doc) => doc.category === category)
        if (!items.length) return null

        return (
          <section key={category} className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold tracking-tight">{category}</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((doc) => (
                <a
                  key={doc.slug}
                  href={`#/${doc.slug}`}
                  className="flex flex-col gap-1 rounded-2xl border bg-card p-4 transition-colors outline-none hover:bg-muted/50 focus-visible:ring-3 focus-visible:ring-ring/30"
                >
                  <span className="font-medium">{doc.name}</span>
                  <span className="line-clamp-2 text-sm text-muted-foreground">
                    {doc.description}
                  </span>
                </a>
              ))}
            </div>
          </section>
        )
      })}
    </>
  )
}

export default App
