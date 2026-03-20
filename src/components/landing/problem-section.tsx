import { AlertTriangle } from "lucide-react"

const painPoints = [
  "Player progression",
  "Inventories",
  "Guild systems",
  "Game economies",
  "Moderation tools",
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-24 bg-foreground cq-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
            Roblox developers shouldn't have to build{" "}
            <span className="text-secondary">backend infrastructure.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
              Many Roblox games require backend systems for things like:
            </p>
            <ul className="space-y-3 mb-8">
              {painPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-zinc-200">
                  <span className="w-1.5 h-1.5 bg-secondary shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
              Building these systems usually requires hosting servers, managing databases, writing APIs, and maintaining deployments.
            </p>
            <div className="border-2 border-zinc-600 bg-zinc-800 p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                <p className="text-zinc-300">
                  For most games, this infrastructure is <span className="text-white font-semibold">unnecessary complexity</span>.
                </p>
              </div>
            </div>
            <p className="text-lg text-zinc-300 mt-6 leading-relaxed">
              StackFox removes that complexity by providing backend services designed specifically for Roblox developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
