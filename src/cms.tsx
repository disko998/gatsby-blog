import React from "react"
import CMS from "netlify-cms-app"
import { ThemeProvider } from "styled-components"
import { hr } from "netlify-cms-locales"

import { CSSInjector, GlobalStyles, theme } from "styles"
import { Container } from "components/elements/layout"
import BlogPost from "components/widgets/blog/BlogPost"

const BlogPostPreview = ({ widgetFor, entry, getAsset }) => {
  return (
    <CSSInjector>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <BlogPost
            readingTime="2 min"
            title={entry.getIn(["data", "title"])}
            src={getAsset(entry.getIn(["data", "thumbnail"]))?.url}
            tags={entry.getIn(["data", "tags"])?.toJS() || []}
            date={new Date(entry.getIn(["data", "date"]))?.toLocaleDateString()}
            description={entry.getIn(["data", "description"])}
          >
            {widgetFor("body")}
          </BlogPost>
        </Container>
      </ThemeProvider>
    </CSSInjector>
  )
}

CMS.init({
  config: {
    site_url: window.location.origin,
    logo_url: "https://your-site.com/images/logo.svg",
    locale: "en", // hr

    backend: {
      name: "git-gateway",
      branch: "master",
    },
    local_backend: process.env.NODE_ENV === "development",
    publish_mode: "editorial_workflow",
    media_folder: "static/assets",
    public_folder: "/assets",
    show_preview_links: true,

    collections: [
      {
        name: "blogs",
        label: "Blogs",
        folder: "content/blog",
        create: true,
        slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
        path: "blog/{{title}}",
        preview_path: "blog/{{slug}}",
        editor: { preview: true },
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Thumbnail", name: "thumbnail", widget: "image" },
          { label: "Hide", name: "hide", widget: "boolean", default: false },
          { label: "Publish Date", name: "date", widget: "datetime" },
          { label: "Description", name: "description", widget: "string" },
          { label: "Tags", name: "tags", widget: "list" },
          { label: "Body", name: "body", widget: "markdown" },
        ],
      },
    ],
  },
})

CMS.registerLocale("hr", hr)
CMS.registerPreviewTemplate("blogs", BlogPostPreview)
