import { Button } from "@chakra-ui/react";

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
		</div>
	);
}
