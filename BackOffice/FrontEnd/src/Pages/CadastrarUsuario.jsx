import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import LeftArrow from "../assets/arrow-thin-left.svg";
import { FormContainer, MainFormContainer } from "../Styles/Form.styles";
import ValidaCPF from "../Testes/ValidaCPF";

//(props - propriedade de um componente): usuários como parâmetro
function Cadastrar() {
	let navigate = useNavigate();
	const currentUser = JSON.parse(sessionStorage.getItem("User"));

	const user = {};
	const [email, setEmail] = useState();
	const [nome, setNome] = useState();
	const [cpf, setCpf] = useState();
	const [grupo, setGrupo] = useState();
	const [senha, setSenha] = useState();
	const [confirmaSenha, setConfirmaSenha] = useState();

	const validation = () => {
		let isValid = true;

		const campoVazio = (campo, campoNome) => {
			if (!campo || campo == "" || campo == " ") {
				alert(`${campoNome} está vazio!`);

				return false;
			}
			return true;
		};

		const confirmarSenha = (senha, senha2) => {
			if (senha != senha2) {
				alert(`Senha não está igual`);
				return false;
			}
		};
		isValid = campoVazio(email, "Email");
		isValid = campoVazio(nome, "Nome");
		isValid = campoVazio(cpf, "Cpf");
		isValid = campoVazio(grupo, "Grupo");
		isValid = campoVazio(senha, "Senha");
		isValid = campoVazio(confirmaSenha, "confirmar Senha");

		confirmarSenha(senha, confirmaSenha);
		if (!ValidaCPF(cpf)) {
			isValid = false;
			alert("CPF falso");
		}
		return isValid;
	};

	const handleSave = (e) => {
		e.preventDefault();
		console.log("oi");

		if (validation()) {
			user.email = email;
			user.nome = nome;
			user.cpf = cpf;
			user.senha = senha;
			user.grupo = grupo;
			console.log(user);
			axios
				.post("http://localhost:8080/usuario/cadastrar", user)
				.then((resp) => {
					console.log(resp);
					if (resp.status == 200) {
						navigate(-1);
					}
				});
		}
	};
	console.log(currentUser.grupo);
	if (currentUser.grupo == "Admin") {
		return (
			<MainFormContainer>
				<header>
					<img src={LeftArrow} onClick={() => navigate(-1)} />
					<h1>Cadastrar usuário</h1>
				</header>
				<div>
					<FormContainer onSubmit={handleSave}>
						<label htmlFor="email"> Email </label>
						<input
							onChange={(event) => setEmail(event.target.value)}
							value={email}
							type="email"
							name="email"
						/>

						<label htmlFor="nome"> Nome </label>
						<input
							required
							value={nome}
							type="text"
							name="nome"
							onChange={(event) => setNome(event.target.value)}
						/>

						<label htmlFor="CPF"> CPF </label>
						<input
							required
							value={cpf}
							type="text"
							name="CPF"
							onChange={(event) => setCpf(event.target.value)}
						/>

						<label htmlFor="Grupo"> Grupo </label>
						<select onChange={(event) => setGrupo(event.target.value)}>
							<option value="Admin"> Admin </option>
							<option value="Estoquista"> Estoquista </option>
						</select>

						<label htmlFor="Senha"> Senha </label>
						<input
							value={senha}
							type="password"
							name="Senha"
							required
							onChange={(event) => setSenha(event.target.value)}
						/>

						<label htmlFor="ConfirmaSenha"> Confirmar Senha </label>
						<input
							value={confirmaSenha}
							type="password"
							name="ConfirmaSenha"
							required
							onChange={(event) => setConfirmaSenha(event.target.value)}
						/>
						<div>
							<button onClick={(e) => handleSave(e)}>Cadastrar</button>
							<button
								onClick={() => {
									navigate(-1);
								}}
							>
								Cancelar
							</button>
						</div>
					</FormContainer>
				</div>
			</MainFormContainer>
		);
	} else {
		return (
			<div>
				<h1> Essa página só é acessível para administradores</h1>
			</div>
		);
	}
}

export default Cadastrar;
