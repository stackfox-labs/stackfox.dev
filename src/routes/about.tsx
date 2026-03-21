import { createFileRoute } from "@tanstack/react-router"
import { Footer } from "@/components/global/footer"
import { Header } from "@/components/global/header"

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About | StackFox" },
      { name: "description", content: "Learn about StackFox — backend infrastructure built for Roblox developers." },
    ],
  }),
})

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="border-b border-zinc-200 bg-foreground py-16 text-white sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">About StackFox</h1>
            <p className="max-w-2xl text-lg text-zinc-300 sm:text-xl">
              Backend infrastructure built for Roblox developers — so you can focus on building your game, not your backend.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-zinc max-w-none">
              <h2 className="text-2xl font-bold text-foreground">What is StackFox?</h2>
              <p className="mt-4 text-zinc-600">
                StackFox is a data bridge for Roblox games. We give developers the tools to track events, store records, and manage game data through a simple Luau SDK — no backend required.
              </p>
              <p className="mt-4 text-zinc-600">
                Roblox developers have always faced a gap when trying to connect their games to the rest of their stack. StackFox closes that gap with a hosted backend platform that speaks Luau natively and integrates with the tools you already use.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-4 text-zinc-600">
                We believe every Roblox developer — whether indie or studio — should have access to professional-grade backend tooling without needing to hire a backend team or maintain infrastructure. StackFox makes that possible.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-foreground">Built for Developers</h2>
              <p className="mt-4 text-zinc-600">
                From day one, StackFox has been designed with the developer experience in mind. Define your data models in Luau, apply them from Roblox Studio, and interact with structured backend data through a clean SDK. That's it.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-foreground">Get in Touch</h2>
              <p className="mt-4 text-zinc-600">
                Have questions or want to learn more? Reach out to us at{" "}
                <a href="mailto:hello@stackfox.dev" className="text-primary hover:underline">
                  hello@stackfox.dev
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
