import React from "react"
import { ThemeProvider } from "styled-components"
import "prismjs/themes/prism-tomorrow.css"

import Theme from "./src/styles/theme"
import GlobalStyles from "./src/styles/global"
import { BookmarkProvider } from "./src/Providers"

export const wrapRootElement = ({ element }) => {
  return (
    <BookmarkProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
      </ThemeProvider>
    </BookmarkProvider>
  )
}
