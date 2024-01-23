import React from "react";
import "./DateModal.css";

interface MonthModalProps {
	onChange: Function;
}

export const MonthModal: React.FC<MonthModalProps> = ({ onChange }) => {
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
	return (
		<select className="select" onChange={(e) => onChange(e)}>
			{months.map((month, index) => (
				<option key={index} value={month}>
					{month}
				</option>
			))}
		</select>
	);
};
