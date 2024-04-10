import { NavContainer } from "../styles/MainStyles.styles";
import Logo from "../assets/LoaderImg.png";
import { Link } from "react-router-dom";
function Nav() {
	return (
		<NavContainer>
			<img src={Logo} alt="vinil disc" />
			<div>
				<Link to={"/Login"}>Login</Link>

				<Link to={"/Cadastro"}>Cadastrar</Link>
			</div>
		</NavContainer>
	);
}

export default Nav;
