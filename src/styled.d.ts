// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      main: string
      code: string
    }

    colors: {
      main: string
      dark: string
      light: string
      background: string
      blue: string
    }

    breakpoints: {
      mobile: string
      tablet: string
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
    }

    shadows: {
      shadow1: string
    }

    layouts: {
      containerWidth: string
      minColWidth: string
    }
  }
}
