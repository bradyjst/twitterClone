import React, { useState } from "react";
import "./TextInput.css";

interface TextInputProps {
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	autoComplete: string;
}

export const TextInput: React.FC<TextInputProps> = ({
	placeholder,
	value,
	onChange,
	name,
	autoComplete,
}) => {
	const [inFocus, setInFocus] = useState(false);

	console.log(inFocus);

	const handleFocus = () => setInFocus(true);
	const handleBlur = () => setInFocus(false);

	return (
		<div
			className={
				inFocus ? "text-input-container-focus" : "text-input-container-blur"
			}
		>
			<span
				className={inFocus ? "text-input-span-focus" : "text-input-span-blur"}
			>
				Name
			</span>
			<input
				name={name}
				autoComplete={autoComplete}
				className={inFocus ? "text-input-focus" : "text-input-blur"}
				onFocus={handleFocus}
				onBlur={handleBlur}
				type="text"
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};
