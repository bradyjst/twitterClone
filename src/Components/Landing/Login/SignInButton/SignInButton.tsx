import React from "react";
import "./SignInButton.css";

interface SignInButtonProps {
	signInModal: boolean;
	setSignInModal: Function;
}

export const SignInButton: React.FC<SignInButtonProps> = ({
	signInModal,
	setSignInModal,
}) => {
	console.log(`from button`, signInModal);

	return (
		<>
			<button onClick={() => setSignInModal(!signInModal)} className="sign-in">
				Sign in
			</button>
		</>
	);
};
