import { Code2, Monitor, Server } from "lucide-react"

const pillars = [
  {
    Icon: Code2,
    title: "Luau-native",
    description:
      "Send events and sync records entirely in Luau — the language you already use to build your game. No context switching, no external tools, no wrappers.",
  },
  {
    Icon: Monitor,
    title: "Studio-integrated",
    description:
      "View incoming events, inspect synced records, and manage your project directly from the dashboard. Everything stays connected to your game.",
  },
  {
    Icon: Server,
    title: "Fully hosted",
    description:
      "StackFox runs the servers, databases, and APIs. You get uptime, scalability, and reliability without provisioning or operating any infrastructure yourself.",
  },
]

export function PlatformSection() {
  return (
    <section id="platform" className="py-20 md:py-24 bg-foreground cq-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            One platform.{" "}
            <span className="text-secondary">One SDK.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            StackFox is a data bridge platform for Roblox games, not a collection of separate tools. Every module follows the same pattern — so what you learn once applies everywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="border-2 border-zinc-700 bg-zinc-800 p-8"
            >
              <div className="w-10 h-10 bg-primary/20 border border-primary/40 flex items-center justify-center mb-5">
                <pillar.Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
