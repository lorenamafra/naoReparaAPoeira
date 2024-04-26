import { NavContainer } from "../styles/MainStyles.styles";
import Logo from "../assets/LoaderImg.png";
import { Link, useNavigate } from "react-router-dom";

import Icon from "@mdi/react";
import {
	mdiAccountCircle,
	mdiAccountPlusOutline,
	mdiCartOutline,
} from "@mdi/js";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
function Nav() {
	const currentUser = JSON.parse(sessionStorage.getItem("User"));
	const [cart, setCart] = useContext(CartContext);
	console.log(cart);
	const navigate = useNavigate();
	return (
		<NavContainer>
			<img src={Logo} alt="vinil disc" onClick={() => navigate("/")} />
			{currentUser ? (
				<div>
					<p>{currentUser.nome}</p>
					{/* <p
						onClick={() => {
							navigate("/AlterarCliente", {
								state: { email: currentUser.email },
							});
						}}
					>
						{" "}
						Alterar Cadastro
					</p> */}
					<Link to={"/Carrinho"}>
						<Icon path={mdiCartOutline} size={1} />
					</Link>
					<p
						onClick={() => {
							sessionStorage.removeItem("User");
							navigate("/");
						}}
					>
						{" "}
						Sair
					</p>
				</div>
			) : (
				<div
					style={{
						verticalAlign: "center",
					}}
				>
					<Link to={"/Login"}>
						<Icon path={mdiAccountCircle} size={1} />
						<br />
						<>Login</>
					</Link>
					<Link to={"/Cadastro"}>
						<Icon path={mdiAccountPlusOutline} size={1} />
						<br />
						<>Cadastrar</>
					</Link>

					<Link to={"/Carrinho"}>
						<Icon path={mdiCartOutline} size={1} />
						<br />
						<>Carrinho</>
					</Link>
				</div>
			)}
		</NavContainer>
	);
}

export default Nav;
