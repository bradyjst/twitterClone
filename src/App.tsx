import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Main/Home/Landing/Login/Login";
import { Signup } from "./Components/Main/Home/Landing/Login/Signup/Signup";
import "./App.css";
import { Home } from "./Components/Main/Home/Home";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
