import React from "react"
import { FluidObject } from "gatsby-image"

import {
  Grid,
  Col,
  Section,
  PostContainer,
  FeaturedImage,
  BlogContent,
  Header,
  Title,
} from "../../elements"
import DateAndReadTime from "../../shared/DateAndReadTime"
import TagsList from "../TagsList"

type BlogPostProps = {
  thumbnail: FluidObject
  tags: string[]
  readingTime: string
  date: string
  title: string
  html: string
  description?: string
  onTagClick: (e: any, tag: string) => void
}

const BlogPost = ({
  thumbnail,
  tags,
  readingTime,
  date,
  title,
  html,
  onTagClick,
}: BlogPostProps) => {
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
          <BlogContent
            dangerouslySetInnerHTML={{ __html: html }}
            itemProp="articleBody"
          />
        </PostContainer>
      </Section>
    </article>
  )
}

export default BlogPost
