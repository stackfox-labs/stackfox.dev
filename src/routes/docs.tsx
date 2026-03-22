import { Link, Outlet, createFileRoute, useRouterState } from "@tanstack/react-router"
import { ExternalLinkIcon } from "lucide-react"
import { Header } from "@/components/global/header"
import { docsNav } from "@/lib/docs-nav"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/docs")({
  component: DocsLayout,
})

function DocsSidebar({ isEmbedded, pathname }: { isEmbedded: boolean; pathname: string }) {
  return (
    <aside className="flex h-full w-56 shrink-0 flex-col overflow-y-auto border-r border-zinc-200 bg-white">
      {isEmbedded && (
        <div className="flex shrink-0 items-center justify-between border-b border-zinc-200 px-4 py-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
            Docs
          </span>
          <a
            href="/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] text-zinc-400 hover:text-zinc-700"
          >
            <ExternalLinkIcon className="h-3 w-3" />
            Open full
          </a>
        </div>
      )}

      <nav className="flex-1 overflow-y-auto px-4 py-5">
        {docsNav.map((section) => (
          <div key={section.section} className="mb-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
              {section.section}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const active = pathname === `/docs/${item.slug}`
                const isNested = item.slug.includes("/")
                return (
                  <li key={item.slug}>
                    <Link
                      to={isNested ? "/docs/$" : "/docs/$slug"}
                      params={isNested ? { _splat: item.slug } : { slug: item.slug }}
                      search={(s) => s}
                      className={cn(
                        "block rounded-none border-l-2 py-1.5 pl-2 pr-3 text-sm transition-colors",
                        active
                          ? "border-primary bg-red-50 font-semibold text-primary"
                          : "border-transparent text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900",
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}

function DocsLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const searchStr = useRouterState({ select: (s) => s.location.searchStr })
  const isEmbedded = searchStr.includes("frame=1")

  if (isEmbedded) {
    return (
      <div className="flex h-screen overflow-hidden bg-white">
        <DocsSidebar isEmbedded pathname={pathname} />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    )
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-white">
      <Header />
      <div className="flex min-h-0 flex-1">
        <DocsSidebar isEmbedded={false} pathname={pathname} />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
