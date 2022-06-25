import { ChakraProvider } from "@chakra-ui/react";
import "../styles/index.scss";
import chakraTheme from "../styles/chakraTheme";
import Header from "../components/header";
function Root({ Component, pageProps }) {
	return (
		<div id="app">
			<div id="header">
				<Header />
			</div>
			<div id="app-center">
				<Component {...pageProps} />
			</div>
		</div>
	);
}
function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={chakraTheme}>
			<Root Component={Component} pageProps={pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
