import React, { useState } from "react";
import "./AppleButton.css";

interface AppleButtonProps {}

export const AppleButton: React.FC<AppleButtonProps> = () => {
	const [noWork, setNoWork] = useState(false);
	return (
		<>
			<button onClick={() => setNoWork(!noWork)} className="applebutton">
				<img
					className="apple-logo"
					src="https://www.edigitalagency.com.au/wp-content/uploads/apple-logo-png-black.png"
					alt="apple logo"
				/>
				Sign up with Apple
			</button>
			{noWork ? (
				<span className="no-work-span">this doesnt work {":("}</span>
			) : null}
		</>
	);
};
