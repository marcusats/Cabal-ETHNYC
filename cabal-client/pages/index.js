import { Button } from "@chakra-ui/core";
export default function Home() {
	return (
		<div>
			<button
				onClick={() => {
					console.log("clicked");
				}}>
				Connect Wallet
			</button>
		</div>
	);
}
