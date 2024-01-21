import React from "react";
import "./CreateAccount.css";

interface CreateAccountProps {
	signUpModal: boolean;
	setSignUpModal: Function;
}

export const CreateAccount: React.FC<CreateAccountProps> = ({
	signUpModal,
	setSignUpModal,
}) => {
	return (
		<button
			onClick={() => setSignUpModal(!signUpModal)}
			className="create-account"
		>
			Create account
		</button>
	);
};
