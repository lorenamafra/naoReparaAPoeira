import { Route, Routes } from "react-router";
import { UserContext } from "./Context/UserContext";
import Login from "./Pages/Login";
import MainBackOffice from "./Pages/MainBackOffice";
import Cadastrar from "./Pages/Cadastrar";
import Alterar from "./Pages/Alterar";
import { useState } from "react";

function App() {
	const [currentUser, setCurrentUser] = useState({nome:"", id:"", grupo:""})

	return (
		<UserContext.Provider value={[currentUser, setCurrentUser]}>
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
