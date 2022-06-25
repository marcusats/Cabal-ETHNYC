import React from "react";
import { Button, FormControl, Input } from "@chakra-ui/react";
export default function Home() {
	return (
		<div>
			<div className="content">
				<h1>oAuth For The Open Internet</h1>
				<h5>Authenticate Trustlessly</h5>
				<FormControl>
					<Input placeholder="hi" />
				</FormControl>
				<>
					<Button>Start Developing</Button>
					<Button variant={"outlined"}>Connect Wallet</Button>
				</>
			</div>
		</div>
	);
}
