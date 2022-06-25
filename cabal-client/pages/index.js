import { Button } from "@chakra-ui/react";
import ConnectWallet from "../../client/src/components/connectWallet";

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
