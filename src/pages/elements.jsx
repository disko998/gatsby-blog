import React from "react"
import { Layout, SEO } from "../components"
import { BlogPost, PostContainer, Section } from "../components/elements"

const Elements = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title="Elements" />
      <Section>
        <PostContainer>
          <BlogPost dangerouslySetInnerHTML={{ __html: post.html }} />
        </PostContainer>
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "Markdown Cheat Sheet" } }) {
      html
    }
  }
`

export default Elements
