import React from "react"
import { ThemeProvider } from "styled-components"
import "prismjs/themes/prism-tomorrow.css"

import { GlobalStyles, theme } from "styles"

import { BookmarkProvider } from "providers"

type AppProps = {
  element: React.ReactElement
  isSSR?: boolean
}

export const App = ({ element }: AppProps) => {
  return (
    <BookmarkProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {element}
      </ThemeProvider>
    </BookmarkProvider>
  )
}
