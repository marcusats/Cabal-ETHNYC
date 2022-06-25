import React, { useState, useEffect } from "react";
import worldID from "@worldcoin/id"; // If you installed the JS package as a module

export default function AddWorldId() {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		worldID.init("world-id-container", {
			enable_telemetry: true,
			action_id: "wid_staging_fMY8wNIw2AKLjcb7tVyI", // <- use the address from the Developer Portal
			signal: "your_signal_here",
		});

		document.addEventListener("DOMContentLoaded", async () => {
			try {
				const result = await worldID.enable();
				console.log("World ID verified successfully:", result);
			} catch (failure) {
				console.warn("World ID verification failed:", failure);
				// Re-activate here so your end user can try again
			}
		});
		setLoading(false);
		return document.removeEventListener("DOMContentLoaded", () =>
			console.log("eventlistener removed")
		);
	}, []);

	return (
		<div className="page">
			<h2>Add Your World Id</h2>
			{loading ? (
				<div>loading</div>
			) : (
				<div id="world-id-container">
					<div class="world-id"></div>
				</div>
			)}
		</div>
	);
}
