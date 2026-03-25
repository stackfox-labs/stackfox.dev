import { Link } from "@tanstack/react-router"
import { getDashboardUrl } from "@/lib/dashboard-url"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Events", href: "/docs/events" },
      { label: "Records", href: "/docs/records" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Getting Started", href: "/docs/quick-start" },
      { label: "Status Page", href: "https://stats.uptimerobot.com/kWLH8LRhyj" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
]

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http")
  const isHash = href === "#"

  if (isHash || isExternal) {
    return (
      <a
        href={href}
        className="nav-link-3d -mx-2 block px-2 py-1 text-xs text-zinc-400 transition-all duration-200 hover:text-white sm:text-sm"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      to={href as never}
      className="nav-link-3d -mx-2 block px-2 py-1 text-xs text-zinc-400 transition-all duration-200 hover:text-white sm:text-sm"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  const dashboardUrl = getDashboardUrl()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground py-8 text-white sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-6 sm:mb-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Logo style="white" />
            </div>
            <p className="mb-4 max-w-sm text-sm text-zinc-400 sm:mb-6 sm:text-base">
              StackFox is a data bridge for Roblox games. Track events, store records, and manage your game data through a simple Luau SDK - no backend required.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
              <Button asChild variant="default" size="sm" className="bg-primary text-xs sm:text-sm">
                <a href={dashboardUrl}>Get Started</a>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-xs sm:text-sm">
                <Link to="/docs">View Docs</Link>
              </Button>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="sm:col-span-1">
              <h4 className="mb-3 text-sm font-bold text-white sm:mb-4 sm:text-base">{section.title}</h4>
              <ul className="space-y-1 sm:space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-6 sm:flex-row sm:pt-8">
          <div className="order-2 text-xs text-zinc-400 sm:order-1 sm:text-sm">© 2026 StackFox. All rights reserved.</div>
          <div className="order-1 flex flex-col items-center gap-4 sm:order-2 sm:flex-row sm:gap-6">
            <div className="flex flex-wrap justify-center gap-3 text-xs text-zinc-400 sm:gap-6 sm:text-sm">
              <Link to="/privacy" className="nav-link-3d px-2 py-1 transition-all duration-200 hover:text-white">Privacy</Link>
              <Link to="/terms" className="nav-link-3d px-2 py-1 transition-all duration-200 hover:text-white">Terms</Link>
            </div>
            <Button onClick={scrollToTop} variant="outline" size="sm" className="border-zinc-600 bg-foreground px-2 text-xs text-zinc-300 hover:bg-zinc-700 hover:text-white sm:px-3 sm:text-sm">
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
