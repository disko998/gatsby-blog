import React from "react"

import { TagList, Tag, HashTag } from "../components/elements"

export function Tags({ tags }: { tags: string[] }) {
  return (
    <TagList>
      {tags &&
        tags.map(tag => (
          <Tag>
            <HashTag>#</HashTag>
            {tag}
          </Tag>
        ))}
    </TagList>
  )
}
