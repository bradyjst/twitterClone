import React from "react";
import "./PageTwo.css";
import { Header } from "../Header/Header";

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
			<span className="signup-customize-span">Customize Your Experience</span>
			<span>Track where you see X content across the web</span>
			<label>
				<div>
					X uses this data to personalize your experience. This web browsing
					history will never be stored with your name, email, or phone number.
				</div>
				<div>
					<input type="checkbox" />
				</div>
			</label>
		</>
	);
};
