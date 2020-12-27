import styled from "styled-components"
import { rem } from "../../utils/helper"
import Img, { GatsbyImageFluidProps, GatsbyImageFixedProps } from "gatsby-image"

export const PostHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  width: 100%;
`

export const FeaturedImage = styled(Img)<GatsbyImageFluidProps>`
  width: 100%;
  border-radius: 16px;
  filter: brightness(80%);
`

export const PostTitle = styled.h1`
  font-size: ${p => p.theme.spacing.large} !important;
`

export const PostContainer = styled.div`
  width: 100%;
  max-width: ${rem(750)};
  margin: auto;
`

export const PostsNavWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  & > div {
    width: 100%;
  }

  @media ${p => p.theme.breakpoints.mobile} {
    flex-direction: column;
    margin: ${p => p.theme.spacing.small} 0;
  }
`

export const PostNavCard = styled.div<{ next?: boolean; round?: boolean }>`
  flex: 1;
  height: ${rem(240)};
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
`

export const ArrowText = styled.nav<{ next?: boolean }>`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${p => p.theme.colors.light};

  ${postNav}
`

function postNav(props) {
  const nextStyle = `&::after {content: "\\2192";display: inline; margin-left: 5px}`
  const prevStyle = `&::before {content: "\\2190";display: inline; margin-right: 5px}`

  return props.next ? nextStyle : prevStyle
}

// MDX Styles
export const BlogPost = styled.article`
  width: 100%;
  font-size: 18px;
  line-height: 1.7;

  & > * {
    margin-top: 1.5rem;
  }

  h2,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: ${p => p.theme.spacing.large};
  }

  h1 {
    text-align: center;
  }

  blockquote {
    position: relative;
    padding: 32px 20px 32px 64px;
    font-size: ${rem(30)};
    line-height: 38px;
    font-weight: 900;
    color: ${p => p.theme.colors.light};

    &::before {
      content: "\\201C";
      position: absolute;
      top: 0.59em;
      left: -0.01em;
      font-size: 4em;
      color: ${p => p.theme.colors.main};
    }
  }

  a {
    color: ${p => p.theme.colors.main};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ul,
  ol {
    margin-left: ${p => p.theme.spacing.medium};

    li {
      padding-left: ${p => p.theme.spacing.xSmall};
      margin: ${p => p.theme.spacing.xSmall} 0;
    }
  }
`
