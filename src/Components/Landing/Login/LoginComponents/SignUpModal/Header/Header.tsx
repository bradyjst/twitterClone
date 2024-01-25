import React from "react";
import "./Header.css";

interface HeaderProps {
	setSignUpModal: Function;
	setHandlePage: Function;
	signUpModal: boolean;
	handlePage: number;
}

export const Header: React.FC<HeaderProps> = ({
	setSignUpModal,
	signUpModal,
	handlePage,
	setHandlePage,
}) => {
	return (
		<div className="signup-header">
			<div className="signup-close-button-container">
				<button className="close-button">
					{handlePage === 1 ? (
						<h1
							onClick={() => setSignUpModal(!signUpModal)}
							className="signup-close"
						>
							X
						</h1>
					) : (
						<h1
							onClick={() => setHandlePage(handlePage - 1)}
							className="signup-close-arrow"
						>
							{"←"}
						</h1>
					)}
				</button>
			</div>
			<div className="step-count">
				<span className="step-count-span">Step {handlePage} of 5</span>
			</div>
		</div>
	);
};
