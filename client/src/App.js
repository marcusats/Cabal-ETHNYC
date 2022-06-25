import "./styles/index.scss";
import chakraTheme from "./styles/chakraTheme";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route, Outlet } from "react-router-dom";
import Landing from "./pages/landing";

function App() {
	return (
		<div className="App">
			<ChakraProvider theme={chakraTheme}>
				<Routes>
					<Route path="/" element={<Landing />}></Route>
				</Routes>
			</ChakraProvider>
		</div>
	);
}

export default App;
