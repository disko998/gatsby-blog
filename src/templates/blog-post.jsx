import React from "react"
import { graphql } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"

import {
  Layout,
  TagsList,
  SEO,
  PostsNavigation,
  SocialShare,
} from "../components"
import {
  PostHeader,
  Grid,
  Col,
  FeaturedImage,
  Section,
  BlogPost,
  PostContainer,
  PostTitle,
} from "../components/elements"
import {
  ReadTime,
  PostDate,
  CardFooter,
} from "../components/widgets/blog/BlogCard"

const BlogPostTemplate = ({ data, location }) => {
  const { previous, next, markdownRemark } = data
  const { description, title, readTime, date, tags, thumbnail } =
    markdownRemark.frontmatter || {}

  return (
    <Layout location={location}>
      <SEO title={title} description={description || markdownRemark.excerpt} />

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        {/* Header */}
        <Section>
          <Grid>
            <Col flex={1.2}>
              <FeaturedImage
                fadeIn={true}
                fluid={thumbnail?.childImageSharp.fluid}
              />
            </Col>
            <Col>
              <PostHeader>
                <ReadTime>
                  {readTime} read &bull;
                  <PostDate>{` ${date}`}</PostDate>
                </ReadTime>

                <PostTitle itemProp="headline">{title}</PostTitle>

                <CardFooter>
                  <TagsList tags={tags} />
                </CardFooter>
              </PostHeader>
            </Col>
          </Grid>
        </Section>

        {/* Content */}
        <Section>
          <PostContainer>
            <BlogPost
              id="blogPost"
              dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
              itemProp="articleBody"
            />

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
        </Section>
      </article>
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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        author
        readTime
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

export default BlogPostTemplate
