import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
export default function Home() {
	return (
		<div>
			<div class="content">
				<h1>oAuth For The Open Internet</h1>
				<h5>Authenticate Trustlessly</h5>
				<>
					<Button>Start Developing</Button>
					<Button variant={"outlined"}>Connect Wallet</Button>
				</>
			</div>
		</div>
	);
}
