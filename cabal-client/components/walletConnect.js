import React, { useState } from "react";
import WalletConnect from "@walletconnect/client";
import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function WalletConnectButton({ text }) {
	const router = useRouter();
	const [walletId, setWalletId] = useState("");
	const [chainId, setChainId] = useState(0);
	async function handleConnect() {
		console.log("top");
		const walletConnector = new WalletConnect(
			{
				bridge: "https://bridge.walletconnect.org", // Required
			},
			{
				clientMeta: {
					description: "WalletConnect NodeJS Client",
					url: "https://nodejs.org/en/",
					icons: ["https://nodejs.org/static/images/logo.svg"],
					name: "WalletConnect",
				},
			}
		);
		console.log("1");
		// Check if connection is already established
		if (!walletConnector.connected) {
			console.log("2");
			// create new session
			walletConnector.createSession().then(() => {
				// get uri for QR Code modal
				const uri = walletConnector.uri;
				// display QR Code modal
				WalletConnectQRCodeModal.open(
					uri,
					() => {
						console.log("QR Code Modal closed");
					},
					true // isNode = true
				);
			});
		}
		console.log("3");

		// Subscribe to connection events
		walletConnector.on("connect", (error, payload) => {
			console.log("4");
			if (error) {
				throw error;
			}

			// Close QR Code Modal
			WalletConnectQRCodeModal.close(
				true // isNode = true
			);

			// Get provided accounts and chainId
			const { accounts, chainId } = payload.params[0];
			setWalletId(accounts[chainId]); //I think this is how this works, will have to test with two wallets
			console.log({ walletId });
			if (chainId === accounts.length) {
				//this is the first time they're here
				router.push("/signup");
			}
		});

		walletConnector.on("session_update", (error, payload) => {
			console.log("now here");
			if (error) {
				throw error;
			}

			// Get updated accounts and chainId
			const { accounts, chainId } = payload.params[0];
			setWalletId(accounts[chainId]); //I think this is how this works, will have to test with two wallets
		});

		walletConnector.on("disconnect", (error, payload) => {
			if (error) {
				throw error;
			}

			// Delete walletConnector
		});
	}

	return (
		<Button
			onClick={async () => {
				// router.push("/signup");
				await handleConnect();
			}}>
			{text}
		</Button>
	);
}
