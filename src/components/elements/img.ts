import styled from "styled-components"
import Img, { GatsbyImageFluidProps, GatsbyImageFixedProps } from "gatsby-image"
import { rem } from "../../utils/helper"

type ThumbProps = GatsbyImageFluidProps & {
  zIndex?: number
  hoverEffect?: boolean
}

export const Thumbnail = styled(Img)<ThumbProps>`
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${p => p.zIndex || 1};
  filter: brightness(40%);
  transition: filter 0.3s, transform 1s ease-in-out;

  &:hover {
    ${p => (p.hoverEffect ? `filter: brightness(50%);` : "")}
    transform: scale(1.2);
  }
`

export const Avatar = styled(Img)<GatsbyImageFixedProps>`
  display: inline-block;
  padding: ${rem(3)};
  margin-right: ${rem(8)};
  /* border: 2px solid #ff7b7b; */
  border-radius: 50%;
  overflow: hidden;
  width: ${rem(36)};
  height: ${rem(36)};
`
