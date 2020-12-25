import React from "react"
import { PostNode } from "../@types"
import { navigate } from "gatsby"

import { Tags, Avatar } from "./index"
import {
  ArticleCard,
  CardDesc,
  CardFooter,
  Author,
  PostDate,
  ReadTime,
  Thumb,
  CardContent,
} from "./elements"

const maxLength = 140

export const BlogCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <ArticleCard onClick={() => navigate(post.fields.slug)}>
      <Thumb
        fadeIn={true}
        fluid={
          post.frontmatter.thumbnail &&
          post.frontmatter.thumbnail.childImageSharp.fluid
        }
      />
      <CardContent>
        <main>
          <Tags tags={post.frontmatter.tags} />
          <h2>{post.frontmatter.title}</h2>
          <CardDesc
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description
                ? post.frontmatter.description.substring(0, maxLength) + "..."
                : post.excerpt.substring(0, maxLength) + "...",
            }}
            itemProp="description"
          />
          <CardFooter>
            <Avatar src={post.frontmatter.avatar} />
            <Author>{post.frontmatter.author}</Author>
            <ReadTime>
              {post.frontmatter.readTime} read &bull;
              <PostDate>{` ${post.frontmatter.date}`}</PostDate>
            </ReadTime>
          </CardFooter>
        </main>
      </CardContent>
    </ArticleCard>
  )
}

type PostCardProps = {
  post: PostNode
}
