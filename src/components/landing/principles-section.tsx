import { Card3D } from "@/components/ui/card-3d"
import { Code2, Monitor, Server, Database } from "lucide-react"

const principles = [
  {
    title: "Luau-First",
    description: "All interactions are handled through a native Luau SDK.",
    Icon: Code2,
  },
  {
    title: "Zero Setup",
    description:
      "No schemas, no migrations. Initialize with your API key and start sending data.",
    Icon: Monitor,
  },
  {
    title: "Hosted Infrastructure",
    description:
      "StackFox runs the backend infrastructure so developers don't need to manage servers or databases.",
    Icon: Server,
  },
  {
    title: "Events & Records",
    description:
      "Track game events and store key-value records organized by collection.",
    Icon: Database,
  },
]

export function PrinciplesSection() {
  return (
    <section
      id="principles"
      className="py-20 md:py-24 bg-foreground cq-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Designed specifically for{" "}
            <span className="text-secondary">Roblox developers.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p) => (
            <Card3D key={p.title} className="p-6 text-center">
              <p.Icon className="w-10 h-10 text-zinc-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-zinc-900 mb-2">
                {p.title}
              </h3>
              <p className="text-zinc-600">{p.description}</p>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  )
}
