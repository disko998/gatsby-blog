import styled from "styled-components"

export const LayoutWrapper = styled.div``

export const Content = styled.main`
  flex: 1;
  min-height: 100vh;
`

export const Container = styled.div`
  max-width: ${p => p.theme.layouts.containerWidth};
  width: 100%;
  margin: auto;
  padding: 0 ${p => p.theme.spacing.small};
`

type GridProps = {
  column?: boolean
  brake?: string
}

export const Grid = styled.div<GridProps>`
  width: 100%;
  padding: ${p => p.theme.spacing.medium} 0;
  display: flex;
  flex-flow: ${p => (p.column ? "column" : "row")} wrap;

  @media ${({ theme, brake }) => brake || theme.breakpoints.smallTablet} {
    flex-flow: column;
    padding: ${p => p.theme.spacing.small} 0;
  }
`

type ColProps = {
  flex?: number
  justify?: string
  align?: string
  direction?: string
  row?: boolean
}

export const Col = styled.div<ColProps>`
  height: inherit;
  display: flex;
  flex: ${p => p.flex || 1};
  justify-content: ${p => p.justify || "center"};
  align-items: ${p => p.align || "center"};
  padding: ${p => p.theme.spacing.small};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  min-width: 380px;

  @media ${p => p.theme.breakpoints.mobile} {
    min-width: 100%;
  }

  @media ${p => p.theme.breakpoints.tablet} {
    margin: ${p => p.theme.spacing.small} 0;
  }
`

export const Section = styled.section`
  margin: ${p => p.theme.spacing.xxLarge} 0;

  @media ${p => p.theme.breakpoints.tablet} {
    margin: ${p => p.theme.spacing.large} 0;
  }
`

export const Row = styled.div`
  display: flex;
  align-items: center;
`

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
