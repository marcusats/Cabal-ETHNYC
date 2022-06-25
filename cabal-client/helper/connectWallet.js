import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import Web3 from "web3";
import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";
const INFURA_ID =
	"https://mainnet.infura.io/v3/8f36546336664817bc3db0bd4240e3bc";

const provider = new WalletConnectProvider({
	infuraId: INFURA_ID,
});

export const connectWalletConnect = async () => {
	const ethersProvider = new ethers.providers.Web3Provider(provider);
	await provider.enable();
	console.log({ ethersProvider });
	console.log({ provider });

	await provider.qrcodeModal.open();

	// const uri = provider.uri;
	// // display QR Code modal
	// WalletConnectQRCodeModal.open(
	// 	uri,
	// 	() => {
	// 		console.log("QR Code Modal closed");
	// 	},
	// 	true // isNode = true
	// );
	if (!provider.connected) {
		// create new session
	}
	provider.on("accountsChanged", (accounts) => {
		// you can access the accounts here
		console.log({ accounts });
	});
	provider.on("disconnect", (code, reason) => {
		//fired when disconnecting WalletConnect
		console.log(code, reason);
	});
};
export const connectMetamask = async () => {
	try {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const accounts = await provider.send("eth_requestAccounts", []);
		if (accounts.length !== 0) return accounts;
		else return false;
		//ta-da. you now have the accounts, in here you can invoke a function, setState etc
	} catch (error) {
		//do something with the error
		console.log(error);
	}
};
