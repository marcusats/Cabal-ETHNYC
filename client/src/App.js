import React, { useState } from "react";
import "./App.css";

function App() {
	const [name, setName] = useState("");
	const [connected, setConnected] = useState(false);
	const [walletAddress, setWalletAddress] = useState("");
	const [loading, setLoading] = useState(false);
	return (
		<div id="app">
			<header>
				<h4>Demo App</h4>
			</header>
			<div id="app-center">
				{loading ? (
					<div>
						{!connected ? (
							<div>
								<h1>Welcome</h1>
								<button onClick={() => {}}>Sign Up With Cabal</button>
							</div>
						) : (
							<div>
								<h1>Welcome {name}</h1>
								<p>{walletAddress}</p>
							</div>
						)}
					</div>
				) : (
					<p>one moment please</p>
				)}
			</div>
		</div>
	);
}

export default App;
