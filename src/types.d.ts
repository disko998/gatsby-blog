type PostNode = {
  excerpt: string
  fields: { slug: string; readingTime: { text } }
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
