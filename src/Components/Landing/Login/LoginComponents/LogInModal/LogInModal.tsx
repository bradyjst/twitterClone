import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleButton } from "../Buttons/GoogleButton/GoogleButton";
import { AppleButton } from "../Buttons/AppleButton/AppleButton";

import "./LogInModal.css";
import { TextInput } from "../InputFields/TextInput/TextInput";

interface LogInModalProps {
	signInModal: boolean;
	setSignInModal: Function;
	signUpModal: boolean;
	setSignUpModal: Function;
}

export const LogInModal: React.FC<LogInModalProps> = ({
	signInModal,
	setSignInModal,
	signUpModal,
	setSignUpModal,
}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const navigate = useNavigate();

	const loginEndpoint = `http://localhost:8080/login`;

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const userData = {
			username,
			password,
		};
		try {
			const response = await fetch(loginEndpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			});

			if (response.ok) {
				navigate("/home");
			} else {
				setErrorMessage("Login attempt failed. Please try again.");
			}
		} catch (error) {
			console.error("Error:", error);
			setErrorMessage("An error occurred. Please try again later.");
		}
	};

	return (
		<div className="modal-container">
			<div className="modal">
				<div className="login-header">
					<div className="close-button-container">
						<button
							onClick={() => setSignInModal(!signInModal)}
							className="close-button"
						>
							<h1 className="close">X</h1>
						</button>
					</div>
					<div className="header-logo-container">
						<img
							className="header-logo"
							src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
							alt="X Logo"
						/>
					</div>
				</div>

				<div className="login-container">
					<span className="sign-in-span">Sign in to X</span>

					<div className="google-container">
						<GoogleButton />
					</div>
					<div className="apple-container">
						<AppleButton />
					</div>
					<div className="si-break">
						<div className="si-line"></div>
						<span className="si-or">or</span>
						<div className="si-line"></div>
					</div>
					<form className="login-form" onSubmit={handleLogin}>
						<TextInput
							placeholder="Username"
							value={username}
							name={"username"}
							autoComplete={"off"}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<TextInput
							placeholder="Password"
							value={password}
							name={"password"}
							autoComplete={"off"}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button className="login-button" type="submit">
							Sign in
						</button>
						{errorMessage && (
							<div className="error-message">{errorMessage}</div>
						)}
						<div className="no-account-div">
							<span className="no-account-span">Don't have an account?</span>

							<h6
								onClick={() => {
									setSignInModal(!signInModal);
									setSignUpModal(!signUpModal);
								}}
								className="signup"
							>
								Sign up
							</h6>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
