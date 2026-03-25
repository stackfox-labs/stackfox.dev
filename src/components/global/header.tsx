import { Link } from "@tanstack/react-router"
import { LayoutDashboardIcon } from "lucide-react"
import { getDashboardUrl } from "@/lib/dashboard-url"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

export function Header() {
  const dashboardUrl = getDashboardUrl()

  return (
    <header className="sticky top-0 z-50 border-b-2 border-zinc-900 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <nav className="hidden items-center gap-1 sm:flex">
          <Link to="/" className="flex items-center space-x-2 mr-6">
            <Logo />
          </Link>
          <Link to="/docs" className="nav-link-3d px-3 py-1.5 text-sm font-medium text-zinc-800 transition-colors">
            Docs
          </Link>
          <Link to="/pricing" className="nav-link-3d px-3 py-1.5 text-sm font-medium text-zinc-800 transition-colors">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="sm">
            <a href={dashboardUrl}>
              <LayoutDashboardIcon className="h-4 w-4" />
              Dashboard
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}