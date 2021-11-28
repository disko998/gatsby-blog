import React from "react"
import { graphql, StaticQuery } from "gatsby"

import { Layout, BlogList, SEO } from "../components"

const POST_PER_PAGE = process.env.POST_PER_PAGE

const BlogListPage = () => {
  return (
    <Layout>
      <SEO title="Blogs" />

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
      filter: { frontmatter: { hide: { ne: true } } }
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

export default BlogListPage
