import React from "react"

import { Section, Grid, Col } from "../../elements"
import BlogCard from "./BlogCard"

type BlogListProp = {
  posts: PostNode[]
}

const BlogList: React.FC<BlogListProp> = ({ posts }) => {
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

export default BlogList
