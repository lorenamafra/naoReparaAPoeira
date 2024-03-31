import { RouterProvider } from "react-router";
import Login from "./Pages/Login";
import MainBackOffice from "./Pages/MainBackOffice";
import CadastrarUsuario from "./Pages/CadastrarUsuario";
import AlterarUsuario from "./Pages/AlterarUsuario";
import CadastrarProdutos from "./Pages/CadastrarProdutos";
import AlterarProduto from "./Pages/AlterarProduto";
import VisualizarProduto from "./Pages/VisualizarProduto";
import { createBrowserRouter } from "react-router-dom";
import UserList from "./Pages/UserList";
import ProductList from "./Pages/ProductList";

const router = createBrowserRouter([
	{ path: "/", Component: Login },
	{
		path: "/Home",
		Component: MainBackOffice,
		children: [
			{ path: "Produtos", Component: ProductList },
			{ path: "Produtos/Cadastrar", Component: CadastrarProdutos },
			{ path: "Produtos/Alterar", Component: AlterarProduto },
			{ path: "Usuarios", Component: UserList },
			{ path: "Usuarios/Cadastrar", Component: CadastrarUsuario },
			{ path: "Usuarios/Alterar", Component: AlterarUsuario },
		],
	},
	{ path: "VisualizarProduto", Component: VisualizarProduto },
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
