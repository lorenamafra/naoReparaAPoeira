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
	console.log(currentUser)
	const [nome, setNome] = useState();
	const [usuarios, setUsuarios] = useState([]);
	const [loader, setLoader] = useState(true);
	const [page, setPage] = useState()
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
		if(nome==""){axios.get("http://localhost:8080/usuarios").then((resp) => {
			setUsuarios(resp.data.usuarios);
			setLoader(false);
		});
			
		} else { axios.post("http://localhost:8080/usuario/pesquisar",{"nome":nome}).then((resp) => {setLoader(true)
		setUsuarios(resp.data)
		console.log(resp)
		setLoader(false)})
		}
	

	}

	console.log(page)

	return (
		<MainBackOfficeContainer>
			<aside>
				<p> {currentUser.nome}</p>
			 <p> {currentUser.grupo} </p>
			</aside>
		

			<OuterContainer>
				<Sidenav page={[page, setPage]} />
				<MainContainer>
					{page == "Lista de Produtos" ? (<div> <p> Lista de produtos </p></div>):""}
					{page == "Lista de Usuarios" ? (<div>{
					loader ? (
						<p> Is loading</p>
					) : (<div>	<header>
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
						<ListaUsuarios>
							{usuarios.map((usuario, key) => (
								// eslint-disable-next-line react/jsx-key
								<Usuario usuario={usuario} key={key} status={usuario.status_cliente} />
							))}
						</ListaUsuarios>
						</div>
					)}</div>):""}
					
				</MainContainer>
			</OuterContainer>
		</MainBackOfficeContainer>
	);
}

export default MainBackOffice;
