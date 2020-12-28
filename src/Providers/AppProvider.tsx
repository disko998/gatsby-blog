import React from "react"

export const AppContext = React.createContext<IAppContext>({
  bookmarks: [],
  setBookmarks: () => {},
})

export const AppProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = React.useState(
    JSON.parse(localStorage.getItem("@BOOKMARKS"))
  )

  return (
    <AppContext.Provider value={{ bookmarks, setBookmarks }}>
      {children}
    </AppContext.Provider>
  )
}

type IAppContext = {
  bookmarks: string[]
  setBookmarks: (b: string[]) => void
}
