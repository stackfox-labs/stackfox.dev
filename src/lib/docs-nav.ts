export interface DocsNavItem {
  title: string
  slug: string
}

export interface DocsNavSection {
  section: string
  items: DocsNavItem[]
}

export const docsNav: DocsNavSection[] = [
  {
    section: "Getting Started",
    items: [
      { title: "Introduction", slug: "getting-started/introduction" },
      { title: "Quick Start", slug: "getting-started/quick-start" },
      { title: "API Keys & Secrets", slug: "getting-started/api-keys" },
    ],
  },
  {
    section: "Dashboard",
    items: [
      { title: "Organizations", slug: "dashboard/organizations" },
      { title: "Project Settings", slug: "dashboard/project-settings" },
      { title: "Account Settings", slug: "dashboard/account-settings" },
    ],
  },
  {
    section: "Events",
    items: [
      { title: "Overview", slug: "events/overview" },
    ],
  },
  {
    section: "Records",
    items: [
      { title: "Overview", slug: "records/overview" },
    ],
  },
  {
    section: "Workflows",
    items: [
      { title: "Overview", slug: "workflows/overview" },
      { title: "Building Flows", slug: "workflows/building-flows" },
      { title: "Connections", slug: "workflows/connections" },
    ],
  },
  {
    section: "Luau SDK",
    items: [
      { title: "Overview", slug: "sdk/luau/overview" },
      { title: "Configuration", slug: "sdk/luau/configuration" },
      { title: "Events", slug: "sdk/luau/events" },
      { title: "Records", slug: "sdk/luau/records" },
    ],
  },
]

export function flattenNav(): DocsNavItem[] {
  return docsNav.flatMap((s) => s.items)
}

export function getFirstSlug(): string {
  return docsNav[0]?.items[0]?.slug ?? "getting-started/introduction"
}
