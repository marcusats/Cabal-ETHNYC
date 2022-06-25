import dynamic from "next/dynamic";

export default function AddWorldId() {
	const WorldIdComponent = dynamic(
		() => {
			return import("../../noSsr/addWorldId");
		},
		{ ssr: false }
	);
	return (
		<>
			<WorldIdComponent />
		</>
	);
}
