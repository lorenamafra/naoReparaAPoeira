import { Link } from "react-router-dom";
import {
	AdminSideNav,
	EstoquistaSideNav,
	SidenavContainer,
} from "../Styles/MainBackOffice.styles";

function Sidenav() {
	const currentUser = JSON.parse(sessionStorage.getItem("User"));

	return (
		<SidenavContainer>
			{currentUser.grupo == "Estoquista" ? (
				<EstoquistaSideNav>
					<ul>
						<Link to="/Home">Home</Link>
						<Link to="Produtos">Lista de Produtos</Link>
					</ul>
				</EstoquistaSideNav>
			) : (
				""
			)}
			{currentUser.grupo == "Admin" ? (
				<AdminSideNav>
					<ul>
						<Link to="/Home">Home</Link>

						<Link to="Produtos">Lista de Produtos</Link>
						<Link to="Usuarios">Listar Usuários</Link>
					</ul>
				</AdminSideNav>
			) : (
				""
			)}
		</SidenavContainer>
	);
}

export default Sidenav;
