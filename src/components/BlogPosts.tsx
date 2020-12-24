import React from "react"

import { PostNode } from "../@types"
import { Section, Grid, Col } from "./elements"
import { BlogCard } from "./BlogCard"

export const BlogPosts: React.FC<BlogPostsProp> = ({ posts }) => {
  return (
    <Section>
      <Grid>
        {posts.map(post => (
          <Col key={post.fields.slug}>
            <BlogCard post={post} />
          </Col>
        ))}
      </Grid>
    </Section>
  )
}

type BlogPostsProp = {
  posts: PostNode[]
}
