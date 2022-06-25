import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function SignUp({}) {
	const [data1, setData1] = useState(``);
	const [arrowVisible, setArrowVisible] = useState(false);

	return (
		<div className="page sign-up ">
			<section className="welcome">
				<div className="header">
					<h2 className="fadeIn">Welcome</h2>
					<h4>Let's Get You Set Up</h4>
				</div>
				<div className="content">
					<div className="img-holder">
						<h3 className="white">Img</h3>
					</div>
				</div>

				<div className="footer center">
					<div className="content">
						<h6>You're Only 4 Steps Away From Online Anonymity</h6>
						<a href="#question1">
							<Button
								size={"lg"}
								isFullWidth
								onClick={() => {
									setArrowVisible(true);
									console.log("clicked");
								}}>
								Let's Get Started
							</Button>
						</a>
					</div>
				</div>
			</section>
			<section className="question" id="question1">
				<div className="content">
					<h6 for="data1">Label</h6>
					<Input value={data1} onChange={(e) => setData1(e.target.value)} />
				</div>
			</section>
		</div>
	);
}
