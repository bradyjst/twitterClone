import React, { useEffect } from "react";
import { TextInput } from "../../InputFields/TextInput/TextInput";
import { DateInput } from "../../InputFields/DateInput/DateInput";
import { Header } from "../Header/Header";
import { NextButton } from "../../Buttons/NextButton/NextButton";
import "./PageOne.css";

interface PageOneProps {
	signUpModal: boolean;
	handlePage: number;
	setSignUpModal: Function;
	setHandlePage: Function;
	username: string;
	setUsername: Function;
	password: string;
	setPassword: Function;
	buttonEnable: boolean;
	setButtonEnable: Function;
	inputCount: number;
	setInputCount: Function;
	day: string;
	setDay: Function;
	month: string;
	setMonth: Function;
	year: string;
	setYear: Function;
}

export const PageOne: React.FC<PageOneProps> = ({
	signUpModal,
	setSignUpModal,
	handlePage,
	setHandlePage,
	username,
	setUsername,
	password,
	setPassword,
	buttonEnable,
	setButtonEnable,
	inputCount,
	setInputCount,
	day,
	setDay,
	month,
	setMonth,
	year,
	setYear,
}) => {
	useEffect(() => {
		if (
			username.length > 0 &&
			password.length > 0 &&
			day !== "" &&
			month !== "" &&
			year !== ""
		) {
			setButtonEnable(true);
		}
	}, [username, password, setButtonEnable, day, year, month]);

	const maxLength = 50;

	useEffect(() => {
		setInputCount(username.length);
	}, [username, setInputCount]);

	console.log("month, day, year = ", month, day, year);

	return (
		<>
			<Header {...{ signUpModal, setSignUpModal, handlePage, setHandlePage }} />
			<div className="signup-form-div">
				<span className="signup-sign-in-span">Create your account</span>

				<form className="signup-form">
					{" "}
					<TextInput
						value={username}
						name="username"
						autoComplete="off"
						placeholder="Name"
						maxLength={maxLength}
						inputCount={inputCount}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<TextInput
						value={password}
						name="password"
						autoComplete="off"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
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
						<DateInput
							dateSelect="Month"
							{...{ setDay, setMonth, setYear, day, month, year }}
						/>
					</div>
					<div className="date-subcontainer-2">
						<DateInput
							dateSelect="Day"
							{...{ setDay, setMonth, setYear, day, month, year }}
						/>
					</div>
					<div className="date-subcontainer-3">
						<DateInput
							dateSelect="Year"
							{...{ setDay, setMonth, setYear, day, month, year }}
						/>
					</div>
				</div>
				<NextButton
					buttonEnable={buttonEnable}
					onClick={() => setHandlePage(2)}
				/>
			</div>
		</>
	);
};
