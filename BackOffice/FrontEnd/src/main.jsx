import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Pages/Login.jsx";
import ListarUsuarios from "./Pages/ListarUsuarios.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Alterar from "./Pages/Alterar.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/Usuarios",
		element: <ListarUsuarios />,
	},

	{ path: "/Usuarios/Alterar", element: <Alterar /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
