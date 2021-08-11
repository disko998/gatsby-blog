import React from "react"
import Fade from "react-reveal/Fade"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Section, Grid, Col } from "../../elements"
import { BlogCard, Pagination } from "../index"

type BlogListProp = {
  posts: PostNode[]
  page: {
    currentPage: number
    numberOfPages: number
  }
}

const BlogList: React.FC<BlogListProp> = ({ posts, page }) => {
  const { imageSharp } = useStaticQuery(query)

  if (!posts.length) {
    return (
      <Section>
        <Grid>
          <Col>
            <Img fixed={imageSharp.fixed} />
            <EmptyTitle>No items</EmptyTitle>
          </Col>
        </Grid>
      </Section>
    )
  }

  return (
    <>
      <Section>
        <Grid>
          {posts.map((post, index) => (
            <AnimWrapper key={post.fields.slug} row>
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

const EmptyTitle = styled.h1`
  margin: 30px 0;
`

const query = graphql`
  query {
    imageSharp(id: { eq: "0bab8473-cf96-5084-82d0-22751b9ac237" }) {
      fixed(width: 300, height: 300) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export default BlogList
