// How It Works section for StackFox
import { LuaCode } from "@/components/ui/lua-code"
const steps = [
  {
    number: 1,
    title: "Initialize the SDK",
    description: "Add StackFox to your project and call init with your API key. That's it — no schemas, no setup steps.",
    code: 'local StackFox = require(game.ReplicatedStorage.StackFox)\n\nStackFox.init({\n  apiKey = "sf_live_xxxxxxxx",\n})',
  },
  {
    number: 2,
    title: "Track Events",
    description: "Send structured events from anywhere in your game code. Events are stored and visible in the dashboard instantly.",
    code: 'StackFox.events:track("item_purchase", {\n  userId = tostring(player.UserId),\n  item = "sword_01",\n  cost = 100,\n})',
  },
  {
    number: 3,
    title: "Store Records",
    description: "Persist game data in collections with simple key-value operations. Read, write, and delete with one line.",
    code: 'StackFox.records:set("players", odId, {\n  coins = 100, level = 5,\n})\n\nlocal data = StackFox.records:get("players", odId)\nprint(data.coins) -- 100',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-zinc-50 cq-section border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
            How it <span className="text-primary">works.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto">
            Three steps from install to live game data.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step) => (
            <div key={step.number} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={step.number % 2 === 0 ? "md:order-2" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg border-2 border-foreground shadow-brutal-sm">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900">{step.title}</h3>
                </div>
                <p className="text-lg text-zinc-600">{step.description}</p>
              </div>
              <div className={step.number % 2 === 0 ? "md:order-1" : ""}>
                <div className="border-2 border-foreground bg-zinc-900 shadow-brutal-md">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-700 bg-zinc-800">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <LuaCode code={step.code} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
