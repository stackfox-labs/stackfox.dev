declare module "*.mdx" {
  import type { MDXComponents } from "mdx/types"

  export interface DocsFrontmatter {
    title: string
    description?: string
    section?: string
    order?: number
  }

  export const frontmatter: DocsFrontmatter

  export default function MDXContent(props: {
    components?: MDXComponents
  }): React.JSX.Element
}
