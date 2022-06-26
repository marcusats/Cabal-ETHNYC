import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Logo from "../assets/img/logo.png";
import WalletConnect from "./walletConnect";
import { Button } from "@chakra-ui/react";
import { Context } from "../providers/provider";
export default function Header() {
	const router = useRouter();
	const { connected } = useContext(Context);
	return (
		<header>
			<button className="content" onClick={() => router.push("/")}>
				<Image name={"Logo"} src={Logo} width="30px" height="30px" alt="Logo" />
				<h4>Cabal</h4>
			</button>
			<Button variant="text">Documentation</Button>
			{connected && (
				<>
					<Button variant="text" onClick={() => router.push("/profile")}>
						Profile
					</Button>
					<Button variant="text" onClick={() => router.push("/manageAccess")}>
						Manage Access
					</Button>
				</>
			)}
			<span className="connect">
				<WalletConnect text={"Connect Wallet"} />
			</span>
		</header>
	);
}
