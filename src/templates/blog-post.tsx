import React from "react"
import { graphql } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"
import Img from "gatsby-image"
import styled from "styled-components"

import {
  Layout,
  TagsList,
  SEO,
  PostsNavigation,
  SocialShare,
} from "../components"
import {
  Grid,
  Col,
  Section,
  BlogContent,
  PostContainer,
} from "../components/elements"
import {
  ReadTime,
  PostDate,
  CardFooter,
} from "../components/widgets/blog/BlogCard"

export const BlogPostTemplate = ({
  thumbnail,
  tags,
  readingTime,
  date,
  title,
}) => {
  return (
    <article
      className="blog-post"
      itemScope
      itemType="http://schema.org/Article"
    >
      {/* Header */}
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
          <BlogContent
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
  )
}
