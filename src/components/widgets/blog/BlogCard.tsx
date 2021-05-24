import React from "react"
import Img, { GatsbyImageFixedProps } from "gatsby-image"
import { navigate, graphql } from "gatsby"
import { BsStarFill } from "react-icons/bs"
import styled from "styled-components"

import { rem } from "../../../utils/helper"
import TagsList from "../TagsList"
import { AppContext } from "../../../Providers"
import { Thumbnail } from "../../elements"

const maxLength = 140

type PostCardProps = {
  post: PostNode
}

const BlogCard: React.FC<PostCardProps> = ({ post }) => {
  //   const { site, avatar } = useStaticQuery(query)
  const { bookmarks, setBookmarks } = React.useContext(AppContext)

  const toggleBookmark = (e: React.MouseEvent) => {
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
      <Thumbnail
        fadeIn={true}
        fluid={post.frontmatter.thumbnail?.childImageSharp.fluid}
      />
      <CardContent>
        <Bookmark
          onClick={toggleBookmark}
          isBookmarked={bookmarks.includes(post.id)}
        >
          <BsStarFill />
        </Bookmark>
        <main>
          <ReadTime>
            {post.fields.readingTime.text} &bull;
            <PostDate> {post.frontmatter.date}</PostDate>
          </ReadTime>

          <CardTitle>{post.frontmatter.title}</CardTitle>
          <CardDescription
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description
                ? post.frontmatter.description.substring(0, maxLength) + "..."
                : post.excerpt.substring(0, maxLength) + "...",
            }}
            itemProp="description"
          />

          <CardFooter>
            {/* <Avatar src={avatar} /> */}
            {/* <Author>{site.siteMetadata.author.name}</Author> */}
            <TagsList tags={post.frontmatter.tags} />
          </CardFooter>
        </main>
      </CardContent>
    </ArticleCard>
  )
}

export const ArticleCard = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.1);
  }

  &:hover ${Thumbnail} {
    filter: brightness(50%);
    transform: scale(1.2);
  }
`

export const CardContent = styled.div`
  min-height: ${rem(340)};
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: hidden;
  padding: ${p => p.theme.spacing.small};
  flex-direction: column-reverse;
  cursor: pointer;
  z-index: 2;
`

export const CardTitle = styled.h2`
  font-size: 28px;
`

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 17px;
  margin: ${p => p.theme.spacing.xSmall} 0;
  overflow: hidden;
  font-weight: 500;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.1);
  color: ${p => p.theme.colors.grayLight};
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
`

export const Avatar = styled(Img)<GatsbyImageFixedProps>`
  display: inline-block;
  padding: ${rem(3)};
  margin-right: ${rem(8)};
  /* border: 2px solid #ff7b7b; */
  border-radius: 50%;
  overflow: hidden;
  width: ${rem(36)};
  height: ${rem(36)};
`

export const Author = styled.span`
  font-size: 13px;
  font-weight: 500;
  margin-right: ${rem(8)};
  color: ${p => p.theme.colors.light};
  white-space: nowrap;
`

export const ReadTime = styled.time`
  font-size: 12px;
  line-height: 1;
  font-weight: 500;
  margin-right: ${rem(2)};
  color: ${p => p.theme.colors.light};
  white-space: nowrap;
`

export const PostDate = styled(ReadTime)`
  color: ${p => p.theme.colors.lightGray};
`

export const Bookmark = styled.span<{ isBookmarked: boolean }>`
  position: absolute;
  top: ${p => p.theme.spacing.small};
  right: ${p => p.theme.spacing.small};
  font-size: 20px;
  color: ${p => (p.isBookmarked ? p.theme.colors.main : p.theme.colors.light)};
  cursor: pointer;
  transition: all 0.2s;
  z-index: 10;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 5px;
  padding: 5px 5px 0 5px;
  text-align: center;

  &:hover {
    color: ${p => p.theme.colors.main};
    background: rgba(255, 255, 255, 0.2);
  }
`

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

export default BlogCard
