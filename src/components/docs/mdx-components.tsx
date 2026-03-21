import type { MDXComponents } from "mdx/types"
import { Link } from "@tanstack/react-router"
import { cn } from "@/lib/utils"
import { Callout } from "./callout"
import { Pre } from "./pre"

export function getMdxComponents(extra?: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }) => (
      <h1
        className={cn("mb-4 mt-8 text-2xl font-bold tracking-tight text-zinc-900", className)}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "mb-3 mt-8 border-b border-zinc-200 pb-2 text-lg font-bold text-zinc-900",
          className,
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn("mb-2 mt-6 text-base font-bold text-zinc-900", className)}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className={cn("mb-2 mt-5 text-sm font-bold uppercase tracking-wide text-zinc-700", className)}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p className={cn("mb-4 leading-7 text-zinc-700", className)} {...props} />
    ),
    ul: ({ className, ...props }) => (
      <ul className={cn("mb-4 ml-5 list-disc space-y-1.5 text-zinc-700", className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn("mb-4 ml-5 list-decimal space-y-1.5 text-zinc-700", className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("leading-7", className)} {...props} />
    ),
    a: ({ href = "", className, ...props }) => {
      if (href.startsWith("/")) {
        return (
          <Link
            to={href}
            className={cn(
              "font-medium text-primary underline underline-offset-2 hover:no-underline",
              className,
            )}
            {...(props as object)}
          />
        )
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "font-medium text-primary underline underline-offset-2 hover:no-underline",
            className,
          )}
          {...props}
        />
      )
    },
    // Inline code: no data-language means it's inline (not a fenced block)
    code: ({ className, ...props }) => {
      // Fenced blocks processed by rehype-pretty-code carry data-language
      if ("data-language" in props) {
        return <code className={className} {...props} />
      }
      return (
        <code
          className={cn(
            "rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.875em] text-zinc-800",
            className,
          )}
          {...props}
        />
      )
    },
    pre: Pre,
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn("my-5 border-l-4 border-zinc-300 pl-4 italic text-zinc-600", className)}
        {...props}
      />
    ),
    table: ({ className, ...props }) => (
      <div className="my-5 overflow-x-auto">
        <table className={cn("w-full border-collapse text-sm", className)} {...props} />
      </div>
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "border border-zinc-200 bg-zinc-50 px-3 py-2 text-left text-xs font-bold uppercase tracking-wide text-zinc-600",
          className,
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn("border border-zinc-200 px-3 py-2 text-zinc-700", className)}
        {...props}
      />
    ),
    hr: ({ className, ...props }) => (
      <hr className={cn("my-8 border-zinc-200", className)} {...props} />
    ),
    strong: ({ className, ...props }) => (
      <strong className={cn("font-semibold text-zinc-900", className)} {...props} />
    ),
    // Custom components available in MDX files
    Callout,
    ...extra,
  }
}
