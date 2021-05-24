import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { BiArrowBack } from "react-icons/bi"

import { Layout, SEO } from "../components"
import { Button, Container } from "../components/elements"

const NotFoundPage = ({ data, location, navigate }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />

      <Container>
        <Wrapper>
          <Title404>
            404: Page "<Pathname>{location.pathname}</Pathname>" not found 👈 😞
          </Title404>

          <BackButton onClick={() => navigate(-1)}>
            <BiArrowBack size={20} />
            <span>Go back</span>
          </BackButton>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 85vh;
`

const Title404 = styled.h1`
  text-align: center;
  font-weight: 900;
`

const Pathname = styled.i`
  font-weight: normal;
  color: ${p => p.theme.colors.main};
`

const BackButton = styled(Button)`
  text-transform: uppercase;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-left: 10px;
  }
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default NotFoundPage
