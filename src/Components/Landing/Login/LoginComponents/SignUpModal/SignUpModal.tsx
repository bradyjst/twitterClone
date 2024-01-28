import React from "react";

import "./SignUpModal.css";
import { PageParent } from "./PageParent/PageParent";

interface SignUpModalProps {
	signUpModal: boolean;
	setSignUpModal: Function;
}

export const SignUpModal: React.FC<SignUpModalProps> = ({
	setSignUpModal,
	signUpModal,
}) => {
	return (
		<div className="signup-modal-container">
			<div className="signup-modal">
				<PageParent {...{ setSignUpModal, signUpModal }} />
			</div>
		</div>
	);
};

// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

// const createUserApi = `http://localhost:8080/users`;

// const handleSignup = async (
// 	e: React.MouseEvent<HTMLButtonElement, MouseEvent>
// ) => {
// 	e.preventDefault();
// 	const userData = {
// 		username: username,
// 		password: email,
// 	};
// 	try {
// 		const response = await fetch(createUserApi, {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify(userData),
// 		});

// 		if (response.ok) {
// 			navigate("/");
// 		} else {
// 			console.error("signup failed");
// 		}
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
