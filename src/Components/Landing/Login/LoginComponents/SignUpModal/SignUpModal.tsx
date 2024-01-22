import React, { useEffect, useState } from "react";
import { TextInput } from "../InputFields/TextInput/TextInput";
import { DateInput } from "../InputFields/DateInput/DateInput";
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
	const [email, setEmail] = useState("");
	const [inputCount, setInputCount] = useState(0);
	const navigate = useNavigate();
	const maxLength = 50;

	console.log(username);
	console.log(email);

	const createUserApi = `http://localhost:8080/users`;

	const handleSignup = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		const userData = {
			username: username,
			password: email,
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

	useEffect(() => {
		setInputCount(username.length);
	}, [username]);

	console.log(inputCount);

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
						<span className="step-count-span">Step 1 of 5</span>
					</div>
				</div>

				<div className="signup-form-div">
					<span className="signup-sign-in-span">Create your account</span>

					<form className="signup-form">
						{" "}
						<TextInput
							value={username}
							name="username"
							autoComplete="on"
							placeholder="Name"
							maxLength={maxLength}
							inputCount={inputCount}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<TextInput
							value={email}
							name="email"
							autoComplete="on"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
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
					<div className="date-container">
						<div className="date-subcontainer-1">
							<DateInput dateSelect="Month" inputSelection="March" />
						</div>
						<div className="date-subcontainer-2">
							<DateInput dateSelect="Day" inputSelection="2" />
						</div>
						<div className="date-subcontainer-3">
							<DateInput dateSelect="Year" inputSelection="2022" />
						</div>
					</div>
				</div>
				<button className="signup-next-button" onClick={() => handleSignup}>
					Next
				</button>
			</div>
		</div>
	);
};
