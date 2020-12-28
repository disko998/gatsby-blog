import React from "react"
import { PageProps } from "gatsby"

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
import { FEATURED_TAGS } from "../config/const"
import { Newsletter } from "./Newsletter"

interface LayoutProps extends Omit<PageProps, "children"> {
  children?: JSX.Element | JSX.Element[]
}

export const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  return (
    <LayoutWrapper>
      <Navbar>
        <Container>
          <NavContent>
            <Logo to="/">Aditu</Logo>
            <Nav>
              <NavItem>
                <NavLink active={location.pathname === "/"} to="/">
                  All Posts
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
              <NavItem>
                <NavLink active={location.pathname === "/login"} to="/login">
                  Log in
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
                <StyledTags big tags={FEATURED_TAGS} />
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
  )
}
