import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Produto from "./pages/Produto";
const router = createBrowserRouter([
  { path: "/Login", Component: Login },
  { path: "/Cadastro", Component: Cadastro },
  { path: "/", Component: LandingPage },
  { path: "/Produto/:cod_produto", Component: Produto },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
