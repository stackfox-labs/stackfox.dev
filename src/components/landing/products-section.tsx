import { useState } from "react"
import { Database, BarChart3, ToggleLeft, Trophy } from "lucide-react"
import { LuaCode } from "@/components/ui/lua-code"
import { cn } from "@/lib/utils"

const products = [
  {
    id: "events",
    name: "Events",
    tagline: "Send structured game events to external systems.",
    description:
      "Track game activity from anywhere in your code and send it outside Roblox. Purchases, progression, moderation actions, economy changes — all captured and visible in your dashboard.",
    Icon: BarChart3,
    status: "available" as const,
    features: [
      "Track any game event with a single call",
      "Structured payloads with automatic timestamps",
      "Real-time event stream visible in the dashboard",
      "Power analytics, dashboards, and automations",
    ],
    code: `-- Track events from anywhere in your game
StackFox.events:track("player_join", {
  userId = tostring(player.UserId),
  username = player.Name,
  region = "us-east",
})

StackFox.events:track("item_purchase", {
  userId = tostring(player.UserId),
  item = "sword_01",
  cost = 100,
})`,
    filename: "Events.lua",
  },
  {
    id: "records",
    name: "Records",
    tagline: "External records your game and outside systems share.",
    description:
      "Read and write structured records that live outside Roblox. Power player profiles for websites, moderation tools, admin panels, dashboards, and anything else that needs access to your game data.",
    Icon: Database,
    status: "available" as const,
    features: [
      "Collection-based key-value records",
      "Simple get, set, delete operations",
      "Accessible from outside Roblox",
      "Browse and inspect records in the dashboard",
    ],
    code: `-- Write a player profile
local playerId = tostring(player.UserId)
StackFox.records:set("players", playerId, {
  username = player.Name,
  coins = 100,
  level = 1,
})

-- Read it back
local data = StackFox.records:get("players", playerId)
print(data.coins) -- 100

-- Delete it
StackFox.records:delete("players", playerId)`,
    filename: "Records.lua",
  },
  {
    id: "feature-flags",
    name: "Feature Flags",
    tagline: "Ship features safely, control them remotely.",
    description:
      "Enable or disable gameplay features dynamically without pushing a game update. Roll out changes gradually or target specific player groups.",
    Icon: ToggleLeft,
    status: "soon" as const,
    features: [
      "Toggle features without game updates",
      "Percentage-based rollouts",
      "Player group and beta tester targeting",
      "Instant kill-switch for live incidents",
    ],
    code: `local flags = StackFox.flags

-- Global flag check
if flags:enabled("double_xp_weekend") then
  xp = xp * 2
end

-- Targeted rollout
if flags:enabledFor("beta_ui", player.UserId) then
  -- show new inventory UI
end`,
    filename: "GameLoop.lua",
  },
  {
    id: "leaderboards",
    name: "Leaderboards",
    tagline: "Global and seasonal rankings, fully hosted.",
    description:
      "Manage global and seasonal leaderboards for your game. Real-time rankings, top-N queries, and scheduled resets — all hosted by StackFox.",
    Icon: Trophy,
    status: "soon" as const,
    features: [
      "Global and per-game leaderboards",
      "Seasonal resets on a configurable schedule",
      "Real-time rank lookups",
      "Paginated top-N queries",
    ],
    code: `local boards = StackFox.leaderboards

-- Submit a score at end of match
boards:submit("season_1_coins", {
  playerId = player.UserId,
  score    = totalCoins,
})

-- Fetch the top 10 for the UI
local top10 = boards:top("season_1_coins", 10)`,
    filename: "Leaderboard.lua",
  },
]

export function ProductsSection() {
  const [activeId, setActiveId] = useState("events")
  const product = products.find((p) => p.id === activeId)!

  return (
    <section id="products" className="py-20 md:py-24 bg-zinc-50 cq-section border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
            The platform for Roblox game data.
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto">
            StackFox gives your game a bridge to the outside world — events to send, records to sync, all through the same Luau SDK.
          </p>
        </div>

        <div className="border-2 border-foreground shadow-brutal-lg overflow-hidden">
          {/* Tab bar */}
          <div className="flex overflow-x-auto border-b-2 border-foreground bg-zinc-900">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={cn(
                  "flex items-center gap-2.5 px-5 py-4 text-sm font-semibold whitespace-nowrap transition-colors border-r-2 border-zinc-700 last:border-r-0 shrink-0 cursor-pointer",
                  activeId === p.id
                    ? "bg-white text-zinc-900 border-b-2 border-b-white -mb-px"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800",
                )}
              >
                <p.Icon className="w-4 h-4 shrink-0" />
                {p.name}
                {p.status === "soon" && (
                  <span className="text-[10px] font-bold text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded hidden sm:inline">
                    SOON
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Left: description */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <product.Icon className="w-6 h-6 text-primary shrink-0" />
                  <h3 className="text-2xl font-bold text-zinc-900">{product.name}</h3>
                  {product.status === "soon" && (
                    <span className="text-xs font-bold bg-zinc-100 text-zinc-500 border border-zinc-300 px-2 py-0.5">
                      Coming soon
                    </span>
                  )}
                </div>

                <p className="text-lg font-semibold text-zinc-800 mb-3">{product.tagline}</p>
                <p className="text-zinc-600 mb-8 leading-relaxed">{product.description}</p>

                <ul className="space-y-3">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-zinc-700">
                      <div className="w-5 h-5 bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: code example */}
              <div className="border-2 border-foreground bg-zinc-900 shadow-brutal-md">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-700 bg-zinc-800">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-zinc-400 font-mono">{product.filename}</span>
                </div>
                <LuaCode code={product.code} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
