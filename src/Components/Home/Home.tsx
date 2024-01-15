import React from "react";
import "./Home.css";
import { Header } from "./Header/Header";
import { Feed } from "./Feed/Feed";
import { Sidebar } from "./Sidebar/Sidebar";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	return (
		<div className="home-container">
			<Header />
			<Feed />
			<Sidebar />
		</div>
	);
};
