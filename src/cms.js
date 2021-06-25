import React from "react"
import CMS from "netlify-cms-app"
import { ThemeProvider } from "styled-components"

import { BlogPost } from "./components/elements/blog-post"
import { GlobalStyles, theme } from "./styles"

const BlogPostPreview = ({ widgetFor }) => {
  console.log(widgetFor("body").props.value)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BlogPost
        dangerouslySetInnerHTML={{ __html: widgetFor("body").props.value }}
        itemProp="articleBody"
      />
    </ThemeProvider>
  )
}
CMS.registerPreviewTemplate("blog", BlogPostPreview)
