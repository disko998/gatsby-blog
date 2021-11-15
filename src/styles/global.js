import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
	
	
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body, html {
		font-family: ${props => props.theme.fonts.main};
		background-color: ${props => props.theme.colors.background};
		color: ${props => props.theme.colors.text};
		text-overflow: ellipsis;
	}

	code {
		font-family: ${props => props.theme.fonts.code} !important;
	}

	h1,h2,h3,h4,h5,h6 {
		color: ${props => props.theme.colors.light};
		font-weight: 900;
		margin: ${props => props.theme.spacing.xSmall} 0;
	}

	&::selection {
    color: ${p => p.theme.colors.light};
    background-color:  ${p => p.theme.colors.selection};
	}


	.gatsby-highlight pre {
	border-radius: 10px;
	background-color: ${p => p.theme.colors.dark}
	}

	:-webkit-any(article,aside,nav,section) h1 {
		font-size: 2em;
	}

	hr {
		border: 0;
    	height: 1px;
		border-radius: 16px;
    	background: ${p => p.theme.colors.gray};
	}

`

export const LoadFonts = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
`
