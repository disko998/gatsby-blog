import React from "react"

import { Avatar as AvatarImg } from "./elements"

export function Avatar({ src, size = 36 }: AvatarProps) {
  return (
    <AvatarImg
      style={{ height: size, width: size }}
      fadeIn={true}
      fixed={src && src.childImageSharp.fixed}
      alt="Avatar"
    />
  )
}

type AvatarProps = {
  src: any
  size?: number
}
