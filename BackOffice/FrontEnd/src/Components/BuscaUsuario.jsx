import { ContainerBusca } from "../Styles/MainBackOffice.styles";
import searchIcon from "../assets/search.svg";

function BuscaUsuario() {
	return (
		<div>
			<ContainerBusca>
				<input type="text" id="search" placeholder="Digite o nome" />
				<button>
					<img src={searchIcon} alt="" />
				</button>
			</ContainerBusca>
		</div>
	);
}

export default BuscaUsuario;
