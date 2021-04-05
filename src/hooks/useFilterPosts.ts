export const useFilterPosts = (posts: any[]): any[] => {
  const urlParams = new URLSearchParams(global?.window?.location.search)
  const searchTerm = urlParams.get("term")

  const filtered = posts.filter(post => {
    var regex = new RegExp(post.frontmatter?.tags?.join("|"), "i")
    return searchTerm ? regex.test(searchTerm) : true
  })

  return filtered
}
