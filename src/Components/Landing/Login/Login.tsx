import React, { useState } from "react";
import "./Login.css";

import { GoogleButton } from "./GoogleButton/GoogleButton";
import { AppleButton } from "./AppleButton/AppleButton";
import { CreateAccount } from "./CreateAccountButton/CreateAccount";
import { SignInButton } from "./SignInButton/SignInButton";
import { Modal } from "./Modal/Modal";
import { Footer } from "./Footer/Footer";

export interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
	const [signInModal, setSignInModal] = useState(false);
	const [signUpModal, setSignUpModal] = useState(false);

	return (
		<>
			<div className="container">
				{signInModal && <Modal {...{ signInModal, setSignInModal }} />}
				{signUpModal && <Modal {...{ signInModal, setSignInModal }} />}

				<div className="container-left">
					<img
						className="x-logo"
						src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
						alt="x logo"
					/>
				</div>

				<div className="container-right">
					<div className="happencontainer">
						<span className="happenspan">Happening now</span>
					</div>
					<div className="joincontainer">
						<span className="joinspan">Join today.</span>
					</div>
					<div className="external-auth">
						<GoogleButton />
						<AppleButton />
					</div>

					<div className="break">
						<div className="line"></div>
						<span className="or">or</span>
						<div className="line"></div>
					</div>

					<div className="internal-auth">
						<CreateAccount {...{ signUpModal, setSignUpModal }} />

						<div className="tos">
							By signing up, you agree to the{" "}
							<a className="tos-links" href="www.google.com">
								Terms of Service
							</a>{" "}
							and{" "}
							<a className="tos-links" href="www.google.coom">
								Privacy Policy
							</a>
							, including{" "}
							<a className="tos-links" href="www.google.com">
								Cookie Use.
							</a>
						</div>
						<div className="sign-in-container">
							<span className="signed-in">Already have an account?</span>
							<SignInButton {...{ signInModal, setSignInModal }} />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
