import React, { useState, useEffect } from "react";
import { PageOne } from "../PageOne/PageOne";
import { PageTwo } from "../PageTwo/PageTwo";
import { PageThree } from "../PageThree/PageThree";

interface PageParentProps {
	signUpModal: boolean;
	setSignUpModal: Function;
}

export const PageParent: React.FC<PageParentProps> = ({
	signUpModal,
	setSignUpModal,
}) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [day, setDay] = useState("");
	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState({
		month: month,
		day: day,
		year: year,
	});
	const [inputCount, setInputCount] = useState(0);
	const [buttonEnable, setButtonEnable] = useState(false);
	const [handlePage, setHandlePage] = useState(3);

	useEffect(() => {
		setDateOfBirth({ month, day, year });
	}, [day, month, year]);

	console.log(dateOfBirth);

	return (
		<>
			{handlePage === 1 ? (
				<PageOne
					{...{
						signUpModal,
						setSignUpModal,
						handlePage,
						setHandlePage,
						username,
						setUsername,
						email,
						setEmail,
						inputCount,
						setInputCount,
						buttonEnable,
						setButtonEnable,
						day,
						setDay,
						month,
						setMonth,
						year,
						setYear,
					}}
				/>
			) : null}
			{handlePage === 2 ? (
				<PageTwo
					{...{ signUpModal, setSignUpModal, handlePage, setHandlePage }}
				/>
			) : null}
			{handlePage === 3 ? (
				<PageThree
					{...{
						signUpModal,
						setSignUpModal,
						handlePage,
						setHandlePage,
						username,
						email,
						dateOfBirth,
					}}
				/>
			) : null}
		</>
	);
};
