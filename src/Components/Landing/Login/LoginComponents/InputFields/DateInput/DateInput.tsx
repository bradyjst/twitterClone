import React, { useState } from "react";
import "./DateInput.css";
import { YearModal } from "./DateModals/YearModal";
import { DayModal } from "./DateModals/DayModal";
import { MonthModal } from "./DateModals/MonthModal";

interface DateInputProps {
	dateSelect: string;
}

export const DateInput: React.FC<DateInputProps> = ({ dateSelect }) => {
	const [modalSelect, setModalSelect] = useState("");
	const [day, setDay] = useState(1);
	const [month, setMonth] = useState("January");
	const [year, setYear] = useState(2020);

	const endYear = new Date().getFullYear();
	const startYear = 1900;
	const years = Array.from(
		{ length: endYear - startYear + 1 },
		(_, i) => i + startYear
	);

	return (
		<>
			{/* {modalSelect === "Year" ? (
				<select className="date-input-container-select">
					<div className="date-select-modal">
						<YearModal
							onChange={(e: {
								target: { value: React.SetStateAction<number> };
							}) => setYear(e.target.value)}
						/>
					</div>
				</select>
			) : null} */}
			{/* 
			{modalSelect === "Day" ? (
				<div className="date-select-modal">
					<DayModal
						onChange={(e: {
							target: { value: React.SetStateAction<number> };
						}) => setDay(e.target.value)}
					/>
				</div>
			) : null}
			{modalSelect === "Month" ? (
				<div className="date-select-modal">
					<MonthModal
						onChange={(e: {
							target: { value: React.SetStateAction<string> };
						}) => setMonth(e.target.value)}
					/>
				</div>
			) : null} */}
			<div
				onClick={() => setModalSelect(dateSelect)}
				className="date-input-container"
			>
				<div className="date-input-date-select-container">
					{dateSelect === "Year" ? (
						<div className="date-input-date-select">
							{dateSelect}
							<select
								onChange={(e: any) => setYear(e.target.value)}
								className="date-input-selection"
							>
								{" "}
								{years.map((year) => (
									<option key={year} value={year}>
										{year}
									</option>
								))}
							</select>
							{year}
						</div>
					) : null}
					{/* {dateSelect === "Month" ? (
						<div className="date-input-selection">{month}</div>
					) : null}
					{dateSelect === "Day" ? (
						<div className="date-input-selection">{day}</div>
					) : null} */}
				</div>
			</div>
		</>
	);
};
