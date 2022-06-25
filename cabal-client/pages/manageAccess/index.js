import React from "react";
import { useRouter } from "next/router";

export default function ManageAccess() {
	const router = useRouter();

	return (
		<div>
			<h2>Manage Access</h2>
			<button
				onClick={() => {
					router.push("/manageAccess/glah");
				}}>
				<p>go to "glah"</p>
			</button>
		</div>
	);
}
