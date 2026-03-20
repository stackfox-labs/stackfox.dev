import { getDashboardUrl } from "@/lib/dashboard-url"
import { Button } from "@/components/ui/button"

const steps = [
  "Install the StackFox SDK.",
  "Initialize with your API key.",
  "Track events from your game code.",
  "Store and retrieve records by collection.",
]

export function GettingStartedSection() {
  const dashboardUrl = getDashboardUrl()

  return (
    <section id="getting-started" className="cq-section subtle-grid bg-primary py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-white md:text-5xl">Start using StackFox in minutes.</h2>

        <div className="mx-auto mb-12 grid max-w-2xl gap-4 sm:grid-cols-2">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4 border-2 border-white/20 bg-white/10 p-4 text-left">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center bg-white text-sm font-bold text-primary">
                {i + 1}
              </div>
              <p className="text-sm font-medium text-white">{step}</p>
            </div>
          ))}
        </div>

        <Button asChild size="lg" className="border-2 border-foreground bg-white px-10 py-4 text-lg font-bold text-primary shadow-brutal-md transition-all duration-200 hover:scale-[1.02] hover:bg-zinc-100">
          <a href={dashboardUrl}>Get Started</a>
        </Button>
      </div>
    </section>
  )
}