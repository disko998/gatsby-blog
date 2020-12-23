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
  Title,
} from "./elements"

interface LayoutProps extends Omit<PageProps, "children"> {
  children?: JSX.Element | JSX.Element[]
}

export const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  return (
    <LayoutWrapper>
      <Navbar>
        <Container>
          <NavContent>
            <Logo>Aditu</Logo>
            <Nav>
              <NavItem>
                <NavLink>Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Log in</NavLink>
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
            <Col>
              <Title>Latest Posts</Title>
            </Col>
            <Col>
              <Title>Explore Tags</Title>
            </Col>
            <Col>
              <Title>Get Interesting News</Title>
            </Col>
          </Grid>
        </Container>
      </Footer>
    </LayoutWrapper>
  )
}
