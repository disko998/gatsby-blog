import styled from "styled-components"
import { rem } from "./../../utils/helper"

export const Navbar = styled.nav`
  width: 100%;
  height: ${rem(80)};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: center;
`

export const Logo = styled.a`
  font-size: 27px;
  line-height: 1;
  font-weight: 900;
  vertical-align: middle;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
`

export const Nav = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
`

export const NavItem = styled.li`
  margin-right: ${p => p.theme.spacing.medium};
`

export const NavLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  position: relative;

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
    transition: opacity 0.5s;
  }

  &:hover::before {
    opacity: 1;
  }
`
