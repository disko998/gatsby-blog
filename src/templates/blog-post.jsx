import React from "react"
import { Link, graphql, navigate } from "gatsby"
import Img, { GatsbyImageFluidProps, GatsbyImageFixedProps } from "gatsby-image"

import { Layout, Tags, Avatar } from "../components"
import SEO from "../components/seo"
import {
  PostHeader,
  Grid,
  Col,
  ReadTime,
  PostDate,
  PostTitle,
  Author,
  CardFooter,
  FeaturedImage,
  Section,
  BlogPost,
  PostNavCard,
  ArrowText,
  PostContainer,
  Thumb,
  PostsNavWrapper,
} from "../components/elements"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Section>
          <Grid>
            <Col flex={1.2}>
              <FeaturedImage
                fadeIn={true}
                fluid={
                  post.frontmatter.thumbnail &&
                  post.frontmatter.thumbnail.childImageSharp.fluid
                }
              />
            </Col>
            <Col>
              <PostHeader>
                <Tags tags={post.frontmatter.tags} />
                <PostTitle itemProp="headline">
                  {post.frontmatter.title}
                </PostTitle>
                <CardFooter>
                  <Avatar src={post.frontmatter.avatar} />
                  <Author>{post.frontmatter.author}</Author>
                  <ReadTime>
                    {post.frontmatter.readTime} read &bull;
                    <PostDate>{` ${post.frontmatter.date}`}</PostDate>
                  </ReadTime>
                </CardFooter>
              </PostHeader>
            </Col>
          </Grid>
        </Section>

        <Section>
          <PostContainer>
            <BlogPost
              id="blogPost"
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />

            <Section>
              <PostsNavWrapper>
                {previous && (
                  <PostNavCard
                    round={!next}
                    onClick={() => navigate(previous.fields.slug)}
                  >
                    <Thumb
                      zIndex={-1}
                      hoverEffect
                      fluid={
                        previous.frontmatter.thumbnail &&
                        previous.frontmatter.thumbnail.childImageSharp.fluid
                      }
                    />
                    <ArrowText>previous post</ArrowText>
                    <h2>{previous.frontmatter.title}</h2>
                  </PostNavCard>
                )}

                {next && (
                  <PostNavCard
                    round={!previous}
                    next
                    onClick={() => navigate(next.fields.slug)}
                  >
                    <Thumb
                      zIndex={-1}
                      hoverEffect
                      fluid={
                        next.frontmatter.thumbnail &&
                        next.frontmatter.thumbnail.childImageSharp.fluid
                      }
                    />
                    <ArrowText next>next post</ArrowText>
                    <h2>{next.frontmatter.title}</h2>
                  </PostNavCard>
                )}
              </PostsNavWrapper>
            </Section>
          </PostContainer>
        </Section>

        <hr />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
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

{
  /* <nav className="blog-post-nav">
<ul
  style={{
	display: `flex`,
	flexWrap: `wrap`,
	justifyContent: `space-between`,
	listStyle: `none`,
	padding: 0,
  }}
>
  <li>
	{previous && (
	  <Link to={previous.fields.slug} rel="prev">
		← {previous.frontmatter.title}
	  </Link>
	)}
  </li>
  <li>
	{next && (
	  <Link to={next.fields.slug} rel="next">
		{next.frontmatter.title} →
	  </Link>
	)}
  </li>
</ul>
</nav> */
}
