import React from "react";
import { useNavigate } from "react-router";
export default function Home() {
	const navigate = useNavigate();
	return (
		<div>
			<h2>Welcome</h2>
			<button
				onClick={() => {
					navigate("/signup");
				}}>
				Sign Up
			</button>
		</div>
	);
}
