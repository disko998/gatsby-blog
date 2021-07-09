import React from "react"
import CMS from "netlify-cms-app"
import { ThemeProvider } from "styled-components"

import { BlogPost } from "./components/elements/blog-post"
import { CSSInjector, GlobalStyles, theme } from "./styles"

const BlogPostPreview = ({ widgetFor }) => {
  return (
    <CSSInjector>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BlogPost>{widgetFor("body")}</BlogPost>
      </ThemeProvider>
    </CSSInjector>
  )
}
CMS.registerPreviewTemplate("blog", BlogPostPreview)
