import { useEffect, useState } from "react";
// import "./ListarUsuarios.css";
import Usuario from "../Components/Usuario.jsx";
import BuscaUsuario from "../Components/BuscaUsuario.jsx";
import axios from "axios";

import Sidenav from "../Components/Sidenav.jsx";
import {
	ListaUsuarios,
	MainBackOfficeContainer,
	MainContainer,
	OuterContainer,
} from "../Styles/MainBackOffice.styles.js";

function MainBackOffice() {
	const [usuarios, setUsuarios] = useState([]);

	useEffect(() => {
		return () => {
			axios.get("http://localhost:8080/usuarios").then((resp) => {
				setUsuarios(resp.data.usuarios);
			});
		};
	}, []);

	return (
		<MainBackOfficeContainer>
			<header>
				<h1>Usuários</h1>
				<BuscaUsuario />
			</header>
			<OuterContainer>
				<Sidenav />
				<MainContainer>
					{/* <div> Produtos </div> */}
					<ListaUsuarios>
						{usuarios.map((usuario, key) => (
							// eslint-disable-next-line react/jsx-key
							<Usuario usuario={usuario} key={key} />
						))}
					</ListaUsuarios>
				</MainContainer>
			</OuterContainer>
		</MainBackOfficeContainer>
	);
}

export default MainBackOffice;
