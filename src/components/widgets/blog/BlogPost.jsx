import React from "react"

import {
  PostContainer,
  FeaturedImage,
  BlogContent,
  Header,
  Title,
  FeaturedImageNative,
} from "../../elements/blog-post"
import { Grid, Col, Section } from "../../elements/layout"
import DateAndReadTime from "../../shared/DateAndReadTime"
import TagsList from "../TagsList"

// type BlogPostProps = {
//   thumbnail: FluidObject
//   tags: string[]
//   readingTime: string
//   date: string
//   title: string
//   html: string
//   description?: string
//   onTagClick: (e: any, tag: string) => void
// }

const BlogPost = ({
  thumbnail,
  thumbnailUri,
  tags,
  readingTime,
  date,
  title,
  html,
  children,
  onTagClick,
}) => {
  return (
    <article itemScope itemType="http://schema.org/Article">
      <Section>
        <Grid>
          <Col flex={1.2}>
            {thumbnail ? (
              <FeaturedImage fadeIn={true} fluid={thumbnail} />
            ) : (
              <FeaturedImageNative src={thumbnailUri} />
            )}
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
              dangerouslySetInnerHTML={{ __html: html }}
              itemProp="articleBody"
            />
          ) : (
            <BlogContent itemProp="articleBody">{children}</BlogContent>
          )}
        </PostContainer>
      </Section>
    </article>
  )
}

export default BlogPost
