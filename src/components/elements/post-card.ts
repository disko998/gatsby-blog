import styled from "styled-components"
import { rem } from "../../utils/helper"

export const ArticleCard = styled.article`
  /* max-width: ${rem(412)}; */
  min-height: ${rem(340)};
  background-color: rgba(255, 255, 255, 0.2);
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
  padding: ${p => p.theme.spacing.small};
  flex-direction: column-reverse;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`

export const CardDesc = styled.p`
  font-size: 14px;
  line-height: 17px;
  margin: ${p => p.theme.spacing.xSmall} 0;
`

export const CardFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Avatar = styled.image`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 36px;
  padding: 3px;
  margin-right: ${rem(8)};
  border: 2px solid #ff7b7b;
  border-radius: 50%;
  overflow: hidden;
`

export const Author = styled.span`
  font-size: 13px;
  font-weight: 500;
  margin-right: ${rem(8)};
  color: ${p => p.theme.colors.light};
`

export const ReadTime = styled.time`
  font-size: 12px;
  line-height: 1;
  font-weight: 500;
  margin-right: ${rem(2)};
  color: ${p => p.theme.colors.light};
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

export const Tag = styled.li`
  padding: ${rem(2)} ${rem(8)};
  border: 1px solid ${p => p.theme.colors.gray};
  color: ${p => p.theme.colors.gray};
  transition: ${p => p.theme.animation.main};
  margin: 0 ${rem(3)};
  border-radius: 30px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  min-width: 50px;
  text-align: center;

  &:hover {
    border-color: ${p => p.theme.colors.main};
    color: ${p => p.theme.colors.light};
  }
`
