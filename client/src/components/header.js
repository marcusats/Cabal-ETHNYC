import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Logo from "../assets/img/logo.png";
import WalletConnect from "./walletConnect";
import { Button } from "@chakra-ui/react";
export default function Header() {
	const router = useRouter();
	return (
		<header>
			<button className="content" onClick={() => router.push("/")}>
				<Image name={"Logo"} src={Logo} width="30px" height="30px" alt="Logo" />
				<h4>Cabal</h4>
			</button>
			<span className="links">
				<Button variant="text">Documentation</Button>
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
