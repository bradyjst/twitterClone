import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SignUpModal.css";

interface SignUpModalProps {
	signUpModal: boolean;
	setSignUpModal: Function;
}

export const SignUpModal: React.FC<SignUpModalProps> = ({
	signUpModal,
	setSignUpModal,
}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	console.log(username);
	console.log(password);

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
				navigate("/");
			} else {
				console.error("signup failed");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="signup-modal-container">
			<div className="signup-modal">
				<div className="signup-header">
					<div className="signup-close-button-container">
						<button
							onClick={() => setSignUpModal(!SignUpModal)}
							className="close-button"
						>
							<h1 className="close">X</h1>
						</button>
					</div>
					<div className="step-count">
						<span>Step 1 of 5</span>
					</div>
				</div>

				<div className="signup-form-div">
					<span className="sign-in-span">Create your account</span>

					<form className="signup-form">
						{" "}
						<input
							name="username"
							autoComplete="on"
							className="signup-username"
							placeholder="Name"
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							name="password"
							className="signup-password"
							placeholder="Email"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</form>
					<span className="use-phone">
						<a className="use-phone-link" href="www.google.ca">
							Use phone instead
						</a>
					</span>
					<span className="DOB">Date of birth</span>
					<span className="DOB-p">
						This will not be shown publicly. Confirm your own age, even if this
						account is for a business, a pet, or something else.
					</span>
				</div>
			</div>
		</div>
	);
};
