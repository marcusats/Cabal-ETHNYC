import { useRouter } from "next/router";
import React, { usMemo } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
export default function ServiceId() {
	const router = useRouter();
	const { serviceId } = router.query;

	const columns = usMemo(() => [
		{ Header: `${serviceId} needs` },
		{ Header: "For" },
	]);
	function Table() {
		return <></>;
	}
	return (
		<div>
			<h2>{serviceId}</h2>
			<Table />
		</div>
	);
}
