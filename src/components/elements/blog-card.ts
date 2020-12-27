import styled from "styled-components"
import { rem } from "../../utils/helper"
import Img, { GatsbyImageFluidProps, GatsbyImageFixedProps } from "gatsby-image"

type ThumbProps = GatsbyImageFluidProps & {
  zIndex?: number
  hoverEffect?: boolean
}

export const Thumb = styled(Img)<ThumbProps>`
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${p => p.zIndex || 1};
  filter: brightness(50%);
  transition: all 0.3s;

  &:hover {
    ${p => (p.hoverEffect ? `filter: brightness(40%);` : "")}
  }
`

export const ArticleCard = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.1);
  }

  &:hover ${Thumb} {
    filter: brightness(60%);
  }
`

export const CardContent = styled.div`
  /* max-width: ${rem(412)}; */
  min-height: ${rem(340)};
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: hidden;
  padding: ${p => p.theme.spacing.small};
  flex-direction: column-reverse;
  cursor: pointer;
  z-index: 2;
`

export const CardDesc = styled.p`
  font-size: 14px;
  line-height: 17px;
  margin: ${p => p.theme.spacing.xSmall} 0;
  min-height: ${rem(55)};
  overflow: hidden;
  font-weight: 500;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.1);
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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

export const Author = styled.span`
  font-size: 13px;
  font-weight: 500;
  margin-right: ${rem(8)};
  color: ${p => p.theme.colors.light};
  white-space: nowrap;
`

export const ReadTime = styled.time`
  font-size: 12px;
  line-height: 1;
  font-weight: 500;
  margin-right: ${rem(2)};
  color: ${p => p.theme.colors.light};
  white-space: nowrap;
`

export const PostDate = styled(ReadTime)`
  color: ${p => p.theme.colors.gray};
`

export const TagList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  flex: 1;
`

export const Tag = styled.li<{ big?: boolean }>`
  padding: ${p => (p.big ? `${rem(5)} ${rem(11)}` : `${rem(2)} ${rem(8)}`)};
  border: 2px solid ${p => p.theme.colors.gray};
  color: ${p => p.theme.colors.gray};
  transition: ${p => p.theme.animation.main};
  margin: ${rem(3)};
  border-radius: 30px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  min-width: 50px;
  text-align: center;
  white-space: nowrap;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  cursor: pointer;

  &:hover {
    border-color: ${p => p.theme.colors.main};
    color: ${p => p.theme.colors.light};
  }
`

export const HashTag = styled.span`
  color: ${p => p.theme.colors.main};
`
