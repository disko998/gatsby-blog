import React from "react"
import { PostNode } from "../@types"

import { Section, Grid, Col } from "./elements"
import { PostCard } from "./PostCard"

export const BlogPosts: React.FC<BlogPostsProp> = ({ posts }) => {
  console.log(posts)
  return (
    <Section>
      <Grid>
        {posts.map(post => (
          <Col>
            <PostCard post={post} />
          </Col>
        ))}
      </Grid>
    </Section>
  )
}

type BlogPostsProp = {
  posts: PostNode[]
}
