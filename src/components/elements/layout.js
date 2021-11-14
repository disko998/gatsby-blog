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

export const Grid = styled.div`
  width: 100%;
  padding: ${p => p.theme.spacing.medium} 0;
  display: flex;
  flex-flow: ${p => (p.column ? "column" : "row")} wrap;

  @media ${p => p.theme.breakpoints.mobile} {
    flex-flow: column;
    padding: ${p => p.theme.spacing.small} 0;
  }
`

// type ColProps = {
//   flex?: number
//   justify?: string
//   align?: string
//   direction?: string
// }

export const Col = styled.div`
  height: inherit;
  display: flex;
  flex: ${p => p.flex || 1};
  min-width: ${p => p.theme.layouts.minColWidth};
  justify-content: ${p => p.justify || "center"};
  align-items: ${p => p.align || "center"};
  padding: ${p => p.theme.spacing.small};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
`

export const Section = styled.section`
  margin: ${p => p.theme.spacing.xxLarge} 0;
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
