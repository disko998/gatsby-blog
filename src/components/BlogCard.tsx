import React from "react"
import { PostNode } from "../@types"
import { navigate, useStaticQuery, graphql } from "gatsby"

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
  Bookmark,
} from "./elements"
import { AppContext } from "../Providers"

const maxLength = 140

export const BlogCard: React.FC<PostCardProps> = ({ post }) => {
  const { site, avatar } = useStaticQuery(query)
  const { bookmarks, setBookmarks } = React.useContext(AppContext)

  const onBookmark = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (!bookmarks) {
      return localStorage.setItem("@BOOKMARKS", JSON.stringify([post.id]))
    }

    const newBookmarks = bookmarks.includes(post.id)
      ? bookmarks.filter(b => b !== post.id)
      : [...bookmarks, post.id]

    localStorage.setItem("@BOOKMARKS", JSON.stringify(newBookmarks))
    setBookmarks(newBookmarks)
  }

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
        <Bookmark
          onClick={onBookmark}
          isBookmarked={bookmarks.includes(post.id)}
        >
          &#9734;
        </Bookmark>
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
            <Avatar src={avatar} />
            <Author>{site.siteMetadata.author.name}</Author>
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

const query = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 80, height: 80, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
        }
      }
    }
  }
`

type PostCardProps = {
  post: PostNode
}
