import {
	AdminSideNav,
	EstoquistaSideNav,
	SidenavContainer,
} from "../Styles/MainBackOffice.styles";

function Sidenav(props) {
	console.log(props);
	const setPage = props.page[1];
	const currentUser = JSON.parse(sessionStorage.getItem("User"));

	console.log(currentUser);
	return (
		<SidenavContainer>
			{currentUser.grupo == "Estoquista" ? (
				<EstoquistaSideNav>
					<ul>
						<li onClick={() => setPage("Lista de Produtos")}>
							Lista de Produtos
						</li>
					</ul>
				</EstoquistaSideNav>
			) : (
				""
			)}
			{currentUser.grupo == "Admin" ? (
				<AdminSideNav>
					<ul>
						<li onClick={() => setPage("Lista de Produtos")}>
							Lista de Produtos
						</li>
						<li onClick={() => setPage("Lista de Usuarios")}>
							Listar Usuários
						</li>
					</ul>
				</AdminSideNav>
			) : (
				""
			)}
		</SidenavContainer>
	);
}

export default Sidenav;
