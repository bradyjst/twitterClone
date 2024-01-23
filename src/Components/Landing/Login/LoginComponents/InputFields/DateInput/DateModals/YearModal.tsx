import React from "react";
import "./DateModal.css";

interface YearModalProps {
	onChange: Function;
}

export const YearModal: React.FC<YearModalProps> = ({ onChange }) => {
	const endYear = new Date().getFullYear();
	const startYear = 1900;
	const years = Array.from(
		{ length: endYear - startYear + 1 },
		(_, i) => i + startYear
	);
	return (
		<select className="select" onChange={(e) => onChange(e)}>
			{years.map((year) => (
				<option key={year} value={year}>
					{year}
				</option>
			))}
		</select>
	);
};
