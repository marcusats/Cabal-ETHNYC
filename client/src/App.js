import React from "react";
import Profile from "./pages/profile";
import chakraTheme from "../../cabal-client/styles/chakraTheme";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "../../cabal-client/styles/index.scss";
import Header from "../../cabal-client/components/header";
import Home from "./pages/home";
import SignUp from "./pages/signUp";

function App() {
	return (
		<ChakraProvider theme={chakraTheme}>
			<BrowserRouter>
				<div id="app">
					<Header />
					<div id="app-center">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/signup" element={<SignUp />} />
							{/* <Route path="/profile" element={<Profile />} /> */}
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</ChakraProvider>
	);
}

export default App;
