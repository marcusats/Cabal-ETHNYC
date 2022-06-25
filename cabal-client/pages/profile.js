import React, { useState, useContext } from "react";
import { Image } from "next/image";
import ProfileInfoButton from "../../components/profileInfoButton";
import ProfilePicture from "../../components/profilePicture";
import { Context } from "../../providers/provider";

export default function ProfilePage(params) {
	const [name, setName] = useState("");
	const { walletId } = useContext(Context);

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
						return <ProfileInfoButton item={item} key={item.title} />;
					})}
				</div>
			</div>
			<div class="footer"></div>
		</div>
	);
}
