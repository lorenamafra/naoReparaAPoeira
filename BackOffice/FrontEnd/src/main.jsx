import react from "react";
import ReactDOM from "react-dom/client";
import {
	BrowserRouter,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import Login from "./Pages/Login";
import MainBackOffice from "./Pages/MainBackOffice";
import Alterar from "./Pages/Alterar";
import Cadastrar from "./Pages/Cadastrar";
import React from "react";
import App from "./App";
import "./index.css";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/BackOffice",
		element: <MainBackOffice />,
	},

	{ path: "/Usuarios/Alterar", element: <Alterar /> },

	{ path: "/Usuarios/Cadastrar", element: <Cadastrar /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
