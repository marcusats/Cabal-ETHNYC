import React from "react";
// import Cabal from "cabal-js-sdk";
import { CabalClient } from "cabal-js-sdk";
export default function SignUp({}) {
	return (
		<div className="sign-up">
			<section>
				<button
					onClick={() => {
						console.log({ CabalClient });
					}}>
					Sign Up With Cabal
				</button>
			</section>
		</div>
	);
}
