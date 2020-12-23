import React from "react"
import { PostNode } from "../@types"

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
} from "./elements"

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <ArticleCard>
      <div>
        <TagList>
          <Tag>Bible</Tag>
          <Tag>Hebrew</Tag>
        </TagList>
        <h2>{post.frontmatter.title}</h2>
        <CardDesc
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          itemProp="description"
        />
        <CardFooter>
          <Avatar />
          <Author>Anonymous</Author>
          <ReadTime>
            {"2 min read"} &bull;
            <PostDate>{` ${post.frontmatter.date}`}</PostDate>
          </ReadTime>
        </CardFooter>
      </div>
    </ArticleCard>
  )
}

type PostCardProps = {
  post: PostNode
}
