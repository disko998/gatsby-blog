import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"

import { Thumbnail } from "../../elements"
import { rem } from "../../../utils/helper"

type PostsNavigationProps = {
  next: PostNode
  previous: PostNode
}

const PostsNavigation: React.FC<PostsNavigationProps> = ({
  previous,
  next,
}) => {
  return (
    <PostsNavWrapper>
      {previous && (
        <PostNavCard
          round={!next}
          onClick={() => navigate(previous.fields.slug)}
        >
          <Thumbnail
            zIndex={-1}
            hoverEffect
            fluid={previous.frontmatter.thumbnail?.childImageSharp.fluid}
          />
          <ArrowText>
            <ArrowIconLeft size={15} />
            previous post
          </ArrowText>
          <h2>{previous.frontmatter.title}</h2>
        </PostNavCard>
      )}

      {next && (
        <PostNavCard
          round={!previous}
          next
          onClick={() => navigate(next.fields.slug)}
        >
          <Thumbnail
            zIndex={-1}
            hoverEffect
            fluid={next.frontmatter.thumbnail?.childImageSharp.fluid}
          />
          <ArrowText>
            next post
            <ArrowIconRight size={15} />
          </ArrowText>
          <h2>{next.frontmatter.title}</h2>
        </PostNavCard>
      )}
    </PostsNavWrapper>
  )
}

const PostsNavWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: ${rem(240)};

  @media ${p => p.theme.breakpoints.smallTablet} {
    flex-direction: column;
  }
`

const PostNavCard = styled.div<{ next?: boolean; round?: boolean }>`
  flex: 1;
  height: ${rem(240)};
  min-height: ${rem(240)};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: ${p => (p.next ? "flex-end" : "flex-start")};
  border-radius: ${p => (p.next ? "0 16px 16px 0" : "16px 0 0 16px")};
  padding: ${p => p.theme.spacing.small} ${p => p.theme.spacing.medium};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 2;
  ${p => (p.round ? "border-radius: 16px" : "")}

  @media ${p => p.theme.breakpoints.smallTablet} {
    width: 100%;
    border-radius: 16px;
    margin: ${p => p.theme.spacing.small} 0;
  }
`

const ArrowText = styled.nav<{ next?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${p => p.theme.colors.light};
  text-align: center;
`

const ArrowIconRight = styled(AiOutlineArrowRight)`
  margin: 0 3px;
`
const ArrowIconLeft = styled(AiOutlineArrowLeft)`
  margin: 0 3px;
`

export default PostsNavigation
