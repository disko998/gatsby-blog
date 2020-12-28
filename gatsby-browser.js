import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/styles/theme"
import GlobalStyles from "./src/styles/global"
import "prismjs/themes/prism-tomorrow.css"
import { AppProvider } from "./src/Providers"
// custom typefaces
// import "typeface-montserrat"
// import "typeface-merriweather"

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
