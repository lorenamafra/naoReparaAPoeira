import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Produto from "./pages/Produto";
import CadastroEndereco from "./pages/CadastroEndereco";
import AlterarCliente from "./pages/AlterarCliente";
const router = createBrowserRouter([
  { path: "/Login", Component: Login },
  { path: "/Cadastro", Component: Cadastro },
  { path: "/Cadastro/CadastroEndereco", Component: CadastroEndereco },
  { path: "/", Component: LandingPage },
  { path: "/Produto/:cod_produto", Component: Produto },
  { path: "/AlterarCliente", Component: AlterarCliente },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
