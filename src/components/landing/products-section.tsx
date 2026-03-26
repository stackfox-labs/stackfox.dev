import { useState } from "react"
import { Database, BarChart3, Zap, Globe, MessageSquare, Pencil, Plus } from "lucide-react"
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
    id: "flows",
    name: "Flows",
    tagline: "Trigger actions from your events and records.",
    description:
      "React to your game data instantly. When something happens in your game, Flows fires automatically — sending webhooks, posting to Discord, or updating records — without touching your game code.",
    Icon: Zap,
    status: "soon" as const,
    features: [
      "Trigger on any event or record update",
      "Optional conditions to filter when flows run",
      "Send webhooks, post to Discord, or write records",
      "Async execution with automatic retries",
    ],
    code: null,
    filename: null,
  },
]

function FlowsPanel() {
  return (
    <div className="border-2 border-foreground shadow-brutal-md overflow-hidden">
      {/* Page header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 bg-white">
        <div>
          <p className="text-sm font-bold text-zinc-900">Flows</p>
          <p className="text-[11px] text-zinc-500 mt-0.5">Automate actions from your game data</p>
        </div>
        <button
          type="button"
          className="flex items-center gap-1.5 border border-zinc-200 bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-700"
        >
          <Plus className="h-3 w-3" />
          New Flow
        </button>
      </div>

      {/* Section header */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-200 bg-zinc-50">
        <Zap className="h-3.5 w-3.5 text-zinc-400" />
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Active Flows</p>
        <span className="ml-auto text-xs text-zinc-400">3 flows</span>
      </div>

      {/* Flow rows */}
      <div className="divide-y divide-zinc-100 bg-white">

        {/* Flow 1 */}
        <div className="p-4">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="border border-primary/30 bg-red-50 px-2 py-0.5 text-[11px] font-bold text-primary shrink-0">
              Event: purchase
            </span>
            <span className="text-sm font-medium text-zinc-800">High value purchase alert</span>
            <div className="ml-auto flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5 text-zinc-400">
                <Globe className="h-3 w-3" />
                <MessageSquare className="h-3 w-3" />
                <Pencil className="h-3 w-3" />
              </div>
              <span className="flex items-center gap-1 text-[11px] font-medium text-green-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                Enabled
              </span>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="text-[10px] text-zinc-400">when</span>
            <span className="border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">
              price &gt; 100
            </span>
          </div>
        </div>

        {/* Flow 2 */}
        <div className="p-4">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="border border-primary/30 bg-red-50 px-2 py-0.5 text-[11px] font-bold text-primary shrink-0">
              Event: player_join
            </span>
            <span className="text-sm font-medium text-zinc-800">Discord join log</span>
            <div className="ml-auto flex items-center gap-3 shrink-0">
              <MessageSquare className="h-3 w-3 text-zinc-400" />
              <span className="flex items-center gap-1 text-[11px] font-medium text-green-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                Enabled
              </span>
            </div>
          </div>
        </div>

        {/* Flow 3 — disabled */}
        <div className="p-4">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] font-bold text-zinc-400 shrink-0">
              Record: profiles
            </span>
            <span className="text-sm font-medium text-zinc-400">Weekend XP boost</span>
            <div className="ml-auto flex items-center gap-3 shrink-0">
              <Pencil className="h-3 w-3 text-zinc-300" />
              <span className="flex items-center gap-1 text-[11px] font-medium text-zinc-400">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0" />
                Disabled
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

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
                  "flex items-center gap-2.5 px-5 py-4 text-sm font-semibold whitespace-nowrap transition-colors border-r-2 border-zinc-700 shrink-0 cursor-pointer",
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

              {/* Right: code example or flows panel */}
              {product.id === "flows" ? (
                <FlowsPanel />
              ) : (
                <div className="border-2 border-foreground bg-zinc-900 shadow-brutal-md">
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-700 bg-zinc-800">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-zinc-400 font-mono">{product.filename}</span>
                  </div>
                  <LuaCode code={product.code!} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
