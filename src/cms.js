import React from "react"
import CMS from "netlify-cms-app"
import { ThemeProvider, StyleSheetManager } from "styled-components"
import Markdown from "markdown-to-jsx"

import { BlogPost } from "./components/elements/blog-post"
import { GlobalStyles, theme } from "./styles"

const iframe = document.querySelector("#preview-pane")
const iframeHeadElem = iframe.contentDocument.head

const BlogPostPreview = ({ widgetFor }) => {
  console.log(widgetFor("body"))

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BlogPost>{widgetFor("body")}</BlogPost>
      </ThemeProvider>
    </StyleSheetManager>
  )
}
CMS.registerPreviewTemplate("blog", BlogPostPreview)
