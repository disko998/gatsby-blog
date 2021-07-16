import React from "react"
import Img, { FluidObject, GatsbyImageFluidProps } from "gatsby-image"
import styled from "styled-components"

import { Grid, Col, Section, PostContainer } from "../../elements/layout"
import DateAndReadTime from "../../shared/DateAndReadTime"
import TagsList from "../TagsList"

// type BlogPostProps = {
//   thumbnail: FluidObject
//   tags: string[]
//   readingTime: string
//   date: string
//   title: string
//   content: string
//   description?: string
//   onTagClick: (e: any, tag: string) => void
// }

const BlogPost = ({
  thumbnail,
  tags,
  readingTime,
  date,
  title,
  body,
  html,
  onTagClick,
}) => {
  return (
    <article itemScope itemType="http://schema.org/Article">
      <Section>
        <Grid>
          <Col flex={1.2}>
            <FeaturedImage fadeIn={true} fluid={thumbnail} />
          </Col>
          <Col>
            <Header>
              <DateAndReadTime readTime={readingTime} date={date} />
              <Title itemProp="headline">{title}</Title>
              <TagsList tags={tags} onClick={onTagClick} />
            </Header>
          </Col>
        </Grid>
      </Section>

      <Section>
        <PostContainer>
          {html ? (
            <BlogContent
              dangerouslySetInnerHTML={{ __html: content }}
              itemProp="articleBody"
            />
          ) : (
            <BlogContent itemProp="articleBody">{body}</BlogContent>
          )}
        </PostContainer>
      </Section>
    </article>
  )
}

export const Header = styled.header`
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

export const Title = styled.h1`
  font-size: ${p => p.theme.spacing.large} !important;
`

// Blog post styles
const BlogContent = styled.article`
  width: 100%;
  font-size: 18px;
  line-height: 1.7;

  & > * {
    margin-top: 1.5rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: ${p => p.theme.spacing.xLarge};
  }

  blockquote {
    position: relative;
    padding: 32px 20px 32px 64px;
    font-size: 1.875rem;
    line-height: 38px;
    font-weight: 900;
    color: ${p => p.theme.colors.light};

    &::before {
      content: "\\201C";
      position: absolute;
      top: 0.59em;
      left: -0.01em;
      font-size: 4em;
      color: ${p => p.theme.colors.main};
    }
  }

  a {
    color: ${p => p.theme.colors.main};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    color: ${p => p.theme.colors.light};
  }

  ul,
  ol {
    margin-left: ${p => p.theme.spacing.medium};

    li {
      padding-left: ${p => p.theme.spacing.xSmall};
      margin: ${p => p.theme.spacing.xSmall} 0;
    }
  }

  .gatsby-resp-iframe-wrapper {
    margin: ${p => p.theme.spacing.large} 0;
    margin-bottom: ${p => p.theme.spacing.large} !important;
  }

  .gatsby-resp-image-link {
    border-radius: 16px;
    overflow: hidden;
    max-height: 600px;

    img {
      border-radius: 16px;
      object-fit: cover;
    }
  }
`

export default BlogPost
