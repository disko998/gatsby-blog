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

export default BlogIndex

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
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          author
          description
          image
          tags
          title
          readTime
          avatar {
            childImageSharp {
              fixed(height: 80, width: 80, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
