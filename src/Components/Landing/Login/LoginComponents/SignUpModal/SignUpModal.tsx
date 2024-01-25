import React, { useState } from "react";
import { PageOne } from "./PageOne/PageOne";
import { PageTwo } from "./PageTwo/PageTwo";

import "./SignUpModal.css";

interface SignUpModalProps {
	signUpModal: boolean;
	setSignUpModal: Function;
}

export const SignUpModal: React.FC<SignUpModalProps> = ({
	setSignUpModal,
	signUpModal,
}) => {
	const [handlePage, setHandlePage] = useState(1);

	return (
		<div className="signup-modal-container">
			<div className="signup-modal">
				{handlePage === 1 ? (
					<PageOne
						{...{ signUpModal, setSignUpModal, handlePage, setHandlePage }}
					/>
				) : null}
				{handlePage === 2 ? (
					<PageTwo
						{...{ signUpModal, setSignUpModal, handlePage, setHandlePage }}
					/>
				) : null}
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
