import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO, BlogList } from "../components"

export default function TagPageTemplate({ pageContext, data }) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <BlogList posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query tagPageQuery($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
