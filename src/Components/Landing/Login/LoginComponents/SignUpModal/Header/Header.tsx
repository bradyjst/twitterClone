import React from "react";
import "./Header.css";

interface HeaderProps {
	setSignUpModal: Function;
	signUpModal: boolean;
}

export const Header: React.FC<HeaderProps> = ({
	setSignUpModal,
	signUpModal,
}) => {
	return (
		<div className="signup-header">
			<div className="signup-close-button-container">
				<button
					onClick={() => setSignUpModal(!signUpModal)}
					className="close-button"
				>
					<h1 className="close">X</h1>
				</button>
			</div>
			<div className="step-count">
				<span className="step-count-span">Step 1 of 5</span>
			</div>
		</div>
	);
};
