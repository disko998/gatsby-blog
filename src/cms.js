import React from "react"
import CMS from "netlify-cms-app"
import { ThemeProvider } from "styled-components"
import Markdown from "markdown-to-jsx"

import { BlogPost } from "./components/elements/blog-post"
import { GlobalStyles, theme } from "./styles"

const BlogPostPreview = ({ widgetFor }) => {
  console.log(widgetFor("body"))

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Markdown options={{ wrapper: BlogPost }}>
        {widgetFor("body").props.value}
      </Markdown>
    </ThemeProvider>
  )
}
CMS.registerPreviewTemplate("blog", BlogPostPreview)
