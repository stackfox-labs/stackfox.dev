import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { Footer } from "@/components/global/footer"
import { Header } from "@/components/global/header"
import { Card3D } from "@/components/ui/card-3d"
import { Button } from "@/components/ui/button"
import { Accordion3D } from "@/components/ui/accordion-3d"
import { getDashboardUrl } from "@/lib/dashboard-url"
import { CheckCircle, Zap, BookOpen, PenLine, HardDrive } from "lucide-react"

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing | StackFox" },
      {
        name: "description",
        content:
          "StackFox is free to start. Every hosted organization includes free monthly usage. You only pay if you go above the included allowance.",
      },
    ],
  }),
})

// ── Constants ────────────────────────────────────────────────────────────────

const FREE_EVENTS = 250_000
const FREE_READS = 100_000
const FREE_WRITES = 50_000
const FREE_STORAGE_MB = 100

const EVENT_RATE = 0.0000005 // per unit
const READ_RATE = 0.000002 // per unit
const WRITE_RATE = 0.000004 // per unit
const STORAGE_RATE_PER_BYTE = 0.0000000001 // per byte

function calcCost(events: number, reads: number, writes: number, storageMb: number) {
  const storageBytes = storageMb * 1024 * 1024
  const freeStorageBytes = FREE_STORAGE_MB * 1024 * 1024

  const billableEvents = Math.max(0, events - FREE_EVENTS)
  const billableReads = Math.max(0, reads - FREE_READS)
  const billableWrites = Math.max(0, writes - FREE_WRITES)
  const billableBytes = Math.max(0, storageBytes - freeStorageBytes)

  const eventCost = billableEvents * EVENT_RATE
  const readCost = billableReads * READ_RATE
  const writeCost = billableWrites * WRITE_RATE
  const storageCost = billableBytes * STORAGE_RATE_PER_BYTE

  const total = eventCost + readCost + writeCost + storageCost

  return {
    billableEvents,
    billableReads,
    billableWrites,
    billableBytes,
    eventCost,
    readCost,
    writeCost,
    storageCost,
    total,
  }
}

function formatCurrency(value: number): string {
  if (value === 0) return "$0.00"
  if (value < 0.01) return `<$0.01`
  return `$${value.toFixed(2)}`
}

function formatNumber(n: number): string {
  return n.toLocaleString()
}

// ── FAQ data ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    id: "when-pay",
    title: "When do I start paying?",
    content: (
      <p className="text-zinc-600">
        You only pay when your usage exceeds the free monthly allowance. If your organization's Events, Reads, Writes,
        and Storage all stay under the included limits, your monthly bill is exactly $0.
      </p>
    ),
  },
  {
    id: "stay-under",
    title: "What happens if I stay under the allowance?",
    content: (
      <p className="text-zinc-600">
        Nothing happens — you're never charged. The allowance is included automatically for every hosted organization.
        There's no credit card required to get started.
      </p>
    ),
  },
  {
    id: "how-calculated",
    title: "How is usage calculated?",
    content: (
      <p className="text-zinc-600">
        Usage is measured across your hosted organization. Events are counted per ingestion call. Record Reads and Writes
        are counted per operation. Storage is the total bytes stored across all your records. Overage is only charged on
        units above the free allowance.
      </p>
    ),
  },
  {
    id: "resets",
    title: "Does the free usage reset monthly?",
    content: (
      <p className="text-zinc-600">
        Yes. The free monthly allowance resets at the start of each billing period. Unused allowance does not carry
        forward to the next month.
      </p>
    ),
  },
  {
    id: "unexpected-costs",
    title: "Can I end up with unexpected charges?",
    content: (
      <p className="text-zinc-600">
        Charges only ever occur above the included allowance. The overage rates are fixed and published. Most early-stage
        projects will never exceed the free limits. You can use the calculator on this page to estimate costs before you
        commit.
      </p>
    ),
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────

function PricingPage() {
  const dashboardUrl = getDashboardUrl()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection dashboardUrl={dashboardUrl} />
        <IncludedAllowanceSection />
        <OverageTableSection />
        <CalculatorSection />
        <TrustSection dashboardUrl={dashboardUrl} />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection({ dashboardUrl }: { dashboardUrl: string }) {
  return (
    <section className="border-b border-zinc-200 bg-foreground py-16 text-white sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Pay only for what you use.
        </h1>
        <p className="mb-4 max-w-2xl text-lg text-zinc-300 sm:text-xl">
          Every hosted StackFox organization includes a free monthly usage allowance.{" "}
          <span className="text-white font-semibold">You only pay if you go above it.</span>
        </p>
        <p className="mb-8 max-w-2xl text-base text-zinc-400">
          No upfront commitment. No locked features. No surprise bills. Just usage-based pricing.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-primary px-8">
            <a href={dashboardUrl}>Get Started Free</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-zinc-500 bg-transparent text-white hover:bg-zinc-800">
            <a href="#calculator">Estimate My Cost</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

// ── Included Allowance ────────────────────────────────────────────────────────

function IncludedAllowanceSection() {
  const allowances = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      label: "Events",
      value: "250,000",
      unit: "/ month",
      description: "Ingested events from your Roblox game",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      label: "Record Reads",
      value: "100,000",
      unit: "/ month",
      description: "Read operations on stored records",
    },
    {
      icon: <PenLine className="h-6 w-6 text-primary" />,
      label: "Record Writes",
      value: "50,000",
      unit: "/ month",
      description: "Write operations on stored records",
    },
    {
      icon: <HardDrive className="h-6 w-6 text-primary" />,
      label: "Storage",
      value: "100 MB",
      unit: "included",
      description: "Total storage across all records",
    },
  ]

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Included every month. <span className="text-primary">For free.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-600 sm:text-lg">
            Every hosted organization automatically gets this allowance each month. If your usage stays under these
            limits, your bill is{" "}
            <span className="font-semibold text-foreground">$0</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {allowances.map((item) => (
            <Card3D key={item.label} className="p-6 cursor-default">
              <div className="mb-4">{item.icon}</div>
              <div className="mb-1 text-3xl font-bold text-foreground">{item.value}</div>
              <div className="mb-1 text-sm font-medium text-zinc-500">{item.unit}</div>
              <div className="mb-3 text-sm font-semibold text-foreground">{item.label}</div>
              <div className="text-xs text-zinc-500">{item.description}</div>
            </Card3D>
          ))}
        </div>

        <div className="mt-8 border-2 border-zinc-200 bg-zinc-50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
            <p className="text-sm text-zinc-600">
              <span className="font-semibold text-foreground">Allowance resets monthly.</span> If your project stays
              under all four limits, you are never charged. Most early-stage projects will fit comfortably inside the
              free allowance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Overage Table ─────────────────────────────────────────────────────────────

function OverageTableSection() {
  const rows = [
    { label: "Events", normalized: "$0.50", unit: "per 1M events" },
    { label: "Record Reads", normalized: "$2.00", unit: "per 1M reads" },
    { label: "Record Writes", normalized: "$4.00", unit: "per 1M writes" },
    { label: "Storage", normalized: "$0.10", unit: "per GB" },
  ]

  return (
    <section className="bg-zinc-50 py-16 sm:py-20 border-t border-zinc-200">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Pay-as-you-go overages
          </h2>
          <p className="text-base text-zinc-600 sm:text-lg">
            Only applies above the free monthly allowance. You're never charged for usage inside the included limits.
          </p>
        </div>

        <div className="border-2 border-zinc-900">
          <div className="grid grid-cols-3 border-b-2 border-zinc-900 bg-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest text-white">
            <div>Metric</div>
            <div className="text-right">Rate</div>
            <div className="text-right">Unit</div>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 items-center px-6 py-4 ${i < rows.length - 1 ? "border-b border-zinc-200" : ""} hover:bg-white transition-colors`}
            >
              <div className="font-semibold text-foreground">{row.label}</div>
              <div className="text-right text-xl font-bold text-primary">{row.normalized}</div>
              <div className="text-right text-sm text-zinc-500">{row.unit}</div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-zinc-500">
          Overage charges are only billed on usage above your free monthly allowance. All rates are fixed and never change without notice.
        </p>
      </div>
    </section>
  )
}

// ── Snap-point definitions ────────────────────────────────────────────────────

const EVENTS_SNAPS = [0, 250_000, 500_000, 750_000, 1_000_000]
const READS_SNAPS = [0, 100_000, 250_000, 500_000, 1_000_000]
const WRITES_SNAPS = [0, 50_000, 100_000, 250_000, 500_000]
const STORAGE_MB_SNAPS = [0, 100, 250, 500, 1_000]

function fmtShort(n: number): string {
  if (n === 0) return "0"
  if (n >= 1_000_000) return `${n / 1_000_000}M`
  if (n >= 1_000) return `${n / 1_000}K`
  return String(n)
}

function fmtStorageMarker(mb: number): string {
  if (mb === 0) return "0"
  if (mb >= 1_000) return `${mb / 1_000}GB`
  return `${mb}MB`
}

// ── Calculator ────────────────────────────────────────────────────────────────

function CalculatorSection() {
  const [events, setEvents] = useState(250_000)
  const [reads, setReads] = useState(100_000)
  const [writes, setWrites] = useState(50_000)
  const [storageMb, setStorageMb] = useState(100)

  const result = calcCost(events, reads, writes, storageMb)
  const isAllFree = result.total === 0

  const billableMb = result.billableBytes / (1024 * 1024)

  return (
    <section id="calculator" className="bg-white py-16 sm:py-20 border-t border-zinc-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Estimate your monthly cost
          </h2>
          <p className="text-base text-zinc-600 sm:text-lg">
            Drag to your expected monthly usage. The free allowance is applied automatically.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Inputs */}
          <div className="space-y-8">
            <SliderInput
              label="Events"
              value={events}
              onChange={setEvents}
              snapPoints={EVENTS_SNAPS}
              freeLimit={FREE_EVENTS}
              formatDisplay={(v) => formatNumber(v)}
              formatMarker={fmtShort}
            />
            <SliderInput
              label="Record Reads"
              value={reads}
              onChange={setReads}
              snapPoints={READS_SNAPS}
              freeLimit={FREE_READS}
              formatDisplay={(v) => formatNumber(v)}
              formatMarker={fmtShort}
            />
            <SliderInput
              label="Record Writes"
              value={writes}
              onChange={setWrites}
              snapPoints={WRITES_SNAPS}
              freeLimit={FREE_WRITES}
              formatDisplay={(v) => formatNumber(v)}
              formatMarker={fmtShort}
            />
            <SliderInput
              label="Storage"
              value={storageMb}
              onChange={setStorageMb}
              snapPoints={STORAGE_MB_SNAPS}
              freeLimit={FREE_STORAGE_MB}
              formatDisplay={(v) => `${formatNumber(v)} MB`}
              formatMarker={fmtStorageMarker}
            />
          </div>

          {/* Result */}
          <div className="flex flex-col gap-4">
            <div className={`border-2 p-6 ${isAllFree ? "border-green-600 bg-green-50" : "border-zinc-900 bg-white"}`}>
              <div className="mb-1 text-sm font-semibold uppercase tracking-widest text-zinc-500">
                Estimated monthly total
              </div>
              <div className={`mb-2 text-5xl font-bold ${isAllFree ? "text-green-700" : "text-foreground"}`}>
                {isAllFree ? "$0.00" : formatCurrency(result.total)}
              </div>
              {isAllFree ? (
                <div className="flex items-center gap-2 text-sm font-semibold text-green-700">
                  <CheckCircle className="h-4 w-4" />
                  All usage included in free allowance
                </div>
              ) : (
                <div className="text-sm text-zinc-500">
                  Overage charges only — free allowance already deducted
                </div>
              )}
            </div>

            {/* Breakdown */}
            <div className="border-2 border-zinc-200 bg-zinc-50 p-5">
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
                Cost Breakdown
              </div>
              <div className="space-y-3">
                <BreakdownRow
                  label="Events"
                  total={events}
                  free={Math.min(events, FREE_EVENTS)}
                  billed={result.billableEvents}
                  cost={result.eventCost}
                  unit="events"
                />
                <BreakdownRow
                  label="Reads"
                  total={reads}
                  free={Math.min(reads, FREE_READS)}
                  billed={result.billableReads}
                  cost={result.readCost}
                  unit="reads"
                />
                <BreakdownRow
                  label="Writes"
                  total={writes}
                  free={Math.min(writes, FREE_WRITES)}
                  billed={result.billableWrites}
                  cost={result.writeCost}
                  unit="writes"
                />
                <BreakdownRow
                  label="Storage"
                  total={storageMb}
                  free={Math.min(storageMb, FREE_STORAGE_MB)}
                  billed={Number(billableMb.toFixed(2))}
                  cost={result.storageCost}
                  unit="MB"
                />
              </div>
              <div className="mt-4 border-t border-zinc-300 pt-4 flex justify-between items-center">
                <span className="font-bold text-foreground">Monthly estimate</span>
                <span className={`text-xl font-bold ${isAllFree ? "text-green-700" : "text-foreground"}`}>
                  {isAllFree ? "$0.00" : formatCurrency(result.total)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface SliderInputProps {
  label: string
  value: number
  onChange: (v: number) => void
  snapPoints: number[]
  freeLimit: number
  formatDisplay: (v: number) => string
  formatMarker: (v: number) => string
}

function SliderInput({ label, value, onChange, snapPoints, freeLimit, formatDisplay, formatMarker }: SliderInputProps) {
  const lastIdx = snapPoints.length - 1
  const freeIndex = snapPoints.findIndex((p) => p >= freeLimit)
  const currentIndex = snapPoints.reduce(
    (closest, point, i) =>
      Math.abs(point - value) < Math.abs(snapPoints[closest] - value) ? i : closest,
    0,
  )

  const freePct = (freeIndex / lastIdx) * 100
  const currentPct = (currentIndex / lastIdx) * 100
  const isFree = value <= freeLimit

  // Track gradient: green for free zone, amber for overage (not alarming — overage is normal)
  const trackBg = isFree
    ? `linear-gradient(to right,
        #16a34a 0%, #16a34a ${currentPct}%,
        rgba(22,163,74,0.18) ${currentPct}%, rgba(22,163,74,0.18) ${freePct}%,
        #e4e4e7 ${freePct}%, #e4e4e7 100%)`
    : `linear-gradient(to right,
        #16a34a 0%, #16a34a ${freePct}%,
        #f59e0b ${freePct}%, #f59e0b ${currentPct}%,
        #e4e4e7 ${currentPct}%, #e4e4e7 100%)`

  return (
    <div>
      {/* Label row */}
      <div className="mb-3 flex items-center justify-between">
        <label className="text-sm font-bold text-foreground">{label}</label>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-foreground">{formatDisplay(value)}</span>
          {isFree ? (
            <span className="border-2 border-green-600 bg-green-50 px-1.5 py-0.5 text-xs font-bold text-green-700">
              included
            </span>
          ) : (
            <span className="border-2 border-amber-500 bg-amber-50 px-1.5 py-0.5 text-xs font-bold text-amber-700">
              billed
            </span>
          )}
        </div>
      </div>

      {/* Slider */}
      <input
        type="range"
        min={0}
        max={lastIdx}
        step={1}
        value={currentIndex}
        onChange={(e) => onChange(snapPoints[Number(e.target.value)])}
        className="slider-brutal"
        style={{ background: trackBg }}
      />

      {/* Markers — absolutely positioned to match thumb travel distance */}
      <div className="relative mt-2 h-8">
        {snapPoints.map((point, i) => {
          const isFreeMarker = point === freeLimit
          const isPassed = currentIndex >= i
          const isOveragePassed = isPassed && point > freeLimit

          return (
            <button
              key={i}
              type="button"
              onClick={() => onChange(point)}
              className="absolute flex -translate-x-1/2 flex-col items-center gap-0.5 group"
              style={{ left: `calc(9px + ${i / lastIdx} * (100% - 18px))` }}
            >
              {/* Tick */}
              <div
                className={`w-px h-2.5 transition-colors ${
                  isFreeMarker
                    ? "bg-green-600"
                    : isOveragePassed
                      ? "bg-amber-500"
                      : isPassed
                        ? "bg-green-600"
                        : "bg-zinc-300"
                }`}
              />
              {/* Label */}
              <span
                className={`text-xs font-semibold leading-none transition-colors group-hover:text-foreground ${
                  isFreeMarker
                    ? "text-green-700"
                    : isOveragePassed
                      ? "text-amber-600"
                      : isPassed
                        ? "text-zinc-700"
                        : "text-zinc-400"
                }`}
              >
                {formatMarker(point)}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

interface BreakdownRowProps {
  label: string
  total: number
  free: number
  billed: number
  cost: number
  unit: string
}

function BreakdownRow({ label, total, free, billed, cost, unit }: BreakdownRowProps) {
  const isFullyFree = billed === 0

  return (
    <div className="text-xs">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-foreground">{label}</span>
        <span className={`font-bold ${isFullyFree ? "text-green-600" : "text-foreground"}`}>
          {isFullyFree ? "Included" : formatCurrency(cost)}
        </span>
      </div>
      <div className="mt-0.5 text-zinc-500">
        {formatNumber(total)} {unit} total
        {" · "}
        {formatNumber(free)} free
        {billed > 0 && (
          <>
            {" · "}
            <span className="text-amber-600 font-medium">{formatNumber(billed)} billed</span>
          </>
        )}
      </div>
    </div>
  )
}

// ── Trust ─────────────────────────────────────────────────────────────────────

function TrustSection({ dashboardUrl }: { dashboardUrl: string }) {
  const points = [
    {
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
      title: "Free to start",
      body: "No credit card required. Start building immediately. Your first bill is $0 if you stay under the included allowance.",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
      title: "Transparent pricing",
      body: "All rates are published and fixed. There are no hidden fees, no seat costs, and no locked features.",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
      title: "Predictable as you grow",
      body: "Usage-based pricing means your costs scale linearly with your game's activity. No pricing cliffs or tier jumps.",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
      title: "No charges under the allowance",
      body: "The free monthly allowance is real — not a trial. Every hosted organization gets it automatically, every month.",
    },
  ]

  return (
    <section className="bg-zinc-50 border-t border-zinc-200 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Safe to adopt. Easy to trust.
          </h2>
          <p className="text-base text-zinc-600 sm:text-lg">
            StackFox is designed to be the last thing you worry about — not the first.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {points.map((pt) => (
            <div key={pt.title} className="flex gap-4 border-2 border-zinc-200 bg-white p-5">
              <div className="mt-0.5 shrink-0">{pt.icon}</div>
              <div>
                <div className="mb-1 font-bold text-foreground">{pt.title}</div>
                <div className="text-sm text-zinc-600">{pt.body}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" className="bg-primary px-10">
            <a href={dashboardUrl}>Start for Free</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

function FaqSection() {
  return (
    <section className="bg-white border-t border-zinc-200 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Common questions
          </h2>
        </div>
        <Accordion3D items={faqItems} allowMultiple />
        <div className="mt-8 text-center text-sm text-zinc-500">
          More questions?{" "}
          <a href="mailto:hello@stackfox.dev" className="text-primary font-semibold hover:underline">
            hello@stackfox.dev
          </a>
        </div>
      </div>
    </section>
  )
}
