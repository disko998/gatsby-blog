import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO, BlogList } from "../components"

export default function BlogsTagPageTemplate({ pageContext, data }) {
  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <BlogList posts={data.allMarkdownRemark.nodes} />
    </Layout>
  )
}
export const query = graphql`
  query tagPageQuery($tagRegex: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { regex: $tagRegex }, hide: { ne: true } }
      }
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
