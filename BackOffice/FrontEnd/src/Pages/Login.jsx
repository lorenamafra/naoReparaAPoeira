import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
	BtnLogin,
	CardLogin,
	Erro,
	LoginContainer,
	LoginMainContainer,
	Textfield,
} from "../Styles/Login.styles";

function Login() {
	sessionStorage.setItem("User", JSON.stringify());

	const navigate = useNavigate();
	const [erro, setErro] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const [user] = useState({
		email: "",
		senha: "",
	});

	const Logar = (e) => {
		e.preventDefault();
		user.email = email;
		user.senha = password;

		axios.post("http://localhost:8080/usuario/login", user).then((resp) => {
			if (resp.data == true) {
				axios.post("http://localhost:8080/usuario", user).then((resp) => {
					const currentUser = {
						nome: resp.data.nome,
						email: resp.data.email,
						grupo: resp.data.grupo,
					};
					sessionStorage.setItem("User", JSON.stringify(currentUser));
					navigate("/Home");
				});
			} else {
				setErro(resp.data.message);
			}
		});
	};
	return (
		<LoginMainContainer className="login_main">
			<CardLogin className="card-login" onSubmit={Logar}>
				<h1>Login</h1>
				<LoginContainer className="container">
					<Textfield className="textfield">
						<label htmlFor="usuario">Usuário</label>
						<input
							type="text"
							name="usuario"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Textfield>
					<Textfield className="textfield">
						<label htmlFor="senha">Senha</label>
						<input
							type="password"
							name="senha"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Textfield>
					<BtnLogin className="btn-login" onClick={Logar}>
						<b>Login</b>
					</BtnLogin>
					<Erro> {erro}</Erro>
				</LoginContainer>
			</CardLogin>
		</LoginMainContainer>
	);
}

export default Login;
