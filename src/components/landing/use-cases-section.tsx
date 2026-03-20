import { Card3D } from "@/components/ui/card-3d"
import { User, Package, Users, Coins, Shield } from "lucide-react"

const useCases = [
  {
    title: "Player Profiles",
    description: "Store progression data like coins, levels, and achievements.",
    Icon: User,
  },
  {
    title: "Inventory Systems",
    description: "Track item ownership and player equipment.",
    Icon: Package,
  },
  {
    title: "Guild Systems",
    description: "Manage guild membership and shared progression.",
    Icon: Users,
  },
  {
    title: "Game Economies",
    description: "Store and update currency balances and item data.",
    Icon: Coins,
  },
  {
    title: "Moderation Systems",
    description: "Maintain ban lists and moderation records.",
    Icon: Shield,
  },
]

export function UseCasesSection() {
  return (
    <section
      id="use-cases"
      className="py-20 md:py-24 bg-white cq-section border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
            Build backend systems for{" "}
            <span className="text-primary">your game.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <Card3D key={uc.title} className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-50 border border-red-200 flex items-center justify-center">
                  <uc.Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">
                  {uc.title}
                </h3>
              </div>
              <p className="text-zinc-600">{uc.description}</p>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  )
}
