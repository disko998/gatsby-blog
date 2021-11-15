import React from "react"

export const BookmarkContext = React.createContext<IBookmarkContext>({
  bookmarks: [],
  setBookmarks: () => {},
})

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = React.useState([])

  React.useEffect(() => {
    if (window) {
      const favorites = JSON.parse(localStorage.getItem("@BOOKMARKS"))

      setBookmarks(favorites || [])
    }
  }, [])

  return (
    <BookmarkContext.Provider value={{ bookmarks, setBookmarks }}>
      {children}
    </BookmarkContext.Provider>
  )
}

type IBookmarkContext = {
  bookmarks: string[]
  setBookmarks: (b: string[]) => void
}
