import React, { useState } from "react";
import "./TextInput.css";

interface TextInputProps {
	placeholder: string;
	value: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: Function;
	name: string;
	autoComplete: string;
	maxLength?: number;
	inputCount?: number;
	readOnly?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
	placeholder,
	value,
	onChange,
	name,
	readOnly,
	autoComplete,
	maxLength,
	inputCount,
}) => {
	const [inFocus, setInFocus] = useState(false);
	const [hasInteracted, setHasInteracted] = useState(false);

	const isActive = inFocus || value.length > 0;
	const wasActive = hasInteracted && !inFocus && value.length === 0;

	const handleFocus = () => {
		setInFocus(true);
		setHasInteracted(true);
	};

	console.log(hasInteracted);

	const handleBlur = () => setInFocus(false);

	const determineContainerClass = () => {
		if (maxLength !== undefined) {
			if (wasActive) return "text-input-was-active";
		}
		if (isActive) return "text-input-container-focus";
		return "text-input-container-blur";
	};

	const determineLabelClass = () => {
		if (maxLength !== undefined) {
			if (wasActive) return "text-span-was-active";
		}
		if (isActive) return "text-input-span-focus";
		return "text-input-span-blur";
	};

	const determineInputClass = () => {
		if (maxLength !== undefined) {
			if (wasActive) return "text-div-was-active";
		}
		if (isActive) return "text-input-div-focus";
		return "text-input-div-blur";
	};

	return (
		<div>
			<div className={determineContainerClass()}>
				<label className={determineLabelClass()}>
					<div className={determineInputClass()}>{placeholder}</div>
					<input
						name={name}
						autoComplete={autoComplete}
						className={isActive ? "text-input-focus" : "text-input-blur"}
						onFocus={handleFocus}
						onBlur={handleBlur}
						type="text"
						value={value}
						onChange={onChange}
						readOnly={readOnly}
						maxLength={maxLength}
					/>
				</label>

				{maxLength && (isActive || wasActive) ? (
					<div className="text-input-char-count">
						{inputCount} / {maxLength}
					</div>
				) : null}
			</div>
			{wasActive && maxLength !== undefined ? (
				<p className="whats-your-name">Whats your name?</p>
			) : null}
		</div>
	);
};
