import React, { useState, useContext } from "react";
import ProfileInfoButton from "../components/profileInfoButton";
import ProfilePicture from "../components/profilePicture";
import { Context } from "../providers/provider";

import ManageAccess from "../components/manageAccess";

export default function ProfilePage({}) {
	const { walletId } = useContext(Context);

	let informationCards = [
		{
			title: "Name",
			value: "",
			visible: false,
		},
		// {
		//   title: "Email",
		//   value: "bprobst1029@gmail.com",
		//   visible: false,
		// },
		// {
		//   title: "Birthday",
		//   value: null,
		//   visible: false,
		// },
		// {
		//   title: "SSN",
		//   value: "123-45-6789",
		//   visible: false,
		// },
		// {
		//   title: "Address",
		//   value: "1 Castle Point Terrace, Hoboken NJ 07030",
		//   visible: false,
		// },
		// { title: "Phone Number", value: "9-11", visible: false },
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
					</div>
				</span>
			</div>
			<div class="content">
				<div class="buttons">
					{informationCards.map((item, idx) => {
						return <ProfileInfoButton item={item} key={item.title} idx={idx} />;
					})}
				</div>
			</div>
			<ManageAccess />
		</div>
	);
}
