import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/styles/theme"
import GlobalStyles from "./src/styles/global"
import "prismjs/themes/prism-tomorrow.css"
// custom typefaces
// import "typeface-montserrat"
// import "typeface-merriweather"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
