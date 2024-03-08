import { useNavigate } from "react-router";
import { AdminSideNav, EstoquistaSideNav, SidenavContainer } from "../Styles/MainBackOffice.styles";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";

function Sidenav(props) {
	console.log(props)
	const setPage = props.page[1]
	let navigate = useNavigate();
	const currentUser = useContext(UserContext)[0]
	console.log(currentUser)
	return (
		
		<SidenavContainer>
		{currentUser.grupo == "Estoquista"?(<EstoquistaSideNav>
			<ul>
	<li onClick={()=>setPage("Lista de Produtos")}>Lista de Produtos</li>
	
</ul>
</EstoquistaSideNav>

		):""}
			{currentUser.grupo == "Admin" ? (<AdminSideNav>

<ul>
	<li onClick={()=>setPage("Lista de Produtos")}>Lista de Produtos</li>
	<li onClick={()=>setPage("Lista de Usuarios")}>Listar Usuários</li>
	<li
		onClick={() => {
			navigate("/Usuarios/Cadastrar");
		}}
	>
	</li>
	<li
		onClick={() => {
			navigate("/Usuarios/Cadastrar");
		}}
	>
		Cadastrar Usuários
	</li>
</ul>
</AdminSideNav>):""}
			

		</SidenavContainer>
	);
}

export default Sidenav;
