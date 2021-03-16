import React from "react"

export const useFilterPosts = (posts: any[], param?: string): any[] => {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [filteredPosts, setFilteredPosts] = React.useState([])

  React.useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const term = urlParams.get("term")
    setSearchTerm(term)
  }, [])

  React.useEffect(() => {
    const filtered = posts.filter(post => {
      var regex = new RegExp(post.frontmatter.tags.join("|"), "i")
      return searchTerm ? regex.test(searchTerm) : true
    })

    setFilteredPosts(filtered)
  }, [posts, searchTerm])

  return filteredPosts
}
