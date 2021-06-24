import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO, BlogList } from "../components"

export default function BlogListPageTemplate({ pageContext, data }) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <SEO title={`Page ${pageContext.currentPage}`} />
      <BlogList posts={posts} page={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query blogListPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
