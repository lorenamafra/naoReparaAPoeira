import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Pages/Login.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Alterar from "./Pages/Alterar.jsx";
import MainBackOffice from "./Pages/MainBackOffice.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/Usuarios",
		element: <MainBackOffice />,
	},

	{ path: "/Usuarios/Alterar", element: <Alterar /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
