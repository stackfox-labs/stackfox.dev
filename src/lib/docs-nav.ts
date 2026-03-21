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
      { title: "Introduction", slug: "introduction" },
      { title: "Quick Start", slug: "quick-start" },
      { title: "API Keys & Secrets", slug: "api-keys" },
    ],
  },
  {
    section: "Events",
    items: [
      { title: "Overview", slug: "events" },
    ],
  },
  {
    section: "Records",
    items: [
      { title: "Overview", slug: "records" },
    ],
  },
]

export function flattenNav(): DocsNavItem[] {
  return docsNav.flatMap((s) => s.items)
}

export function getFirstSlug(): string {
  return docsNav[0]?.items[0]?.slug ?? "introduction"
}
