import { Code2, Database, Monitor, Server, Shield, Zap } from "lucide-react"
import { getDashboardUrl } from "@/lib/dashboard-url"
import { Card3D } from "@/components/ui/card-3d"
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "Luau-First SDK",
    description: "Track events and store records using native Luau. No external languages required.",
    icon: Code2,
  },
  {
    title: "Studio-Native Workflow",
    description: "Initialize the SDK and start sending data directly from Roblox Studio. No CLI, no deployments.",
    icon: Monitor,
  },
  {
    title: "Hosted Infrastructure",
    description: "StackFox runs the servers, databases, and APIs. You focus on building your game.",
    icon: Server,
  },
  {
    title: "Collection-Based Records",
    description: "Organize game data into collections with simple key-value operations. No schema required.",
    icon: Database,
  },
  {
    title: "Simple SDK Access",
    description: "One SDK gives you access to all StackFox platform services. Clean, consistent API.",
    icon: Zap,
  },
  {
    title: "Real-Time Dashboard",
    description: "Browse events, inspect records, and monitor your game data in real time from the dashboard.",
    icon: Shield,
  },
]

export function FeaturesSection() {
  const dashboardUrl = getDashboardUrl()

  return (
    <section id="features" className="cq-section bg-foreground py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Designed specifically for <span className="text-secondary">Roblox developers.</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-300 md:text-xl">
            Everything you need to build backend systems for your Roblox game, without the infrastructure overhead.
          </p>
        </div>

        <div className="cq-grid-3 mb-16 gap-8">
          {features.map((feature, index) => (
            <Card3D key={index} className="p-6 text-center">
              <feature.icon className="mb-4 h-9 w-9 text-zinc-900" />
              <h3 className="mb-3 text-xl font-bold text-zinc-900">{feature.title}</h3>
              <p className="text-zinc-600">{feature.description}</p>
            </Card3D>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="mr-4">
            <a href={dashboardUrl}>Get Started</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white! bg-transparent! text-white! hover:bg-white/10!">View Documentation</Button>
        </div>
      </div>
    </section>
  )
}