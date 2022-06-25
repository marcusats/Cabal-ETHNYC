import React from "react";
import { Button } from "@chakra-ui/react";

export default function SignUp({}) {
	return (
		<div className="sign-up">
			<div id="test"></div>
			<section>
				<div class="content">
					<h2 className="fadeIn">Welcome</h2>
					<h4>Let's Get You Set Up</h4>
				</div>

				<div class="footer">
					<h6>You're Only 4 Steps Away From Online Anonymity</h6>
					<Button>Let's Get Started</Button>
				</div>
			</section>
		</div>
	);
}
