import React from "react";
import "./DateInput.css";

interface DateInputProps {
	dateSelect: string;
	inputSelection: string | number;
}

export const DateInput: React.FC<DateInputProps> = ({
	dateSelect,
	inputSelection,
}) => {
	return (
		<div className="date-input-container">
			<div className="date-input-date-select-container">
				<div className="date-input-date-select">{dateSelect}</div>
				<div className="date-input-selection">{inputSelection}</div>
			</div>
			<div className="date-input-v">V</div>
		</div>
	);
};
