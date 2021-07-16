import React from "react"
import { PageProps } from "gatsby"

import { LayoutWrapper, Container, Content } from "../elements"
import Footer from "./Footer"
import Navbar from "./Navbar"

interface LayoutProps extends Omit<PageProps, "children"> {
  children?: JSX.Element | JSX.Element[]
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />

      <Content>
        <Container>{children}</Container>
      </Content>

      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
