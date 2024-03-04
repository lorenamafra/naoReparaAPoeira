import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
	const navigate = useNavigate();
	const [erro, setErro] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const [user] = useState({
		email: "",
		senha: "",
	});

	const Logar = () => {
		user.email = email;
		user.senha = password;

		console.log(user);

		axios.post("http://localhost:8080/usuario/login", user).then((resp) => {
			if (resp.data == true) {
				navigate("/Usuarios");
			} else {
				setErro(resp.data.message);
			}
		});
	};
	return (
		<div>
			<main className="login_main">
				<div className="card-login">
					<h1>Login</h1>
					<div className="container">
						<div className="textfield">
							<label htmlFor="usuario">Usuário</label>
							<input
								type="text"
								name="usuario"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="textfield">
							<label htmlFor="senha">Senha</label>
							<input
								type="password"
								name="senha"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<button className="btn-login" onClick={Logar}>
							<b>Login</b>
						</button>
						<p> {erro}</p>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Login;
