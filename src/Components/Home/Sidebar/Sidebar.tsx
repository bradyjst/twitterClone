import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
	const navigate = useNavigate();

	const logout = async () => {
		const token = localStorage.getItem("token");
		try {
			const response = await fetch("http://localhost:8080/logout", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.ok) {
				localStorage.removeItem("token");
				navigate("/");
			}
		} catch (error) {
			console.log("There was an error logging out:", error);
		}
	};

	return (
		<div className="sidebar-container">
			<div className="account">
				<button onClick={logout}>Logout</button>
			</div>
		</div>
	);
};
