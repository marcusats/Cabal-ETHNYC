import { Button } from "@chakra-ui/core";
export default function Home() {
	return (
		<div className="page">
			<button
				onClick={() => {
					console.log("clicked");
				}}>
				Connect Wallet
			</button>
		</div>
	);
}
