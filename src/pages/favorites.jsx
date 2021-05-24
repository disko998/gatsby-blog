import React from "react"
import { graphql } from "gatsby"

import { AppContext } from "../Providers"
import { Layout, BlogList, SEO } from "../components"
import { useFilterPosts } from "../hooks/useFilterPosts"

const Favorites = ({ data }) => {
  const { bookmarks } = React.useContext(AppContext)
  const favoritePosts = data.allMarkdownRemark.nodes.filter(post =>
    bookmarks.includes(post.id)
  )
  const filteredPosts = useFilterPosts(favoritePosts)

  return (
    <Layout>
      <SEO title="Favorites" />
      <BlogList posts={filteredPosts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC } #   limit: 20
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

export default Favorites
