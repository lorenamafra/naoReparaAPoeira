import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Produto from "./pages/Produto";
import CadastroEndereco from "./pages/CadastroEndereco";
import AlterarCliente from "./pages/AlterarCliente";
import MeusEnderecos from "./pages/MeusEnderecos";
import AlterarSenha from "./pages/AlterarSenha";
import AdicionarEndereco from "./pages/AdicionarEndereco";
import MainPage from "./pages/MainPage";
import Carrinho from "./Components/Carrinho";

const router = createBrowserRouter([
	{ path: "/Login", Component: Login },
	{ path: "/Cadastro", Component: Cadastro },
	{ path: "/Cadastro/CadastroEndereco", Component: CadastroEndereco },
	{
		path: "/",
		Component: MainPage,
		children: [
			{ path: "/", Component: LandingPage },
			{ path: "Produto/:cod_produto", Component: Produto },
			{ path: "/AlterarCliente", Component: AlterarCliente },
			{ path: "/MeusEnderecos", Component: MeusEnderecos },
			{ path: "/AlterarCliente/AlterarSenha", Component: AlterarSenha },
			{ path: "/AdicionarEndereco", Component: AdicionarEndereco },
			{ path: "/Carrinho", Component: Carrinho },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
