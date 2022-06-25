import { ChakraProvider } from "@chakra-ui/react";
import "../styles/index.scss";
import chakraTheme from "../styles/chakraTheme";
function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={chakraTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
