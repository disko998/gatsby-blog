import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { globalHistory } from "@reach/router"
import Img from "gatsby-image"
import { QueryType } from "global"

import { rem } from "./../../utils/helper"
import { Container } from "../elements"

const Navbar: React.FC = () => {
  const { file } = useStaticQuery<QueryType>(query)
  const { location } = globalHistory

  return (
    <NavBarContainer>
      <Container>
        <NavContent>
          <HomeLink to="/">
            <Logo fadeIn fluid={file.childImageSharp?.fluid} />
          </HomeLink>

          <NavLinks>
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
              <NavButton onClick={() => (document.location.href = "/admin/")}>
                Login
              </NavButton>
            </NavItem>
          </NavLinks>
        </NavContent>
      </Container>
    </NavBarContainer>
  )
}

const NavBarContainer = styled.nav`
  width: 100%;
  height: ${rem(80)};
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: center;

  @media ${p => p.theme.breakpoints.mobile} {
    flex-direction: column;

    & > * {
      margin: 20px 0;
    }
  }
`

const HomeLink = styled(Link)`
  font-size: 27px;
  line-height: 1;
  font-weight: 900;
  vertical-align: middle;
  color: ${p => p.theme.colors.light};
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
  text-align: center;
`

const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: row nowrap;

  @media ${p => p.theme.breakpoints.mobile} {
    justify-content: center;
    align-items: center;
  }
`

const NavItem = styled.li`
  margin: 0 ${p => p.theme.spacing.small};
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${p => p.theme.breakpoints.mobile} {
    margin: 0 ${p => p.theme.spacing.xSmall};
  }
`
const Logo = styled(Img)`
  width: 120px;
`

const navLinkStyle = p => {
  return `
	font-size: 16px;
	font-weight: 600;
	text-decoration: none;
	cursor: pointer;
	position: relative;
	color: ${p.active ? p.theme.colors.main : p.theme.colors.light};
  
	&::before {
	  content: "";
	  position: absolute;
	  display: block;
	  margin: auto;
	  height: 5px;
	  width: 5px;
	  border-radius: 50%;
	  background-color: ${p.theme.colors.main};
	  top: -5px;
	  left: 0;
	  right: 0;
	  opacity: 0;
	  transition: opacity 0.3s;
	}
  
	&:hover::before {
	  opacity: 1;
	}
	`
}

const NavButton = styled.div<{ active?: boolean }>`
  ${navLinkStyle}
`

const NavLink = styled(Link)<{ active?: boolean }>`
  ${navLinkStyle}
`
const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "logo-white.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Navbar
