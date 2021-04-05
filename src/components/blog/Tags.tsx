import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import { LocationContext } from "../Layout"
import { rem } from "../../utils/helper"

export function Tags({ tags, className, widget, searchPath }: TagsProps) {
  const { pathname } = React.useContext(LocationContext)

  const searchTag = React.useCallback((tag: string) => {
    navigate(`${searchPath || pathname}?term=${tag}`)
  }, [])

  return (
    <TagList className={className}>
      {tags &&
        tags.map(tag => (
          <Tag
            key={tag}
            widget={widget}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation()
              searchTag(tag)
            }}
          >
            <HashTag>#</HashTag>
            {tag}
          </Tag>
        ))}
    </TagList>
  )
}

type TagsProps = {
  tags: string[]
  className?: string
  widget?: boolean
  searchPath?: string
}

export const TagList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  flex: 1;
`

export const Tag = styled.li<{ widget?: boolean }>`
  padding: ${p => (p.widget ? `5px 11px` : `1px 8px`)};
  border: ${p =>
    p.widget
      ? "3px solid rgba(255,255,255,.1)"
      : `2px solid ${p.theme.colors.gray}`};
  color: ${p => (p.widget ? p.theme.colors.gray : p.theme.colors.lightGray)};
  transition: ${p => p.theme.animation.main};
  margin: ${rem(3)};
  border-radius: 30px;
  font-size: 12px;
  line-height: 18px;
  min-width: 50px;
  text-align: center;
  white-space: nowrap;
  /* text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.5); */
  font-weight: ${p => (p.widget ? 700 : 500)};
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    border-color: ${p => p.theme.colors.main};
    color: ${p => p.theme.colors.light};
  }
`
export const HashTag = styled.span`
  color: ${p => p.theme.colors.main};
`
