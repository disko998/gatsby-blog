import React from "react"
import CMS from "netlify-cms-app"

import { BlogPost } from "./components/elements/blog-post"
import GlobalStyleProvider from "./styles/global"

const BlogPostPreview = ({ widgetFor, entry }) => {
  return (
    <GlobalStyleProvider>
      <BlogPost dangerouslySetInnerHTML={{ __html: widgetFor("body") }} />
    </GlobalStyleProvider>
  )
}
CMS.registerPreviewTemplate("blog", BlogPostPreview)
