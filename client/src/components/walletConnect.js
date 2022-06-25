import React, { useState } from "react";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";
export default function WalletConnectButton({ text }) {
	const router = useNavigate();
	const [walletId, setWalletId] = useState("");
	const [chainId, setChainId] = useState(0);
	async function handleConnect() {
		// Create a connector
		const connector = new WalletConnect({
			bridge: "https://bridge.walletconnect.org", // Required
			qrcodeModal: QRCodeModal,
		});

		// Check if connection is already established
		if (!connector.connected) {
			// create new session
			connector.createSession();
		}

		// Subscribe to connection events
		connector.on("connect", (error, payload) => {
			if (error) {
				throw error;
			}

			// Get provided accounts and chainId
			const { accounts, chainId } = payload.params[0];
			setWalletId(accounts[chainId]); //I think this is how this works, will have to test with two wallets
			if (chainId === accounts.length) {
				//this is the first time they're here
				router.push("/signup");
			}
		});

		connector.on("session_update", (error, payload) => {
			if (error) {
				throw error;
			}

			// Get updated accounts and chainId
			const { accounts, chainId } = payload.params[0];
			setWalletId(accounts[chainId]); //I think this is how this works, will have to test with two wallets
		});

		connector.on("disconnect", (error, payload) => {
			if (error) {
				throw error;
			}

			// Delete connector
		});
	}

	return <Button onClick={async () => await handleConnect()}>{text}</Button>;
}
