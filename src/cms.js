import React from "react"
import CMS from "netlify-cms-app"
import { ThemeProvider } from "styled-components"

import { CSSInjector, GlobalStyles, theme } from "./styles"
import { BlogContent, PostContainer } from "./components/elements/blog-post"

const BlogPostPreview = ({ widgetFor, entry }) => {
  return (
    <CSSInjector>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PostContainer>
          <BlogContent>{widgetFor("body")}</BlogContent>
        </PostContainer>
      </ThemeProvider>
    </CSSInjector>
  )
}

CMS.registerPreviewTemplate("blog", BlogPostPreview)
