import React from "react"
import Fade from "react-reveal/Fade"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Section, Grid, Col, Center } from "../../elements"
import { BlogCard, Pagination } from "../index"

type BlogListProp = {
  posts: PostNode[]
  page?: {
    currentPage: number
    numberOfPages: number
  }
}

const ANIMATION_DELAY = 150

const BlogList: React.FC<BlogListProp> = ({ posts, page }) => {
  const { file } = useStaticQuery(query)

  if (!posts.length) {
    return (
      <Section>
        <Center direction="column">
          <Img fixed={file.childImageSharp?.fixed} />
          <EmptyText>Your list is empty</EmptyText>
        </Center>
      </Section>
    )
  }

  return (
    <>
      <Section>
        <Grid>
          {posts.map((post, index) => (
            <ColumnWrapper key={post.fields.slug}>
              <Fade up delay={ANIMATION_DELAY * index}>
                <BlogCard post={post} />
              </Fade>
            </ColumnWrapper>
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

const EmptyText = styled.h1`
  margin: 1rem 0;
  text-transform: capitalize;
`

const ColumnWrapper = styled(Col)`
  .react-reveal {
    width: 100%;
  }
`

const query = graphql`
  query {
    file(relativePath: { eq: "empty.png" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default BlogList
