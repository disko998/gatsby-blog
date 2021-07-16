import "prismjs/themes/prism-tomorrow.css"
import React from "react"
import { ThemeProvider } from "styled-components"

import Theme from "./src/styles/theme"
import GlobalStyles from "./src/styles/global"
import { AppProvider } from "./src/Providers"

export const wrapRootElement = ({ element }) => {
  return (
    <AppProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
      </ThemeProvider>
    </AppProvider>
  )
}
