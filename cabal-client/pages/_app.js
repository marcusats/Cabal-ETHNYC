import { ChakraProvider } from "@chakra-ui/react";
import "../../client/src/styles/index.scss";
import chakraTheme from "../../client/src/styles/chakraTheme";
import { useRouter } from "next/router";
function Root({ Component, pageProps }) {
	const router = useRouter();

	return (
		<div>
			<Component {...pageProps} />
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
