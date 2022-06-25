import React, { useEffect, useContext } from "react";
import { ChakraProvider, useToast } from "@chakra-ui/react";
import "../styles/index.scss";
import chakraTheme from "../styles/chakraTheme";
import Header from "../components/header";
import { Context, Provider } from "../providers/provider";
import { Toaster } from "react-hot-toast";
import { connectMetamask, connectWalletConnect } from "../helper/connectWallet";
function Root({ Component, pageProps }) {
	const toast = useToast();
	const { walletId, setWalletId, setLoggedIn, loggedIn } = useContext(Context);
	const autoConnect = async () => {
		let metaMask = await connectMetamask();
		if (metaMask) {
			console.log(metaMask);
			setWalletId(metaMask[0]);
			// setLoggedIn(true);
			toast({
				title: "Welcome Back",
				description: "",
				status: "info",
				duration: 5000,
				isClosable: true,
				position: "top",
			});
		} else {
			console.log("wallet not connected");
		}
	};
	useEffect(() => {
		console.log("here");
		autoConnect();
	}, []);

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
function App({ Component, pageProps }) {
	return (
		<Provider>
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={8}
				containerClassName=""
				containerStyle={{}}
				toastOptions={{
					className: "toaster",
					duration: 5000,
					style: {},
				}}
			/>
			<ChakraProvider theme={chakraTheme}>
				<Root Component={Component} pageProps={pageProps} />
			</ChakraProvider>
		</Provider>
	);
}

export default App;
