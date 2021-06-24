import React from "react"
import CMS from "netlify-cms-app"

import { BlogPost } from "./components/elements/blog-post"

const BlogPostPreview = ({ entry, widgetFor }) => {
  return <BlogPost dangerouslySetInnerHTML={{ __html: widgetFor("body") }} />
}
CMS.registerPreviewTemplate("article", BlogPostPreview)
