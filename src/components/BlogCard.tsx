import React from "react"
import { PostNode } from "../@types"
import { navigate } from "gatsby"
import Img from "gatsby-image"

import {
  ArticleCard,
  CardDesc,
  CardFooter,
  Avatar,
  Author,
  Tag,
  TagList,
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
        fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
      />
      <CardContent>
        <div>
          <TagList>
            {post.frontmatter.tags?.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagList>
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
            <Avatar
              style={{ height: 36, width: 36, padding: 3 }}
              fadeIn={true}
              fixed={post.frontmatter.avatar.childImageSharp.fixed}
              alt="Avatar"
            />

            <Author>{post.frontmatter.author}</Author>
            <ReadTime>
              {post.frontmatter.readTime} read &bull;
              <PostDate>{` ${post.frontmatter.date}`}</PostDate>
            </ReadTime>
          </CardFooter>
        </div>
      </CardContent>
    </ArticleCard>
  )
}

type PostCardProps = {
  post: PostNode
}
