import styled from "styled-components"
import { rem } from "../../utils/helper"
import { Tags } from "../blog"

export const Footer = styled.footer`
  min-height: ${rem(300)};
  background: ${props => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ${p => p.theme.spacing.xxLarge};
`

export const FooterCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: ${rem(450)};
  margin: auto;
`

export const FooterTitle = styled.h2`
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

export const StyledTags = styled(Tags)`
  justify-content: center;
`
