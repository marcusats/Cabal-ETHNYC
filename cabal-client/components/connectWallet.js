import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";
import { useEffect, useState } from "react";

export default function ConnectWallet() {
	let web3Modal;
	useEffect(() => {
		web3Modal = new Web3Modal({
			network: "mainnet", // optional
			cacheProvider: true, // optional
			providerOptions: {
				walletconnect: {
					infuraId:
						"https://mainnet.infura.io/v3/ee9d32df64214aa38f4fbb74a77ec18e",
				},
			},
		});
	}, []);
	return (
		<div>
			<button
				onClick={async () => {
					const instance = await web3Modal.connect();
					const provider = new ethers.providers.Web3Provider(instance);
					const signer = provider.getSigner();
					console.log(signer);
				}}>
				Connect Wallet
			</button>
		</div>
	);
}
