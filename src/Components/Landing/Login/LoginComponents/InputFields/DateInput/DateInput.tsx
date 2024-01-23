import React, { useState } from "react";
import "./DateInput.css";

interface DateInputProps {
	dateSelect: string;
}

export const DateInput: React.FC<DateInputProps> = ({ dateSelect }) => {
	const [inFocus, setInFocus] = useState(false);
	const days = Array.from({ length: 31 }, (_, i) => i + 1);
	const endYear = new Date().getFullYear();
	const startYear = 1900;
	const years = Array.from(
		{ length: endYear - startYear + 1 },
		(_, i) => i + startYear
	);
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const determineDivClass = () => {
		if (inFocus) {
			return "date-input-container-blue";
		}
		return "date-input-container";
	};

	const determineLabelClass = () => {
		if (inFocus) {
			return "date-input-date-select-blue";
		}
		return "date-input-date-select";
	};

	const handleFocus = () => setInFocus(true);
	const handleBlur = () => setInFocus(false);

	return (
		<div className="date-input-container">
			{dateSelect === "Month" ? (
				<div
					className={determineDivClass()}
					onFocus={handleFocus}
					onBlur={handleBlur}
				>
					{" "}
					<div className="date-input-v-container">
						<div className="date-input-label-container">
							<label className={determineLabelClass()}>{dateSelect}</label>
							<select className="date-input-select">
								<option value="" disabled selected></option>
								{months.map((month, index) => (
									<option key={index} value={month}>
										{month}
									</option>
								))}
							</select>
						</div>
						<div className="date-input-v">V</div>
					</div>
				</div>
			) : null}
			{dateSelect === "Day" ? (
				<div
					className={determineDivClass()}
					onFocus={handleFocus}
					onBlur={handleBlur}
				>
					{" "}
					<div className="date-input-v-container">
						<div className="date-input-label-container">
							<label className={determineLabelClass()}>{dateSelect}</label>
							<select className="date-input-select">
								<option value="" disabled selected></option>
								{days.map((day) => (
									<option key={day} value={day}>
										{day}
									</option>
								))}
							</select>
						</div>
						<div className="date-input-v">V</div>
					</div>
				</div>
			) : null}
			{dateSelect === "Year" ? (
				<div
					className={determineDivClass()}
					onFocus={handleFocus}
					onBlur={handleBlur}
				>
					{" "}
					<div className="date-input-v-container">
						<div className="date-input-label-container">
							<label className={determineLabelClass()}>{dateSelect}</label>
							<select className="date-input-select">
								<option value="" disabled selected></option>
								{years.map((year) => (
									<option key={year} value={year}>
										{year}
									</option>
								))}
							</select>
						</div>
						<div className="date-input-v">V</div>
					</div>
				</div>
			) : null}
		</div>
	);
};
