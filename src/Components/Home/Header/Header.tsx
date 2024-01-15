import React from "react";
import "./Header.css";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
	return (
		<div className="header-container">
			<h1>T</h1>
			<h2>⚙️ Settings</h2>
		</div>
	);
};
