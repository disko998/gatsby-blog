import React from "react"
import CMS from "netlify-cms-app"
import { ThemeProvider } from "styled-components"

import { CSSInjector, GlobalStyles, theme } from "./styles"
import {
  BlogContent,
  PostContainer,
  FeaturedImageNative,
  Header,
  Title,
} from "./components/elements/blog-post"
import { Container, Section, Grid, Col } from "./components/elements/layout"

const BlogPostPreview = ({ widgetFor, entry }) => {
  return (
    <CSSInjector>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Section>
            <Grid>
              <Col flex={1.2}>
                <FeaturedImageNative src={entry.getIn(["data", "thumbnail"])} />
              </Col>
              <Col>
                <Header>
                  {/* <DateAndReadTime readTime={readingTime} date={date} /> */}
                  <Title itemProp="headline">
                    {entry.getIn(["data", "title"])}
                  </Title>
                  {/* <TagsList tags={tags} onClick={onTagClick} /> */}
                </Header>
              </Col>
            </Grid>
          </Section>
          <Section>
            <PostContainer>
              <BlogContent>{widgetFor("body")}</BlogContent>
            </PostContainer>
          </Section>
        </Container>
      </ThemeProvider>
    </CSSInjector>
  )
}

CMS.registerPreviewTemplate("blog", BlogPostPreview)
