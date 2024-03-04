import { useEffect, useState } from "react";
import "./ListarUsuarios.css";
import Usuario from "../Components/Usuario.jsx";
import BuscaUsuario from "../Components/BuscaUsuario";
import Sidenav from "../Components/Sidenav";
import axios from "axios";
function ListarUsuarios() {
	const [usuarios, setUsuarios] = useState([]);

	useEffect(() => {
		return () => {
			axios.get("http://localhost:8080/usuarios").then((resp) => {
				setUsuarios(resp.data.usuarios);
			});
		};
	}, []);

	return (
		<div>
			<main className="main-container">
				<h1>Usuários</h1>
				<BuscaUsuario />
				<div className="geral">
					<Sidenav />
					<div className="usuarios-container">
						{usuarios.map((usuario, key) => (
							// eslint-disable-next-line react/jsx-key
							<Usuario usuario={usuario} id={key} />
						))}
					</div>
				</div>
			</main>
		</div>
	);
}

export default ListarUsuarios;
