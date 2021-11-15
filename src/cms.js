import React from "react"
import CMS from "netlify-cms-app"
import { ThemeProvider } from "styled-components"

import { CSSInjector, GlobalStyles, theme, LoadFonts } from "./styles"
import { Container } from "./components/elements/layout"
import BlogPost from "./components/widgets/blog/BlogPost"

const BlogPostPreview = ({ widgetFor, entry }) => {
  return (
    <CSSInjector>
      <ThemeProvider theme={theme}>
        <LoadFonts />
        <GlobalStyles />
        <Container>
          <BlogPost
            readingTime="2 min"
            title={entry.getIn(["data", "title"])}
            src={entry.getIn(["data", "thumbnail"])}
            tags={entry.getIn(["data", "tags"])?.toJS() || []}
            date={new Date(entry.getIn(["data", "date"]))?.toLocaleDateString()}
            description={entry.getIn(["data", "description"])}
          >
            {widgetFor("body")}
          </BlogPost>
        </Container>
      </ThemeProvider>
    </CSSInjector>
  )
}

CMS.registerPreviewTemplate("blog", BlogPostPreview)
