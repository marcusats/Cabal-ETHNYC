import React from "react";
import Profile from "./pages/profile";
import chakraTheme from "./styles/chakraTheme";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/index.scss";
import Home from "./pages/home";
import Header from "./components/header";

function App() {
	return (
		<ChakraProvider theme={chakraTheme}>
			<BrowserRouter>
				<div id="app">
					<Header />
					<div id="app-center">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/profile" element={<Profile />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</ChakraProvider>
	);
}

export default App;
