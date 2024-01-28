import React from "react";
import "./PageThree.css";
import { Header } from "../Header/Header";
import { TextInput } from "../../InputFields/TextInput/TextInput";

interface PageThreeProps {
	setSignUpModal: Function;
	setHandlePage: Function;
	signUpModal: boolean;
	handlePage: number;
}

export const PageThree: React.FC<PageThreeProps> = ({
	signUpModal,
	setSignUpModal,
	handlePage,
	setHandlePage,
}) => {
	return (
		<>
			<Header {...{ setSignUpModal, setHandlePage, handlePage, signUpModal }} />
			<div className="page-three-container">
				<span className="signup-sign-in-span">Create your account</span>
				<TextInput
					placeholder="Name"
					autoComplete="on"
					name="Name"
					value=""
					onChange={(e) => setHandlePage(e)}
				/>
				<TextInput
					placeholder="Email"
					autoComplete="on"
					name="Name"
					value=""
					onChange={(e) => setHandlePage(e)}
				/>
				<TextInput
					placeholder="Date of Birth"
					autoComplete="on"
					name="Name"
					value=""
					onChange={(e) => setHandlePage(e)}
				/>

				<div className="signup-clause">
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
					phone number for purposes outlined in our Privacy Policy, like keeping
					your account secure and personalizing our services, including ads.{" "}
					<a className="signup-links" href="http://localhost:3000/">
						{" "}
						Learn more
					</a>{" "}
					Others will be able to find you by email or phone number, when
					provided, unless you choose otherwise{" "}
					<a className="signup-links" href="http://localhost:3000/">
						here{" "}
					</a>
					.
				</div>
			</div>
		</>
	);
};
