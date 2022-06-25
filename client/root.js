import chakraTheme from "./styles/chakraTheme";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile";
import "./styles/index.scss";

export default function Root() {
	return (
		<BrowserRouter>
			<ChakraProvider theme={chakraTheme}>
				<Routes>
					<Route path="/profile" element={<Profile />} />
					<Route path="/" element={<App />} />
				</Routes>
			</ChakraProvider>
		</BrowserRouter>
	);
}
