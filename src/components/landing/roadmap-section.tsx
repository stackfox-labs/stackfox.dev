const futureServices = [
  "Connectors",
  "Automations",
  "Analytics pipelines",
  "Leaderboards",
  "Feature flags",
  "Game telemetry",
]

export function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="py-20 md:py-24 bg-zinc-50 cq-section border-t border-zinc-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
            The StackFox platform will continue to{" "}
            <span className="text-primary">expand.</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            StackFox starts with events and records, and will expand with
            additional backend services designed for Roblox games.
          </p>
        </div>

        <div className="border-2 border-foreground bg-zinc-50 p-8 shadow-brutal-md">
          <h3 className="text-lg font-bold text-zinc-900 mb-6">
            Future platform services
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {futureServices.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 text-zinc-700"
              >
                <div className="w-2 h-2 bg-secondary flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
