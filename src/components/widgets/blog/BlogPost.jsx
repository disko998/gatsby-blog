import React from "react"

import {
  PostContainer,
  FeaturedImage,
  BlogContent,
  PostHeader,
  PostTitle,
  FeaturedImageNative,
  PostDescription,
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
  description,
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
            <PostHeader>
              <DateAndReadTime readTime={readingTime} date={date} />
              <PostTitle itemProp="headline">{title}</PostTitle>
              <TagsList tags={tags} onClick={onTagClick} />
              <PostDescription>{description}</PostDescription>
            </PostHeader>
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
