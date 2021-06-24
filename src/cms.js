import React from "react"
import CMS from "netlify-cms-app"

import { BlogPost } from "./components/elements/blog-post"

const BlogPostPreview = ({ widgetFor, entry }) => {
  return (
    <BlogPost title={entry.getIn(["data", "title"])}>
      <h1>Test 1234</h1>
      <section dangerouslySetInnerHTML={{ __html: widgetFor("body") }} />
    </BlogPost>
  )
}
CMS.registerPreviewTemplate("blog", BlogPostPreview)
