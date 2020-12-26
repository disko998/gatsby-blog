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

export const BlogPost = styled.article`
  width: 100%;
  margin: auto;
  max-width: ${rem(750)};
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
