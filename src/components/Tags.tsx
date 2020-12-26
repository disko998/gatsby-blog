import React from "react"
import { navigate } from "gatsby"

import { TagList, Tag, HashTag } from "../components/elements"

export function Tags({ tags }: { tags: string[] }) {
  const searchTag = React.useCallback((tag: string) => {
    navigate(`/?term=${tag}`)
  }, [])

  return (
    <TagList>
      {tags &&
        tags.map(tag => (
          <Tag onClick={() => searchTag(tag)}>
            <HashTag>#</HashTag>
            {tag}
          </Tag>
        ))}
    </TagList>
  )
}
