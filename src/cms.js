import React from "react"
import CMS from "netlify-cms-app"
import { ThemeProvider } from "styled-components"

import { CSSInjector, GlobalStyles, theme } from "./styles"
// import BlogPost from "./components/widgets/blog/BlogPost"

const BlogPostPreview = ({ widgetFor, entry }) => {
  console.log(widgetFor("body"))
  console.log(entry.getIn(["data", "title"]))
  console.log(entry.getIn(["data", "thumbnail"]))
  console.log(entry.getIn(["data", "date"]))
  console.log(entry.getIn(["data", "description"]))
  console.log(entry.getIn(["data", "tags"]).toJS())
  return (
    <CSSInjector>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <BlogPost content={widgetFor("body")} /> */}
      </ThemeProvider>
    </CSSInjector>
  )
}

CMS.registerPreviewTemplate("blog", BlogPostPreview)
