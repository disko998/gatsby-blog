import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import styled from "styled-components"

import { rem } from "../../utils/helper"
import { SocialShare, TagsList } from "../widgets"
import { Container, Grid, Col } from "../elements"
import { Newsletter } from "../widgets"

const Footer: React.FC = () => {
  const { site } = useStaticQuery(query)

  const onTagClick = (e, tag) => {
    e.stopPropagation()
    navigate(`/tag/${tag}`)
  }

  return (
    <FooterWrapper>
      <Container>
        <Grid>
          <Col direction="column" justify="flex-start">
            <FooterTitle>Share This Blog</FooterTitle>
            <SocialShare />
          </Col>

          <Col direction="column" justify="flex-start">
            <FooterTitle>Explore Tags</FooterTitle>
            <div>
              <StyledTags
                size="l"
                tags={site.siteMetadata.featuredTags}
                onClick={onTagClick}
              />
            </div>
          </Col>

          <Col direction="column">
            <FooterTitle>Get Interesting Posts</FooterTitle>
            <Newsletter />
          </Col>
        </Grid>
      </Container>
    </FooterWrapper>
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        featuredTags
      }
    }
  }
`

const FooterWrapper = styled.footer`
  min-height: ${rem(300)};
  background: ${props => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ${p => p.theme.spacing.xxLarge};
`

const FooterTitle = styled.h2`
  position: relative;
  padding-left: 8px;
  margin-bottom: ${p => p.theme.spacing.large};
  font-size: 24px;
  line-height: 1;
  font-weight: 900;
  z-index: 1;
  width: fit-content;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    z-index: -1;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    display: block;
    width: 106px;
    height: 38px;
    border-radius: 4px 0 0 4px;
    background: linear-gradient(
      90deg,
      ${p => p.theme.colors.main} -5.19%,
      rgba(15, 14, 21, 0) 100%
    );
  }

  &::selection {
    color: ${p => p.theme.colors.light};
    background-color: rgba(255, 123, 123, 0.7);
  }
`

const StyledTags = styled(TagsList)`
  justify-content: center;
`

export default Footer
