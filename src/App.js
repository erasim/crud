/** @format */

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbaar from "./elements/Navbaar";
import Home from "./elements/Home";
import Register from "./elements/Register";
import Edit from "./elements/Edit";
import Details from "./elements/Details";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Navbaar />

			<Routes>
				<Route
					path='https://crud-server-u706xnhcr-erasim.vercel.app/'
					element={<Home />}
				/>
				<Route
					path='https://crud-server-u706xnhcr-erasim.vercel.app/register'
					element={<Register />}
				/>
				<Route
					path='https://crud-server-u706xnhcr-erasim.vercel.app/edit/:id'
					element={<Edit />}
				/>
				<Route
					path='https://crud-server-u706xnhcr-erasim.vercel.app/view/:id'
					element={<Details />}
				/>
			</Routes>
		</>
	);
}

export default App;
