import Img, { GatsbyImageFluidProps } from "gatsby-image"
import styled from "styled-components"

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
  max-height: 600px;
  border-radius: 16px;
  filter: brightness(80%);
`

export const FeaturedImageNative = styled.img`
  width: 100%;
  max-height: 600px;
  border-radius: 16px;
  filter: brightness(80%);
`

export const PostTitle = styled.h1`
  font-size: 3rem !important;

  @media ${p => p.theme.breakpoints.mobile} {
    font-size: 2.3rem !important;
  }
`

export const PostContainer = styled.div`
  width: 100%;
  max-width: 46.875rem;
  margin: auto;
`

export const PostDescription = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin: ${p => p.theme.spacing.small} 0;
  overflow: hidden;
  color: ${p => p.theme.colors.lightGray};

  @media ${p => p.theme.breakpoints.mobile} {
    font-size: 16px;
  }
`

// Blog post styles
export const BlogContent = styled.article`
  width: 100%;
  font-size: 18px;
  line-height: 1.5;
  font-size: 20px;
  color: ${p => p.theme.colors.lightGray};

  @media ${p => p.theme.breakpoints.mobile} {
    font-size: 16px;
  }

  & > * {
    margin-top: 1.5rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: ${p => p.theme.spacing.xLarge};
  }

  p {
    margin-top: ${p => p.theme.spacing.medium};
  }

  blockquote {
    position: relative;
    padding: 32px 20px 32px 64px;
    font-size: 25px;
    line-height: 38px;
    font-weight: 900;
    color: ${p => p.theme.colors.light};
    font-family: ${p => p.theme.fonts.quote};

    @media ${p => p.theme.breakpoints.mobile} {
      font-size: 18px;
      line-height: 1.5;
    }

    &::before {
      font-weight: 900;
      font-style: normal;
      font-family: ${p => p.theme.fonts.main};
      content: "\\201C";
      position: absolute;
      top: 0.59em;
      left: -0.01em;
      font-size: 5em;
      color: ${p => p.theme.colors.main};

      @media ${p => p.theme.breakpoints.mobile} {
        font-size: 6em;
        top: 0em;
      }
    }
  }

  a {
    color: ${p => p.theme.colors.main};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    color: ${p => p.theme.colors.light};
  }

  ul,
  ol {
    margin-left: ${p => p.theme.spacing.medium};

    li {
      padding-left: ${p => p.theme.spacing.xSmall};
      margin: ${p => p.theme.spacing.xSmall} 0;
    }
  }

  .gatsby-resp-iframe-wrapper {
    margin: ${p => p.theme.spacing.large} 0;
    margin-bottom: ${p => p.theme.spacing.large} !important;
  }

  .gatsby-resp-image-link {
    border-radius: 16px;
    overflow: hidden;
    max-height: 600px;

    img {
      border-radius: 16px;
      object-fit: cover;
    }
  }

  div > img {
    margin-top: ${p => p.theme.spacing.medium};
    border-radius: 16px;
    overflow: hidden;
    max-width: 100%;
    img {
      object-fit: cover;
    }
  }
`
