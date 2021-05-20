import React from "react"

import { Section, Grid, Col } from "../../elements"
import { Pagination } from "../../shared"
import BlogCard from "./BlogCard"

type BlogListProp = {
  posts: PostNode[]
  page: {
    currentPage: number
    numberOfPages: number
  }
}

const BlogList: React.FC<BlogListProp> = ({ posts, page }) => {
  return (
    <>
      <Section>
        <Grid>
          {posts.map(post => (
            <Col key={post.fields.slug}>
              <BlogCard post={post} />
            </Col>
          ))}
        </Grid>
      </Section>

      {page.numberOfPages > 1 && (
        <Section>
          <Pagination
            currentPage={page.currentPage}
            numberOfPages={page.numberOfPages}
          />
        </Section>
      )}
    </>
  )
}

export default BlogList
