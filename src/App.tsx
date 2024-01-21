import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Landing/Login/Login";

import "./App.css";
import { Home } from "./Components/Home/Home";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />

				<Route path="/home" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
