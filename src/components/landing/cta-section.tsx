import { Card3D } from "@/components/ui/card-3d"
import { Button } from "@/components/ui/button"
import { getDashboardUrl } from "@/lib/dashboard-url"

export function CTASection() {
  const dashboardUrl = getDashboardUrl()

  return (
    <section id="get-started" className="cq-section subtle-grid bg-primary py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <Card3D className="bg-white p-12">
          <h2 className="mb-4 text-4xl font-bold text-zinc-900">Start using StackFox in minutes.</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-zinc-600">
            Connect your Roblox game to external systems. Send events, sync records, and power dashboards and tools — all through a simple Luau SDK.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-red-500 hover:bg-red-600">
              <a href={dashboardUrl}>Get Started</a>
            </Button>
            <Button variant="outline" size="lg">View Documentation</Button>
          </div>
          <p className="mt-4 text-sm text-zinc-500">One SDK. Events and records, ready to go.</p>
        </Card3D>
      </div>
    </section>
  )
}