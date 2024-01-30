import React from "react";

import "./SignUpModal.css";
import { PageParent } from "./PageParent/PageParent";

interface SignUpModalProps {
	signUpModal: boolean;
	setSignUpModal: Function;
}

export const SignUpModal: React.FC<SignUpModalProps> = ({
	setSignUpModal,
	signUpModal,
}) => {
	return (
		<div className="signup-modal-container">
			<div className="signup-modal">
				<PageParent {...{ setSignUpModal, signUpModal }} />
			</div>
		</div>
	);
};
