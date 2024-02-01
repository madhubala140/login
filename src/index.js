import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome.js";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/welcome" element={<Welcome />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);