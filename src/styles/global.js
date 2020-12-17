import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body, html {
		font-family: ${props => props.theme.fonts.main};
		height: 100%;
		background-color: ${props => props.theme.colors.light};
	}

	code {
		font-family: ${props => props.theme.fonts.code};
	}
`
