import { useNavigate } from "react-router";
import { SidenavContainer } from "../Styles/MainBackOffice.styles";

function Sidenav() {
	let navigate = useNavigate();
	return (
		<SidenavContainer>
			<ul>
				<li>Listar Usuários</li>
				<li
					onClick={() => {
						navigate("/Usuarios/Cadastrar");
					}}
				>
					Cadastrar Usuários
				</li>
			</ul>
		</SidenavContainer>
	);
}

export default Sidenav;
