import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import { Layout, BlogList } from "../components"
import { useFilterPosts } from "../hooks/useFilterPosts"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const filteredPosts = useFilterPosts(posts)

  return (
    <Layout location={location}>
      <SEO title="Posts" />
      <BlogList posts={filteredPosts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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

export default BlogIndex
