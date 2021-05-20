import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO, BlogList } from "../components"

export default function BlogListTemplate({ pageContext, data }) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <SEO title="Blogs" />
      <BlogList posts={posts} page={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
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
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          author
          description
          tags
          title
          readTime
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
