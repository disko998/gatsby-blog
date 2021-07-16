import React from "react"
import CMS from "netlify-cms-app"
import { ThemeProvider } from "styled-components"

import { CSSInjector, GlobalStyles, theme } from "./styles"
import BlogPost from "./components/widgets/blog/BlogPost"

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
