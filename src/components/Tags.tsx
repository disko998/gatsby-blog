import React from "react"
import { navigate } from "gatsby"

import { TagList, Tag, HashTag } from "../components/elements"
import { LocationContext } from "./Layout"

type TagsProps = {
  tags: string[]
  className?: string
  big?: boolean
  searchPath?: string
}

export function Tags({ tags, className, big, searchPath }: TagsProps) {
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
            big={big}
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
