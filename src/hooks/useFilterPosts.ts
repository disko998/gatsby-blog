import React from "react"

export const useFilterPosts = (posts: any[], param?: string): any[] => {
  const urlParams = new URLSearchParams(location.search)
  const searchTerm = urlParams.get(param || "term")

  const filteredPosts = React.useMemo(
    () =>
      posts.filter(post => {
        var regex = new RegExp(post.frontmatter.tags.join("|"), "i")
        return searchTerm ? regex.test(searchTerm) : true
      }),
    []
  )

  return filteredPosts
}
