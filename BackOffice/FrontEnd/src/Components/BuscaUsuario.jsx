import { ContainerBusca } from "../Styles/MainBackOffice.styles";
import searchIcon from "../assets/search.svg";
function BuscaUsuario(prop) {
	console.log(prop.loader)

		const fetchUsuarios = async () => {
			await axios.get("http://localhost:8080/usuario/pesquisar").then((resp) => {
				setUsuarios(resp.data.usuarios);
				setLoader(false);
			});
		}

		

	return (
		<div>
			<ContainerBusca>
				<div>
				<input type="search" id="search" placeholder="Digite o nome" />
				<button>
					<img src={searchIcon} alt="" onClick={()=>{props.setLoader(true)}} />
				</button>
				</div>
			</ContainerBusca>
		</div>
	);
}

export default BuscaUsuario;
