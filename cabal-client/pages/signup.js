import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Security from "../assets/signup/security.png";
import Welcome from "../assets/signup/welcome.svg";
import Step1 from "../assets/signup/number-one.png";
import Step2 from "../assets/signup/number-2.png";
import Step3 from "../assets/signup/number-3.png";
import WorldIDLogo from "../assets/sponsors/worldcoin.png";
import { useRouter } from "next/router";
export default function SignUp({}) {
	const router = useRouter();
	const [data1, setData1] = useState(``);
	const [arrowVisible, setArrowVisible] = useState(false);

	const steps = [
		{
			title: "Encrypt",
			description:
				"All data on the Cabal network is encrypted and stored on IPFS ",
			imgSrc: Step1,
			alt: "step 1",
		},
		{
			title: "Grant",
			description:
				"Sign into services by granting access to specific data fields",
			imgSrc: Step2,
			alt: "step 2",
		},
		{
			title: "Revoke",
			description:
				"Revoking access prevents third parties from every accessing your data again",
			imgSrc: Step3,
			alt: "step 3",
		},
	];
	const connections = [
		// {
		// 	title: "World ID",
		// 	description: "Add PPPoPP to your cabal identity",
		// 	imgSrc: WorldIDLogo,
		// 	imgAlt: "world Id logo",
		// 	url: "/data/addWorldIDLogo",
		// },
		{
			title: "World ID",
			description: "Add PPPoPP to your cabal identity",
			imgSrc: WorldIDLogo,
			imgAlt: "world Id logo",
			url: "/data/addWorldIDLogo",
		},
	];
	return (
		<div className="page sign-up ">
			<section className="welcome">
				<div className="content">
					<div class="text">
						<h2 className="fadeIn">Welcome</h2>
						<h4>Let's Get You Set Up</h4>
					</div>
					<div class="img-container">
						<Image
							name={"Security"}
							src={Welcome}
							width="350px"
							height="300px"
							alt="Security"
							className="welcome-img"
						/>
					</div>
				</div>

				<div className="footer center">
					<div className="footer-content">
						<a href="#how-it-works">
							<Button size={"lg"} isFullWidth>
								Let's Get Started
							</Button>
						</a>
					</div>
				</div>
			</section>
			<section className="steps" id="how-it-works">
				<div class="content">
					<div class="text">
						<h2>Your Data Is Yours</h2>
						<h6>Control Who Accesses It</h6>
						<div class="steps">
							{steps.map((item) => {
								return (
									<div className="step">
										<div class="header">
											<Image
												name={"number"}
												src={item.imgSrc}
												width={"40px"}
												height={"40px"}
												alt={item.alt}
											/>
											<h3>{item.title}</h3>
										</div>
										<span>
											<p>{item.description}</p>
										</span>
									</div>
								);
							})}
						</div>
					</div>
					<div class="img-container">
						<Image
							name={"Security"}
							src={Security}
							width="250px"
							height="230px"
							alt="Security"
						/>
					</div>
				</div>
				<div class="footer center">
					<div className="footer-content">
						<a href="#get-started">
							<Button size="lg" isFullWidth>
								Protect Your Data Today
							</Button>
						</a>
					</div>
				</div>
			</section>

			<section class="get-started" id="get-started">
				<div class="header"></div>
				<div class="content">
					<div class="text">
						<h2>Add A little More About You</h2>

						<div class="connections">
							{connections.map((item) => {
								return (
									<button
										class="connection"
										onClick={() => {
											router.push(item.url);
										}}>
										<h4>{item.title}</h4>
										<div class="img-container">
											<Image
												name={"connection"}
												src={item.imgSrc}
												width="75px"
												height="75px"
												alt={item.alt}
											/>
										</div>

										<div class="text">
											<p>{item.description}</p>
										</div>
									</button>
								);
							})}
						</div>
					</div>
				</div>
				<div class="footer center">
					<div class="footer-content">
						<Button
							variant="outlined"
							onClick={() => {
								router.push("/");
							}}>
							Set Up Later
						</Button>
					</div>
				</div>
			</section>
			<section>
				<div class="header"></div>
				<div class="content">
					<div class="text"></div>
					<div class="img-container"></div>
				</div>
				<div class="footer center">
					<div class="footer-content"></div>
				</div>
			</section>
		</div>
	);
}
