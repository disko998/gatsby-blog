import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { Grid, Col, Section, BlogContent, PostContainer } from "../../elements"
import { ReadTime, PostDate, CardFooter } from "./BlogCard"
import TagsList from "../TagsList"

const BlogPost = ({ thumbnail, tags, readingTime, date, title, content }) => {
  return (
    <article itemScope itemType="http://schema.org/Article">
      <Section>
        <Grid>
          <Col flex={1.2}>
            <FeaturedImage fadeIn={true} fluid={thumbnail} />
          </Col>
          <Col>
            <PostHeader>
              <ReadTime>
                {readingTime} &bull;
                <PostDate>{` ${date}`}</PostDate>
              </ReadTime>

              <Title itemProp="headline">{title}</Title>

              <TagsList tags={tags} />
            </PostHeader>
          </Col>
        </Grid>
      </Section>

      <Section>
        <PostContainer>
          <BlogContent
            dangerouslySetInnerHTML={{ __html: content }}
            itemProp="articleBody"
          />
        </PostContainer>
      </Section>
    </article>
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

export const Title = styled.h1`
  font-size: ${p => p.theme.spacing.large} !important;
`

export default BlogPost
