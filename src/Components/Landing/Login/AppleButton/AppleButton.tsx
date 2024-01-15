import React from "react";
import "./AppleButton.css";

interface AppleButtonProps {}

export const AppleButton: React.FC<AppleButtonProps> = () => {
	return (
		<button className="applebutton">
			<img
				className="apple-logo"
				src="https://www.edigitalagency.com.au/wp-content/uploads/apple-logo-png-black.png"
				alt="apple logo"
			/>
			Sign up with Apple
		</button>
	);
};
