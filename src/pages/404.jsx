import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { BiArrowBack } from "react-icons/bi"
import { navigate } from "@reach/router"
import Img from "gatsby-image"

import { Layout, SEO } from "../components"
import { Button, Section, Center } from "../components/elements"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />

      <Section>
        <Center direction="column">
          <Image404 fadeIn fluid={data.file.childImageSharp?.fluid} />

          <Title404>
            "<Pathname>{location.pathname}</Pathname>" Not found!
          </Title404>

          <BackButton onClick={() => navigate(-1)}>
            <BiArrowBack size={20} />
            <span>Go back</span>
          </BackButton>
        </Center>
      </Section>
    </Layout>
  )
}

const Title404 = styled.h1`
  margin: 1rem 0;
  text-transform: capitalize;

  @media ${p => p.theme.breakpoints.smallTablet} {
    font-size: 25px;
  }
`

const Pathname = styled.i`
  color: ${p => p.theme.colors.main};
`

const Image404 = styled(Img)`
  width: 400px;

  @media ${p => p.theme.breakpoints.smallTablet} {
    width: 300px;
  }
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
    file(relativePath: { eq: "404.png" }) {
      childImageSharp {
        fluid(maxWidth: 1300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default NotFoundPage
