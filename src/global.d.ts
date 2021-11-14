declare type PostNode = {
  excerpt: string
  fields: { slug: string; readingTime: { text } }
  frontmatter: Post
  id: string
}

declare type Post = {
  date: string
  title: string
  description: string
  readTime: string
  tags?: string[]
  thumbnail: any
}
