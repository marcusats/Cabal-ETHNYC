import { useMemo, useState } from "react";

const AllData = () => {
	const [walletId, setWalletId] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);

	const provider = useMemo(
		() => ({
			loggedIn,
			setLoggedIn,
			walletId,
			setWalletId,
		}),
		[walletId, setWalletId, setLoggedIn, loggedIn]
	);
	return provider;
};

export default AllData;
