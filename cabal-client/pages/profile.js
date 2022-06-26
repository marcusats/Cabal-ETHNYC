import React, { useState, useContext } from "react";
import { Image } from "next/image";
import ProfileInfoButton from "../components/profileInfoButton";
import ProfilePicture from "../components/profilePicture";
import { Context } from "../providers/provider";
import SelectNewDataType from "../components/selectNewDataType";
import { Button } from "@chakra-ui/react";

export default function ProfilePage(params) {
	const [name, setName] = useState("");
	const { walletId } = useContext(Context);
	const services = [
		{ name: "Facebook", id: "facebook" },
		{ name: "Github", id: "github" },
		{ name: "Quae", id: "quae" },
		{ name: "Gypsy", id: "gypsy" },
	];
	let informationCards = [
		{
			title: "Name",
			info: "Brendan",
			visible: false,
		},
		{
			title: "Email",
			info: "bprobst1029@gmail.com",
			visible: false,
		},
		{
			title: "Birthday",
			info: "05/04/2000",
			visible: false,
		},
		{
			title: "SSN",
			info: "123-45-6789",
			visible: false,
		},
		{
			title: "Address",
			info: "1 Castle Point Terrace, Hoboken NJ 07030",
			visible: false,
		},
		{ title: "Phone Number", info: "9-11", visible: false },
	];

	return (
		<div class="page profile">
			<div class="header">
				<ProfilePicture size={"lg"} />
				<span>
					<div class="top">
						<h4>Name</h4>
					</div>
					<div class="bottom">
						<p>{walletId}</p>
						{/* icon  to toggle address visible*/}
					</div>
				</span>
			</div>
			<div class="content">
				<div class="buttons">
					{informationCards.map((item, idx) => {
						return <ProfileInfoButton item={item} key={item.title} idx={idx} />;
					})}
				</div>
				<SelectNewDataType />
			</div>
			<div className="manage-access">
				<h2 className="Title">Manage Access</h2>
				<div className="services-container">
					{services.map((item) => {
						return (
							<div className="inlineRow">
								<h3>{item.name}</h3>
								<span>
									<Button
										onClick={() => {
											router.push(`/manageAccess/${item.id}`);
										}}>
										Details
									</Button>
									<Button variant="danger">Revoke</Button>
								</span>
							</div>
						);
					})}
				</div>
			</div>
			<div class="footer"></div>
		</div>
	);
}
