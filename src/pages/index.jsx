import React from "react"
import { graphql, StaticQuery } from "gatsby"

import { Layout, BlogList, SEO } from "../components"

const POST_PER_PAGE = process.env.POST_PER_PAGE

const Blog = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <StaticQuery
        query={pageQuery}
        render={data => {
          const { nodes, totalCount } = data.allMarkdownRemark

          return (
            <BlogList
              posts={nodes}
              page={{
                currentPage: 1,
                numberOfPages: Math.ceil(totalCount / POST_PER_PAGE),
              }}
            />
          )
        }}
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
