import React from "react"
import { graphql } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"
import Img from "gatsby-image"
import styled from "styled-components"

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
        content={markdownRemark.html}
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

export const PostHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  width: 100%;
`

export const FeaturedImage = styled(Img)`
  width: 100%;
  max-height: 600px;
  border-radius: 16px;
  filter: brightness(80%);
`

export const PostTitle = styled.h1`
  font-size: ${p => p.theme.spacing.large} !important;
`

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 80, height: 80, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
        }
      }
    }
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
        author
        avatar {
          childImageSharp {
            fixed(height: 90, width: 90, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
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
