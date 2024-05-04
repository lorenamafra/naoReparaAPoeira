import { useEffect, useState } from "react";
import { ContainerBusca, ListaUsuarios } from "../Styles/MainBackOffice.styles";
import Icon from "@mdi/react";
import { mdiPlusBoxOutline, mdiMagnify } from "@mdi/js";
import { useNavigate } from "react-router";
import axios from "axios";
import Usuario from "../Components/Usuario";

function UserList() {
	const [nome, setNome] = useState();
	const [usuarios, setUsuarios] = useState([]);
	const [loader, setLoader] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUsuarios = async () => {
			await axios.get("http://localhost:8080/usuarios").then((resp) => {
				setUsuarios(resp.data.usuarios);
				setLoader(false);
			});
		};
		fetchUsuarios();
	}, []);

	const handleFetch = () => {
		if (nome == "") {
			axios.get("http://localhost:8080/usuarios").then((resp) => {
				setUsuarios(resp.data.usuarios);
				setLoader(false);
			});
		} else {
			axios
				.post("http://localhost:8080/usuario/pesquisar", { nome: nome })
				.then((resp) => {
					setLoader(true);
					setUsuarios(resp.data);
					setLoader(false);
				});
		}
	};

	return (
		<div>
			{loader ? (
				<p> Is loading</p>
			) : (
				<div>
					{" "}
					<header>
						<span>
							<h1>Usuários</h1>

							<div>
								<ContainerBusca>
									<input
										type="search"
										id="search"
										placeholder="Digite o nome"
										value={nome}
										onChange={(event) => setNome(event.target.value)}
									/>
									<button onClick={handleFetch}>
										<Icon path={mdiMagnify} alt="Lupa" size={1} />
									</button>

									<button
										onClick={() => {
											navigate("Cadastrar");
										}}
									>
										<Icon path={mdiPlusBoxOutline} size={1.5} alt="" />
									</button>
								</ContainerBusca>
							</div>
						</span>
					</header>
					<ListaUsuarios>
						{usuarios.map((usuario, key) => (
							// eslint-disable-next-line react/jsx-key
							<Usuario
								usuario={usuario}
								key={key}
								status={usuario.status_cliente}
							/>
						))}
					</ListaUsuarios>
				</div>
			)}
		</div>
	);
}

export default UserList;
