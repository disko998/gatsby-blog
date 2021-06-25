import React from "react"
import CMS from "netlify-cms-app"
import { ThemeProvider } from "styled-components"
import Markdown from "markdown-to-jsx"

import { BlogPost } from "./components/elements/blog-post"
import { GlobalStyles, theme } from "./styles"

const BlogPostPreview = ({ widgetFor }) => {
  console.log(widgetFor("body"))
  console.log(ThemeProvider)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BlogPost>
        <Markdown>{widgetFor("body").props.value}</Markdown>
      </BlogPost>
    </ThemeProvider>
  )
}
CMS.registerPreviewTemplate("blog", BlogPostPreview)
