import React from "react"
import { graphql, navigate } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"

import {
  Layout,
  BlogPost,
  SEO,
  PostsNavigation,
  SocialShare,
} from "../components"
import { Section, PostContainer } from "../components/elements"

const BlogPostPage = ({ data, location }) => {
  const { previous, next, markdownRemark } = data
  const { description, title, date, tags, thumbnail } =
    markdownRemark.frontmatter || {}

  const onTagClick = (e, tag) => {
    e.stopPropagation()
    navigate(`/tag/${tag}`)
  }

  return (
    <Layout>
      <SEO title={title} description={description || markdownRemark.excerpt} />

      <BlogPost
        date={date}
        tags={tags}
        thumbnail={thumbnail?.childImageSharp.fluid}
        title={title}
        readingTime={markdownRemark.fields.readingTime.text}
        description={description}
        html={markdownRemark.html}
        onTagClick={onTagClick}
      />

      <PostContainer>
        <Section>
          <SocialShare
            headerTitle="Share this article"
            title={title}
            description={description}
          />
        </Section>

        <Section>
          <PostsNavigation previous={previous} next={next} />
        </Section>

        <Section>
          <Disqus
            config={{
              url: location.href,
              identifier: markdownRemark.id,
              title: title,
            }}
          />
        </Section>
      </PostContainer>

      <hr />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default BlogPostPage
