import { createFileRoute, redirect } from "@tanstack/react-router"
import { getFirstSlug } from "@/lib/docs-nav"

export const Route = createFileRoute("/docs/")({
  beforeLoad: ({ search }) => {
    throw redirect({
      to: "/docs/$",
      params: { _splat: getFirstSlug() },
      search, // preserve ?frame=1 and any other search params
    })
  },
})
