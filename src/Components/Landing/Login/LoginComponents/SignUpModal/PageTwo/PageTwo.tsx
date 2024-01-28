import React from "react";
import "./PageTwo.css";
import { Header } from "../Header/Header";
import { NextButton } from "../../Buttons/NextButton/NextButton";

interface PageTwoProps {
	setSignUpModal: Function;
	setHandlePage: Function;
	signUpModal: boolean;
	handlePage: number;
}

export const PageTwo: React.FC<PageTwoProps> = ({
	setSignUpModal,
	signUpModal,
	handlePage,
	setHandlePage,
}) => {
	return (
		<>
			<Header {...{ setSignUpModal, signUpModal, handlePage, setHandlePage }} />
			<div className="signup-customize-container">
				<div className="signup-customize-span">Customize Your Experience</div>
				<div className="signup-track-div">
					Track where you see X content across the web
				</div>
				<label className="signup-personalize-label">
					<div className="signup-personalize-div">
						X uses this data to personalize your experience. This web browsing
						history will never be stored with your name, email, or phone number.
					</div>
					<div>
						<input className="signup-checkbox-page-two" type="checkbox" />
					</div>
				</label>
				<div className="signup-policy-div">
					By signing up, you agree to our
					<a className="signup-links" href="http://localhost:3000/">
						{" "}
						Terms
					</a>
					,{" "}
					<a className="signup-links" href="http://localhost:3000/">
						Privacy Policy
					</a>
					, and{" "}
					<a className="signup-links" href="http://localhost:3000/">
						{" "}
						Cookie Use
					</a>
					. X may use your contact information, including your email address and
					phone number for purposes outlined in our Privacy Policy.{" "}
					<a className="signup-links" href="http://localhost:3000/">
						{" "}
						Learn more
					</a>
				</div>
				<NextButton buttonEnable onClick={() => setHandlePage(3)} />
			</div>
		</>
	);
};
