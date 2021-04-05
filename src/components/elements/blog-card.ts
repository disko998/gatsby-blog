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
  filter: brightness(40%);
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
    filter: brightness(50%);
  }
`

export const CardContent = styled.div`
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

export const CardTitle = styled.h2`
  font-size: 28px;
`

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 17px;
  margin: ${p => p.theme.spacing.xSmall} 0;
  overflow: hidden;
  font-weight: 400;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.1);
  color: ${p => p.theme.colors.grayLight};
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
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
  color: ${p => p.theme.colors.lightGray};
`

export const Bookmark = styled.span<{ isBookmarked: boolean }>`
  position: absolute;
  top: ${p => p.theme.spacing.small};
  right: ${p => p.theme.spacing.small};
  font-size: 20px;
  color: ${p => (p.isBookmarked ? p.theme.colors.main : p.theme.colors.light)};
  cursor: pointer;
  transition: all 0.2s;
  z-index: 10;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 5px;
  padding: 5px 5px 0 5px;
  text-align: center;

  &:hover {
    color: ${p => p.theme.colors.main};
    background: rgba(255, 255, 255, 0.2);
  }
`
