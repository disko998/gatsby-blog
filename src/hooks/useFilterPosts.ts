import React from "react"

export const useFilterPosts = (posts: any[], param?: string): any[] => {
  const urlParams = new URLSearchParams(location.search)
  const searchTerm = urlParams.get("term")
  const [filteredPosts, setFilteredPosts] = React.useState([])

  React.useEffect(() => {
    const filtered = posts.filter(post => {
      var regex = new RegExp(post.frontmatter.tags.join("|"), "i")
      return searchTerm ? regex.test(searchTerm) : true
    })

    setFilteredPosts(filtered)
  }, [posts, searchTerm])

  return filteredPosts
}
