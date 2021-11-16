import React from "react"
import styled from "styled-components"

type TagsProps = {
  tags: string[]
  className?: string
  size?: "s" | "l"
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>, tag: string) => void
}

TagsList.defaultProps = {
  size: "s",
  tags: [],
}

function TagsList({ tags, className, size, onClick }: TagsProps) {
  return (
    <TagListWrapper className={className}>
      {tags.map(tag => (
        <Tag key={tag} size={size} onClick={e => onClick?.(e, tag)}>
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

const Tag = styled.li<{ size: "s" | "l" }>`
  padding: ${p => (p.size === "l" ? `5px 11px` : `1px 8px`)};
  border: ${p =>
    p.size === "l"
      ? "3px solid rgba(255,255,255,.1)"
      : `2px solid ${p.theme.colors.gray}`};
  color: ${p => p.theme.colors.text};
  transition: ${p => p.theme.animation.main};
  margin: 0.1875rem;
  border-radius: 30px;
  font-size: 12px;
  line-height: 18px;
  min-width: 50px;
  text-align: center;
  white-space: nowrap;
  font-weight: ${p => (p.size === "l" ? 700 : 500)};
  cursor: pointer;

  &:hover {
    border-color: ${p => p.theme.colors.main};
    color: ${p => p.theme.colors.light};
  }
`
const HashTag = styled.span`
  color: ${p => p.theme.colors.main};
`

export default TagsList
