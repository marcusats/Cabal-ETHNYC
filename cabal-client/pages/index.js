import React from "react";
import { Button, FormControl, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
export default function Home() {
	const router = useRouter();
	return (
		<div>
			<div className="content">
				<h1>oAuth For The Open Internet</h1>
				<h5>Authenticate Trustlessly</h5>

				<>
					<Button>Start Developing</Button>
					<Button>Connect Wallet</Button>
					<Button onClick={() => router.push("/profile")}>Profile</Button>
					<Button onClick={() => router.push("/signup")}>Sign Up</Button>
					<Button onClick={() => router.push("/manageAccess")}>
						Manage Access
					</Button>
				</>
			</div>
		</div>
	);
}
