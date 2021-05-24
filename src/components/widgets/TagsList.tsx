import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import { rem } from "../../utils/helper"

type TagsProps = {
  tags: string[]
  className?: string
  size?: "s" | "l"
}

TagsList.defaultProps = {
  size: "s",
  tags: [],
  className: "",
}

function TagsList({ tags, className, size }: TagsProps) {
  const onTagClick = (e: React.MouseEvent, tag) => {
    e.stopPropagation()
    navigate(`/tag/${tag}`)
  }

  return (
    <TagListWrapper className={className}>
      {tags.map(tag => (
        <Tag key={tag} size={size} onClick={e => onTagClick(e, tag)}>
          <HashTag>#</HashTag>
          {tag}
        </Tag>
      ))}
    </TagListWrapper>
  )
}

const TagListWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  flex: 1;
`

const Tag = styled.li<{ size?: "s" | "l" }>`
  padding: ${p => (p.size === "l" ? `5px 11px` : `1px 8px`)};
  border: ${p =>
    p.size === "l"
      ? "3px solid rgba(255,255,255,.1)"
      : `2px solid ${p.theme.colors.gray}`};
  color: ${p =>
    p.size === "l" ? p.theme.colors.gray : p.theme.colors.lightGray};
  transition: ${p => p.theme.animation.main};
  margin: ${rem(3)};
  border-radius: 30px;
  font-size: 12px;
  line-height: 18px;
  min-width: 50px;
  text-align: center;
  white-space: nowrap;
  font-weight: ${p => (p.size === "l" ? 700 : 500)};
  cursor: pointer;
  /* text-transform: capitalize; */

  &:hover {
    border-color: ${p => p.theme.colors.main};
    color: ${p => p.theme.colors.light};
  }
`
const HashTag = styled.span`
  color: ${p => p.theme.colors.main};
`

export default TagsList
