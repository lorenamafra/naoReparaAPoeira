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
import Carrinho from "./pages/Carrinho";
import Transtion from "./pages/Transition";
import MainPage from "./pages/MainPage";
import ResumoPedido from "./pages/ResumoPedido";
import Frete from "./pages/Frete";
import Pagamento from "./pages/Pagamento";
import SelecionarEndereco from "./Components/SelecionarEndereco";
import PedidoConcluido from "./pages/PedidoConcluido";

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
			{ path: "/Frete", Component: Frete },
			{ path: "/Pagamento", Component: Pagamento },
			{ path: "/ResumoPedido", Component: ResumoPedido },
			{ path: "/SelecionarEndereco", Component: SelecionarEndereco },
			{ path: "/Trans", Component: Transtion },
			{ path: "/PedidoConcluido", Component: PedidoConcluido },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
