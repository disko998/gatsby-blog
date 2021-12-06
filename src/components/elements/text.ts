import styled from "styled-components"

interface IText {
  color?: string
  size?: string
  weight?: string
  display?: string
  margin?: string
  padding?: string
  align?: string
}

export const Text = styled.div<IText>`
  color: ${({ theme, color }) => color || theme.colors.light};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  display: ${({ display }) => display || "block"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  text-align: ${({ align }) => align || "left"};
`
