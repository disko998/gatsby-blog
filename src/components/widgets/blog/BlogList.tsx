import React from "react"
import Fade from "react-reveal/Fade"
import styled from "styled-components"

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
          {posts.map((post, index) => (
            <AnimWrapper key={post.fields.slug}>
              <Fade up delay={150 * index}>
                <BlogCard post={post} />
              </Fade>
            </AnimWrapper>
          ))}
        </Grid>
      </Section>

      {page?.numberOfPages > 1 && (
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

const AnimWrapper = styled(Col)`
  .react-reveal {
    flex: 1;
  }
`

export default BlogList
