import React from "react";
import Logo from "../assets/img/logo.png";
import { Button } from "@chakra-ui/react";
import WalletConnect from "./walletConnect";
export default function Header() {
	return (
		<header>
			<span className="content">
				<img src={Logo} />
				<h4>Cabal</h4>
			</span>
			<span className="links">
				<WalletConnect text={"Connect Wallet"} />
				{/* <Button variant="contained">Connect Wallet</Button> */}
				{/* <Link to="/">
					<h6>Home</h6>
				</Link>
				<Link to="/profile">
					<h6>Profile</h6>
				</Link> */}
			</span>
		</header>
	);
}
