import { createGlobalStyle } from "styled-components"
import { rem } from "../utils/helper"

export default createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body, html {
		font-family: ${props => props.theme.fonts.main};
		background-color: ${props => props.theme.colors.background};
		color: ${props => props.theme.colors.gray};
		text-overflow: ellipsis;
	}

	code {
		font-family: ${props => props.theme.fonts.code};
	}

	h1,h2,h3,h4,h5,h6 {
		color: ${props => props.theme.colors.light};
		font-weight: 900;
		margin: ${props => props.theme.spacing.xSmall} 0;
	}

	&::selection {
    color: #fff;
    background-color: rgba(255,123,123,.7);
	}


	.gatsby-highlight pre {
	border-radius: 10px;
	background-color: ${p => p.theme.colors.dark}
	}

	:-webkit-any(article,aside,nav,section) h1 {
		font-size: 2em;
	}

`
