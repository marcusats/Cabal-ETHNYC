import React, { useState, useEffect, useContext } from "react";
import { Context } from "../providers/provider";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";
import { ethers} from "ethers"; 
import { useAccount, useConnect, useDisconnect } from 'wagmi';

export default function WalletConnectButton() {
	const router = useRouter();
	const { setWalletId, connected, setConnected } = useContext(Context);
	const [visible, setVisible] = useState(false);
	const [chainId, setChainId] = useState(0);
	const [ethersProvider, setEthersProvider] = useState([]);
	const [account, setAccount] = useState([])
	const { data } = useAccount();

	const getAccounts = async () => {
		
		console.log(data.address);
	}

	return (
		<>
			<ConnectButton />	
			<Button
			onClick={() => {
				getAccounts();
			}}
			></Button>
		</>
	);
}
