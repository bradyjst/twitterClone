import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

export interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("username", username);
		formData.append("password", password);
		try {
			const response = await fetch("http://localhost:8080/api/login", {
				method: "POST",
				body: formData,
			});

			// Handle response based on success or failure
			if (response.ok) {
				navigate("/home");
			} else {
				console.log("login attempt failed");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div className="login-container">
			<form className="login-form">
				<input
					className="username"
					name="username"
					autoComplete="on"
					placeholder="Username..."
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					className="password"
					name="password"
					placeholder="Password..."
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					className="login-button"
					type="button"
					onClick={(e) => handleLogin(e)}
				>
					Go!
				</button>
				<Link to="/signup">
					<h6 className="signup">Not Signed Up?</h6>
				</Link>
			</form>
		</div>
	);
};
