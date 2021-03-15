export type PostNode = {
  excerpt: string
  fields: { slug: string }
  frontmatter: {
    date: string
    title: string
    description: string
    readTime: string
    tags?: string[]
    thumbnail: any
  }
  id: string
}
