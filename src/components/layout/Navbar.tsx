import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { globalHistory } from "@reach/router"

import { rem } from "./../../utils/helper"
import { Container } from "../elements"

const Navbar: React.FC = () => {
  const { location } = globalHistory

  return (
    <NavWrapper>
      <Container>
        <NavContent>
          <Logo to="/">Aditu</Logo>

          <Nav>
            <NavItem>
              <NavLink active={location.pathname === "/"} to="/">
                Home
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
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
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
`

const Logo = styled(Link)`
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
`

const Nav = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
`

const NavItem = styled.li`
  margin-right: ${p => p.theme.spacing.medium};
`

const NavLink = styled(Link)<{ active?: boolean }>`
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  color: ${p => (p.active ? p.theme.colors.main : p.theme.colors.light)};

  &::before {
    content: "";
    position: absolute;
    display: block;
    margin: auto;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background-color: ${p => p.theme.colors.main};
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

export default Navbar
