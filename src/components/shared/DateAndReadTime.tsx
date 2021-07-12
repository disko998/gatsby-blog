import React from "react"
import styled from "styled-components"
import { rem } from "../../utils/helper"

type DateAndReadTimeProps = {
  readonly readTime: string
  readonly date: string
}

export default function DateAndReadTime({
  readTime,
  date,
}: DateAndReadTimeProps) {
  return (
    <ReadTime>
      {readTime} &bull;
      <PostDate> {date}</PostDate>
    </ReadTime>
  )
}

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
