import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

interface SignupProps {}

export const Signup: React.FC<SignupProps> = () => {
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
		<div className="signup-container">
			<form className="signup-form">
				<input
					name="username"
					autoComplete="on"
					className="signup-username"
					placeholder="Choose a username"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>

				<input
					name="password"
					className="signup-password"
					placeholder="Choose a password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button
					className="signup-button"
					type="button"
					onClick={(e) => handleSignup(e)}
				>
					{" "}
					Create Account{" "}
				</button>

				<Link to="/">
					<button className="signup-cancel">Cancel Account Creation</button>
				</Link>
			</form>
		</div>
	);
};
