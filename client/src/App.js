import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Profile from "./pages/profile";

function App() {
	return (
		<BrowserRouter>
			<div id="app">
				<header>
					<h4>Demo App</h4>
				</header>
				<div id="app-center">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/profile" element={<Profile />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
