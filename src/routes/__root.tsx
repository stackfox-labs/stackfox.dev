import { HeadContent, Link, Scripts, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"
import { Footer } from "@/components/global/footer"
import { Header } from "@/components/global/header"
import { BackButton } from "@/components/ui/back-button"
import { Button } from "@/components/ui/button"
import appCss from "../styles.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "StackFox | Backend infrastructure for Roblox games" },
      {
        name: "description",
        content: "StackFox is a backend platform built for Roblox developers. Define your models in Luau, apply them from Roblox Studio, and interact with structured backend data through a simple SDK.",
      },
      { property: "og:title", content: "StackFox | Backend infrastructure for Roblox games" },
      {
        property: "og:description",
        content: "StackFox is a backend platform built for Roblox developers. Define your models in Luau, apply them from Roblox Studio, and interact with structured backend data through a simple SDK.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFoundPage,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background font-sans text-foreground">
        {children}
        <TanStackDevtools
          config={{ position: "bottom-right" }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 animate-in fade-in duration-1000">
              <h1 className="select-none bg-linear-to-b from-red-500 to-red-700 bg-clip-text text-8xl font-bold text-transparent md:text-9xl">
                404
              </h1>
              <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-red-600 shadow-[0_4px_0_0_#dc2626] animate-in fade-in duration-800 delay-200" />
            </div>

            <h2 className="mb-6 text-4xl font-bold text-balance animate-in fade-in duration-1000 delay-100 md:text-5xl">
              <span className="text-primary">Oops!</span> Page not found
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-balance text-xl text-muted-foreground animate-in fade-in duration-1000 delay-200 md:text-2xl">
              The page you&apos;re looking for seems to have wandered off. Let&apos;s get you back on track.
            </p>

            <div className="mx-auto mb-8 max-w-md rounded-lg border border-zinc-200 bg-zinc-50 p-6 animate-in fade-in duration-1000 delay-300 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="mb-2 text-lg font-semibold">What happened?</h3>
              <p className="text-sm text-muted-foreground">
                The URL you entered might be incorrect, or the page may have been moved or deleted.
              </p>
            </div>

            <div className="mb-12 flex flex-col items-center justify-center gap-4 animate-in fade-in duration-1000 delay-400 sm:flex-row">
              <Button asChild size="lg" className="bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-primary/90">
                <Link to="/">Go back home</Link>
              </Button>
              <BackButton
                variant="outline"
                size="lg"
                className="border-2 border-zinc-600 bg-transparent px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-[1.02]"
              >
                Go back
              </BackButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}