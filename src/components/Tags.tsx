import React from "react"
import { navigate } from "gatsby"

import { TagList, Tag, HashTag } from "../components/elements"

type TagsProps = {
  tags: string[]
  className?: string
  big?: boolean
}

export function Tags({ tags, className, big }: TagsProps) {
  const searchTag = React.useCallback((tag: string) => {
    navigate(`/?term=${tag}`)
  }, [])

  return (
    <TagList className={className}>
      {tags &&
        tags.map(tag => (
          <Tag big={big} onClick={() => searchTag(tag)}>
            <HashTag>#</HashTag>
            {tag}
          </Tag>
        ))}
    </TagList>
  )
}
