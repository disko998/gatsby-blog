const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Require templates
  const blogPostPage = path.resolve(`./src/templates/blog-post-page.jsx`)
  const blogsListPage = path.resolve(`./src/templates/blogs-list-page.jsx`)
  const blogsTagPage = path.resolve(`./src/templates/blogs-tag-page.jsx`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL
  let tags = []
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      // return only unique tags
      tags = [...tags, ...post.frontmatter.tags].filter(
        (value, index, self) => self.indexOf(value) === index
      )

      createPage({
        path: post.fields.slug,
        component: blogPostPage,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  // Create page for each tag group
  tags.forEach(tag => {
    createPage({
      path: `tag/${tag}`,
      component: blogsTagPage,
      context: {
        tag,
        otherTags: tags.filter(t => t !== tag),
      },
    })
  })

  // Blogs Pagination
  const postPerPage = 9
  const numberOfPages = Math.ceil(posts.length / postPerPage)

  Array.from({ length: numberOfPages }).forEach((_, index) => {
    const isFirstPage = index === 0
    const currentPage = index + 1

    if (isFirstPage) return

    createPage({
      path: `page/${currentPage}`,
      component: blogsListPage,
      context: {
        limit: postPerPage,
        skip: index * postPerPage,
        currentPage,
        numberOfPages,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
