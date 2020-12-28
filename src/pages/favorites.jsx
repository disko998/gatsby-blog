import React from "react"
import { graphql } from "gatsby"

import { AppContext } from "../Providers"
import SEO from "../components/seo"
import { Layout, BlogPosts } from "../components"
import { useFilterPosts } from "../hooks/useFilterPosts"

const Favorites = ({ data, location }) => {
  const { bookmarks } = React.useContext(AppContext)
  const posts = data.allMarkdownRemark.nodes.filter(post =>
    bookmarks.includes(post.id)
  )
  const filteredPosts = useFilterPosts(posts)

  return (
    <Layout location={location}>
      <SEO title="Favorites" />
      <BlogPosts posts={filteredPosts} />
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

export default Favorites
