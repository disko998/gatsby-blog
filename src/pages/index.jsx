import React from "react"
import { graphql, StaticQuery } from "gatsby"

import { Layout, BlogList, SEO } from "../components"

const POST_PER_PAGE = 9

const Blog = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Blogs" />
      <StaticQuery
        query={pageQuery}
        render={data => (
          <BlogList
            posts={data.allMarkdownRemark.nodes}
            page={{
              currentPage: 1,
              numberOfPages: Math.ceil(
                data.allMarkdownRemark.totalCount / POST_PER_PAGE
              ),
            }}
          />
        )}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 9
    ) {
      totalCount
      nodes {
        excerpt
        id
        fields {
          slug
          readingTime {
            text
          }
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          author
          description
          tags
          title
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 1300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default Blog
