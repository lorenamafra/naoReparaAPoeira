import { useNavigate } from "react-router";
import axios from "axios";
function Usuario(props) {
	const usuario = props.usuario;
	const navigate = useNavigate();
	console.log(props);

	const handleAlterarStatus = () => {
		usuario.status_cliente == "Ativo"
			? axios.put("http://localhost:8080/usuario/alterarStatus", {
					status_cliente: "Inativo",
					email: usuario.email,
			  })
			: axios.put("http://localhost:8080/usuario/alterarStatus", {
					status_cliente: "Ativo",
					email: usuario.email,
			  });

		navigate(0);
	};
	return (
		<div>
			<div className="container-principal">
				<div className="container">
					<div id="name">{usuario.nome}</div>
					<div id="email">{usuario.email}</div>
					<div id="group">{usuario.grupo}</div>
					<div id="status" onClick={handleAlterarStatus}>
						{" "}
						{usuario.status_cliente}
					</div>
					<button
						onClick={() =>
							navigate("/usuarios/alterar", { state: { usuario: usuario } })
						}
					>
						Alterar
					</button>
				</div>
			</div>
		</div>
	);
}

export default Usuario;
