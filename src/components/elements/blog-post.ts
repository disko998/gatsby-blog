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
  font-size: 3rem;
`

export const BlogPost = styled.article`
  width: 100%;
  margin: auto;
  max-width: ${rem(750)};
  font-size: 18px;
  line-height: 1.7;

  & > * {
    margin: ${p => p.theme.spacing.large} 0;
  }

  h1,
  h2 {
    text-align: center;
  }

  blockquote {
    position: relative;
    padding: 32px 20px 62px 64px;
    margin-bottom: 0;
    font-size: 30px;
    line-height: 38px;
    font-weight: 900;
    color: #fff;

    &::before {
      content: "'";
      position: absolute;
      top: 0.59em;
      left: -0.01em;
      font-size: 4em;
      color: #ff7b7b;
    }
  }
`
