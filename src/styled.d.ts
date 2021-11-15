// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      main: string
      code: string
      quote: string
    }

    colors: {
      text: string
      main: string
      dark: string
      light: string
      background: string
      secondary: string
      gray: string
      lightGray: string
    }

    breakpoints: {
      mobile: string
      tablet: string
      smallTablet: string
    }

    spacing: {
      xxSmall: string
      xSmall: string
      small: string
      medium: string
      large: string
      xLarge: string
      xxLarge: string
    }

    animation: {
      button: string
      link: string
      main: string
    }

    shadows: {
      shadow1: string
    }

    layouts: {
      containerWidth: string
    }
  }
}
