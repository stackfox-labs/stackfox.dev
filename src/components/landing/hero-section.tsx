import { getDashboardUrl } from "@/lib/dashboard-url"
import { Button } from "@/components/ui/button"
import { LuaCode } from "@/components/ui/lua-code"

const codeExample = `-- Track game events
StackFox.events:track("player_join", {
  userId = tostring(player.UserId),
  username = player.Name,
})

-- Store and retrieve records
StackFox.records:set("players", odId, {
  coins = 100, level = 5,
})

local data = StackFox.records:get("players", odId)`

export function HeroSection() {
  const dashboardUrl = getDashboardUrl()

  return (
    <section id="hero" className="subtle-grid cq-section px-4 py-20 sm:px-6 lg:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="mb-6 text-4xl font-bold text-balance animate-in fade-in duration-1200 md:text-6xl">
              Backend infrastructure for <span className="text-primary">Roblox games.</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg text-muted-foreground text-balance animate-in fade-in duration-1000 delay-150 md:text-xl">
              Track events, store records, and bridge your game data to a hosted backend. One SDK, zero infrastructure.
            </p>

            <div className="flex animate-in fade-in duration-1000 delay-300 flex-col items-start gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-primary/90">
                <a href={dashboardUrl}>Get Started</a>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-zinc-600 bg-transparent px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-[1.02]">
                View Documentation
              </Button>
            </div>
          </div>

          <div className="animate-in fade-in duration-1000 delay-300">
            <div className="border-2 border-foreground bg-zinc-900 shadow-brutal-lg">
              <div className="flex items-center gap-2 border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2 font-mono text-xs text-zinc-400">game.server.lua</span>
              </div>
              <LuaCode code={codeExample} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}