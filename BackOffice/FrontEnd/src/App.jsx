import { Route, Routes } from "react-router";
import { UserContext } from "./Context/UserContext";
import Login from "./Pages/Login";
import MainBackOffice from "./Pages/MainBackOffice";
import Cadastrar from "./Pages/Cadastrar";
import Alterar from "./Pages/Alterar";

function App() {
	return (
		<UserContext.Provider value={"oi"}>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/BackOffice" element={<MainBackOffice />} />
				<Route path="/Usuarios/Cadastrar" element={<Cadastrar />} />
				<Route path="/Usuarios/Alterar" element={<Alterar />} />
			</Routes>
		</UserContext.Provider>
	);
}

export default App;
