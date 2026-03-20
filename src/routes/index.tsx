import { createFileRoute } from "@tanstack/react-router"
import { Footer } from "@/components/global/footer"
import { Header } from "@/components/global/header"
import { HeroSection } from "@/components/landing/hero-section"
import { ProductsSection } from "@/components/landing/products-section"
import { PlatformSection } from "@/components/landing/platform-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { WhyStackFoxSection } from "@/components/landing/why-stackfox-section"
import { CTASection } from "@/components/landing/cta-section"

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      {
        title: "StackFox | Connect Roblox to the rest of your stack",
      },
      {
        name: "description",
        content:
          "StackFox is a data bridge for Roblox games. Track events, store records, and manage game data through a simple Luau SDK — no backend required.",
      },
    ],
  }),
})

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <PlatformSection />
        <HowItWorksSection />
        <WhyStackFoxSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
