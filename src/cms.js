import React from "react"
import CMS from "netlify-cms-app"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"

import { CSSInjector, GlobalStyles, theme } from "./styles"
// import BlogPost from "./components/widgets/blog/BlogPost"

const BlogPostPreview = ({ widgetFor, entry }) => {
  return (
    <CSSInjector>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BlogPost
          readingTime="2min"
          body={widgetFor("body")}
          title={entry.getIn(["data", "title"])}
          thumbnail={entry.getIn(["data", "thumbnail"])}
          date={entry.getIn(["data", "date"])}
          description={entry.getIn(["data", "description"])}
          tags={entry.getIn(["data", "tags"]).toJS()}
        />
      </ThemeProvider>
    </CSSInjector>
  )
}

CMS.registerPreviewTemplate("blog", BlogPostPreview)

const BlogContent = styled.article`
  width: 100%;
  font-size: 18px;
  line-height: 1.7;

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

  blockquote {
    position: relative;
    padding: 32px 20px 32px 64px;
    font-size: 1.875rem;
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
`
