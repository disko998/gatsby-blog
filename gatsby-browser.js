import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/styles/theme"
import GlobalStyles from "./src/styles/global"
// custom typefaces
// import "typeface-montserrat"
// import "typeface-merriweather"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
