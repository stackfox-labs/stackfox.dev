import { createFileRoute, notFound } from "@tanstack/react-router"
import type { DocsFrontmatter } from "*.mdx"
import { getMdxComponents } from "@/components/docs/mdx-components"

// All docs MDX files imported eagerly so they work on both server and client
const docModules = import.meta.glob<{
  default: React.ComponentType<{ components?: Record<string, unknown> }>
  frontmatter: DocsFrontmatter
}>("../content/docs/*.mdx", { eager: true })

function getDoc(slug: string) {
  const key = `../content/docs/${slug}.mdx`
  return docModules[key] ?? null
}

export const Route = createFileRoute("/docs/$slug")({
  loader: ({ params }) => {
    const mod = getDoc(params.slug)
    if (!mod) throw notFound()
    return { frontmatter: mod.frontmatter }
  },
  component: DocPage,
  notFoundComponent: DocNotFound,
})

function DocPage() {
  const { slug } = Route.useParams()
  const { frontmatter } = Route.useLoaderData()
  const mod = getDoc(slug)
  if (!mod) return <DocNotFound />
  const MDXContent = mod.default

  return (
    <article className="w-full px-10 py-10">
      {frontmatter.description && (
        <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
          {frontmatter.section}
        </p>
      )}
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900">{frontmatter.title}</h1>
      {frontmatter.description && (
        <p className="mb-8 text-base text-zinc-500">{frontmatter.description}</p>
      )}
      <hr className="mb-8 border-zinc-200" />
      <div>
        <MDXContent components={getMdxComponents() as Record<string, unknown>} />
      </div>
    </article>
  )
}

function DocNotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-24 text-center">
      <p className="text-sm font-semibold text-zinc-900">Page not found</p>
      <p className="mt-1 text-xs text-zinc-500">
        This doc doesn&apos;t exist yet.
      </p>
    </div>
  )
}
