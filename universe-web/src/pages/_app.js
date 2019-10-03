import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

const theme = {
	colors: {
		primary: "#484848",
		secondary: "#767676",
		accent: "#0070f3",
		error: "#ff5a5f",
		fg: "#ffffff",
		bg: "#f6f6f6"
	}
};

const GlobalStyle = createGlobalStyle`
	/* global stuff */
	h1, h2, h3, h4, h5, h6 {

	}

	#__next  {
		
	}
`;

export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Normalize />
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Component {...pageProps} />
				</ThemeProvider>
			</>
		);
	}
}
