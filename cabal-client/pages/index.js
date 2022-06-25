import { Button } from "@chakra-ui/react";
import ConnectWallet from "../components/connectWallet";

export default function Home() {
	return (
		<div className="page">
			<Button
				variant="contained"
				onClick={() => {
					console.log("clicked");
				}}>
				Connect Wallet
			</Button>
			<ConnectWallet />
		</div>
	);
}
