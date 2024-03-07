import { useContext, useEffect, useState } from "react";
import Usuario from "../Components/Usuario.jsx";
import BuscaUsuario from "../Components/BuscaUsuario.jsx";
import axios from "axios";
import searchIcon from "../assets/search.svg";

import Sidenav from "../Components/Sidenav.jsx";
import {
	ListaUsuarios,
	ContainerBusca,
	MainBackOfficeContainer,
	MainContainer,
	OuterContainer,
	ButaoTeste,
} from "../Styles/MainBackOffice.styles.js";
import { UserContext } from "../Context/UserContext.jsx";

//mockUser
// const mockUser = {
// 	nome:"Denis",
// 	status_cliente:"Ativo",
// 	email:"",
// 	grupo:"Admin"
// }

function MainBackOffice() {

	const currentUser = useContext(UserContext)[0]

	const [nome, setNome] = useState();
	const [usuarios, setUsuarios] = useState([]);
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		const fetchUsuarios = async () => {
			await axios.get("http://localhost:8080/usuarios").then((resp) => {
				setUsuarios(resp.data.usuarios);
				setLoader(false);
			});
		};
		fetchUsuarios();
	}, []);

	const handleFetch =  () =>{
		
	 axios.post("http://localhost:8080/usuario/pesquisar",{"nome":nome}).then((resp) => {setLoader(true)
		setUsuarios(resp.data)
		console.log(resp)
		setLoader(false)})

	}

	return (
		<MainBackOfficeContainer>
			<aside>
				<p> {currentUser.nome}</p>
				{/* <p> {currentUser.grupo} </p> */}
			</aside>
			<header>
				<span>
					<h1>Usuários</h1>

					<div>
			<ContainerBusca>
				<div>
				<input type="search" id="search" placeholder="Digite o nome" value={nome} onChange={(event) => setNome(event.target.value)}/>
				<button onClick={handleFetch} >
					<img src={searchIcon} alt="" />
				</button>
				</div>
			</ContainerBusca>
		</div>
				</span>
			</header>

			<OuterContainer>
				<Sidenav />
				<MainContainer>

					{loader ? (
						<p> Is loading</p>
					) : (
						<ListaUsuarios>
							{usuarios.map((usuario, key) => (
								// eslint-disable-next-line react/jsx-key
								<Usuario usuario={usuario} key={key} status={"Ativo"} />
							))}
						</ListaUsuarios>
					)}
				</MainContainer>
			</OuterContainer>
		</MainBackOfficeContainer>
	);
}

export default MainBackOffice;
