import React from "react"
import CMS from "netlify-cms-app"

import { BlogPost } from "./components/elements/blog-post"

const ArticlePreview = ({ children }) => <BlogPost>{children}</BlogPost>

CMS.registerPreviewTemplate("article", ArticlePreview)
