import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import { Layout, BlogPosts } from "../components"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const urlParams = new URLSearchParams(location.search)
  const searchTerm = urlParams.get("term")

  const filteredPosts = posts.filter(post =>
    searchTerm ? post.frontmatter.tags.includes(searchTerm) : true
  )

  return (
    <Layout location={location}>
      <SEO title="Posts" />
      <BlogPosts posts={filteredPosts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
