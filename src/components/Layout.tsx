import React from "react"
import { PageProps, useStaticQuery, graphql } from "gatsby"

import {
  LayoutWrapper,
  Navbar,
  Footer,
  Container,
  Content,
  NavContent,
  NavItem,
  Nav,
  NavLink,
  Logo,
  Grid,
  Col,
  FooterTitle,
  StyledTags,
} from "./elements"
import { Newsletter } from "./Newsletter"

interface LayoutProps extends Omit<PageProps, "children"> {
  children?: JSX.Element | JSX.Element[]
}

export const LocationContext = React.createContext(null)

export const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  const { site } = useStaticQuery(query)

  return (
    <LocationContext.Provider value={location}>
      <LayoutWrapper>
        <Navbar>
          <Container>
            <NavContent>
              <Logo to="/">Aditu</Logo>
              <Nav>
                <NavItem>
                  <NavLink active={location.pathname === "/"} to="/">
                    Blogs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active={location.pathname === "/favorites"}
                    to="/favorites"
                  >
                    Favorites
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active={location.pathname === "/elements"}
                    to="/elements"
                  >
                    Elements
                  </NavLink>
                </NavItem>
              </Nav>
            </NavContent>
          </Container>
        </Navbar>
        <Content>
          <Container>{children}</Container>
        </Content>
        <Footer>
          <Container>
            <Grid>
              <Col direction="column" justify="flex-start">
                <FooterTitle>Latest Posts</FooterTitle>
              </Col>
              <Col direction="column" justify="flex-start">
                <FooterTitle>Explore Tags</FooterTitle>
                <div>
                  <StyledTags widget tags={site.siteMetadata.featuredTags} />
                </div>
              </Col>
              <Col direction="column">
                <FooterTitle>Get Interesting News</FooterTitle>
                <Newsletter />
              </Col>
            </Grid>
          </Container>
        </Footer>
      </LayoutWrapper>
    </LocationContext.Provider>
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
