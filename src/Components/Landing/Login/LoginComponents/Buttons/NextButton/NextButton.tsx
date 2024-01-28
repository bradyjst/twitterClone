import React from "react";
import "./NextButton.css";

interface NextButtonProps {
	onClick: Function;
	buttonEnable: boolean;
}

export const NextButton: React.FC<NextButtonProps> = ({
	onClick,
	buttonEnable,
}) => {
	return (
		<button
			onClick={() => onClick()}
			disabled={buttonEnable ? false : true}
			className={
				buttonEnable
					? "signup-next-button-enabled"
					: "signup-next-button-disabled"
			}
		>
			Next
		</button>
	);
};
