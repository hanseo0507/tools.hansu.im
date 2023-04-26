import React from "react";
import { Global, css } from "@emotion/react";

const globalStyle = css`
	* {
		box-sizing: border-box;
	}

	html {
		font-size: 10px;
	}

	html,
	body,
	#root {
		width: 100%;
		height: 100%;
	}

	#root {
		font-size: 1.6rem;
		font-family: "SUIT", sans-serif;
		letter-spacing: -0.03em;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
	}
`;

export const GlobalStyle: React.FC = () => <Global styles={[globalStyle]} />;
