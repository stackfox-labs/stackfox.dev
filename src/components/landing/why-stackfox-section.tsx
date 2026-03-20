import { Check, X } from "lucide-react"

const provides = [
  "A data bridge between Roblox and external systems",
  "Structured event tracking from your game",
  "External records accessible from anywhere",
  "Real-time dashboard for events and records",
  "One simple Luau SDK",
]

const noLongerNeeded = [
  "Backend servers",
  "Database setup",
  "Infrastructure management",
]

export function WhyStackFoxSection() {
  return (
    <section
      id="why-stackfox"
      className="py-20 md:py-24 bg-foreground cq-section"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why developers use{" "}
            <span className="text-secondary">StackFox.</span>
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            StackFox gives Roblox games a data bridge to external systems — no backend to build, no infrastructure to manage. Focus on your game while StackFox handles the data layer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-2 border-zinc-600 bg-zinc-800 p-8">
            <h3 className="text-xl font-bold text-white mb-6">
              StackFox provides
            </h3>
            <ul className="space-y-4">
              {provides.map((item) => (
                <li key={item} className="flex items-center gap-3 text-zinc-200">
                  <div className="w-6 h-6 bg-green-500/20 border border-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-zinc-600 bg-zinc-800 p-8">
            <h3 className="text-xl font-bold text-white mb-6">
              Without requiring
            </h3>
            <ul className="space-y-4">
              {noLongerNeeded.map((item) => (
                <li key={item} className="flex items-center gap-3 text-zinc-400">
                  <div className="w-6 h-6 bg-red-500/20 border border-red-500 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="line-through">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
