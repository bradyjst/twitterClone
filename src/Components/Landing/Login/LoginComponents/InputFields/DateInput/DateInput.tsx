import React, { useRef } from "react";
import "./DateInput.css";

interface DateInputProps {
	dateSelect: string;
}

export const DateInput: React.FC<DateInputProps> = ({ dateSelect }) => {
	const selectRef = useRef<HTMLSelectElement>(null);
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
	const openDropdown = () => {
		if (selectRef.current) {
			selectRef.current.click();
		}
	};
	return (
		<div className="date-input-container" onClick={openDropdown}>
			{dateSelect === "Month" ? (
				<>
					{" "}
					<label className="date-input-date-select">{dateSelect}</label>
					<select ref={selectRef} className="date-input-select">
						{months.map((month, index) => (
							<option key={index} value={month}>
								{month}
							</option>
						))}
					</select>
				</>
			) : null}
			{dateSelect === "Day" ? (
				<>
					{" "}
					<label className="date-input-date-select">{dateSelect}</label>
					<select ref={selectRef} className="date-input-select">
						{months.map((month, index) => (
							<option key={index} value={month}>
								{month}
							</option>
						))}
					</select>
				</>
			) : null}
			{dateSelect === "Year" ? (
				<>
					{" "}
					<label className="date-input-date-select">{dateSelect}</label>
					<select ref={selectRef} className="date-input-select">
						{months.map((month, index) => (
							<option key={index} value={month}>
								{month}
							</option>
						))}
					</select>
				</>
			) : null}
		</div>
	);
};
