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
  const { file } = useStaticQuery(query)

  if (!posts.length) {
    return (
      <Section>
        <Grid>
          <Col>
            <Img fixed={file.childImageSharp?.fixed} />
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
    file(relativePath: { eq: "mirage-list-is-empty.png" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default BlogList
