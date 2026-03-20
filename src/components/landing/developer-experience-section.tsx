import { LuaCode } from "@/components/ui/lua-code"

const codeExample = `StackFox.events:track("player_join", {
  userId = tostring(player.UserId),
  username = player.Name,
})

StackFox.records:set("players", odId, {
  username = player.Name,
  coins = 0,
})`

export function DeveloperExperienceSection() {
  return (
    <section
      id="developer-experience"
      className="py-20 md:py-24 bg-white cq-section border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
              One SDK for the{" "}
              <span className="text-primary">StackFox platform.</span>
            </h2>
            <p className="text-lg text-zinc-600 mb-4">
              StackFox services are accessed through a single Luau SDK.
            </p>
            <p className="text-lg text-zinc-600">
              Each service follows the same structure and integrates naturally
              into Roblox game code.
            </p>
          </div>

          <div className="border-2 border-foreground bg-zinc-900 shadow-brutal-lg">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-700 bg-zinc-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-zinc-400 font-mono">
                game.server.lua
              </span>
            </div>
            <LuaCode code={codeExample} />
          </div>
        </div>
      </div>
    </section>
  )
}
