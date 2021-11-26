declare type SiteMetadata = {
  title: string
  description: string
  siteUrl: string
  author: {
    name: string
    email: string
  }
  featuredTags: string[]
}

declare type Site = {
  site: {
    siteMetadata: SiteMetadata
  }
}

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
