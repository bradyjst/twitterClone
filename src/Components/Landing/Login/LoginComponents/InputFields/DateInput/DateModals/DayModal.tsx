import React from "react";
import "./DateModal.css";

interface DayModalProps {
	onChange: Function;
}

export const DayModal: React.FC<DayModalProps> = ({ onChange }) => {
	const days = Array.from({ length: 31 }, (_, i) => i + 1);
	return (
		<select className="select" onChange={(e) => onChange(e)}>
			{days.map((day) => (
				<option key={day} value={day}>
					{day}
				</option>
			))}
		</select>
	);
};
