import { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { FormContainer, MainFormContainer } from "../Styles/Form.styles";

function Alterar(props) {
	let navigate = useNavigate();
	let location = useLocation();

	console.log(location.state.usuario);

	const user = location.state.usuario;

	console.log(user);
	const [email, setEmail] = useState();
	const [nome, setNome] = useState();
	const [cpf, setCpf] = useState();
	const [grupo, setGrupo] = useState();
	const [senha, setSenha] = useState();
	const [confirmaSenha, setConfirmaSenha] = useState();

	useEffect(() => {
		//variavel no projeto
		return () => {
			setEmail(user.email);
			setNome(user.nome);
			setCpf(user.cpf);
			setGrupo(user.grupo);
		};
	}, []);

	const validation = () => {
		let isValid = true;

		nome == "" ? alert("Nome vazio") : "";
		cpf == "" ? alert("CPF vazio") : "";
		grupo == "" ? alert("Grupo vazio") : "";
		senha == "" ? alert("Senha vazio") : "";
		confirmaSenha == "" ? alert("Confirme a senha") : "";
		senha == confirmaSenha ? "" : alert("Senha tem que ser confirmada");
		return isValid;
	};

	const handleSave = (e) => {
		e.preventDefault();

		if (validation()) {
			user.nome = nome;
			user.cpf = cpf;
			user.senha = senha;
			user.grupo = grupo;
			console.log(user);

			axios.put("http://localhost:8080/usuario/alterar", user).then((resp) => {
				if (resp.status == 200) {
					navigate(-1);
				}
			});
		}
	};

	return (
		<MainFormContainer>
			<h1>Alterar usuário</h1>
			<div>
				<FormContainer onSubmit={handleSave}>
					<label htmlFor="email"> Email </label>
					<input defaultValue={email} type="text" name="email" disabled />

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
					<input
						value={grupo}
						type="text"
						name="Grupo"
						required
						onChange={(event) => setGrupo(event.target.value)}
					/>

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
						<button onClick={handleSave}>Alterar</button>
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
}

export default Alterar;
