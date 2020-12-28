// import { Props } from "gatsby-plugin-sharp"

export type PostNode = {
  excerpt: string
  fields: { slug: string }
  frontmatter: {
    date: string
    title: string
    description: string
    author: string
    readTime: string
    tags?: string[]
    thumbnail: any
    avatar: any
  }
  id: string
}
