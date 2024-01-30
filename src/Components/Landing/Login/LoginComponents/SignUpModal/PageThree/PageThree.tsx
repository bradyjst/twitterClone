import React, { useState } from "react";
import "./PageThree.css";
import { Header } from "../Header/Header";
import { TextInput } from "../../InputFields/TextInput/TextInput";
import { useNavigate } from "react-router-dom";

interface PageThreeProps {
	setSignUpModal: Function;
	setHandlePage: Function;
	signUpModal: boolean;
	handlePage: number;
	username: string;
	password: string;
	dateOfBirth: {
		day: string;
		month: string;
		year: string;
	};
}

export const PageThree: React.FC<PageThreeProps> = ({
	signUpModal,
	setSignUpModal,
	handlePage,
	setHandlePage,
	username,
	password,
	dateOfBirth,
}) => {
	const [errorMessage2, setErrorMessage2] = useState("");

	const navigate = useNavigate();

	const createUserApi = `http://localhost:8080/users`;

	const handleSignup = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		const userData = {
			username: username,
			password: password,
		};
		try {
			const response = await fetch(createUserApi, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			});

			if (response.ok) {
				navigate("/home");
				setSignUpModal(!signUpModal);
			} else {
				setErrorMessage2("Could not create account. Please try again later.");
				console.error("signup failed");
			}
		} catch (error) {
			console.log(error);
			setErrorMessage2("Could not create account. Please try again later.");
		}
	};

	return (
		<>
			<Header
				{...{
					setSignUpModal,
					setHandlePage,
					handlePage,
					signUpModal,
				}}
			/>
			<div className="page-three-container">
				<span className="signup-sign-in-span">Create your account</span>
				<div onClick={() => setHandlePage(1)}>
					<TextInput
						placeholder="Name"
						autoComplete="on"
						name="Name"
						value={username}
						readOnly={true}
					/>
				</div>
				<div onClick={() => setHandlePage(1)}>
					<TextInput
						placeholder="Password"
						autoComplete="on"
						name="Name"
						value={password}
						readOnly={true}
					/>
				</div>
				<div onClick={() => setHandlePage(1)}>
					<TextInput
						placeholder="Date of Birth"
						autoComplete="on"
						name="Name"
						value={
							dateOfBirth.month +
							" " +
							dateOfBirth.day +
							", " +
							dateOfBirth.year
						}
						readOnly={true}
					/>
				</div>

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
						here
					</a>
					.
				</div>

				{errorMessage2 && <div className="error-message">{errorMessage2}</div>}

				<button
					onClick={(e) => {
						handleSignup(e);
					}}
					className="signup-finish-button"
				>
					Complete Signup
				</button>
			</div>
		</>
	);
};
