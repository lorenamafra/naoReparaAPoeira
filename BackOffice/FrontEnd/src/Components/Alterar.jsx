import { useState, useEffect, useRef } from "react";
import "./Alterar.css";

function Alterar() {
	const user = {
		email: "denisls02@outlook.com",
		nome: "Denis",
		grupo: "ADMIN",
		cpf: "12345678910",
		senha: "kanyewest",
	};
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
			setSenha(user.senha);
		};
	}, []);

	const validation = () => {
		let isValid = true;

		nome == "" ? alert("Nome vazio") : "nome";
		cpf == "" ? alert("CPF vazio") : "nome";
		grupo == "" ? alert("Grupo vazio") : "nome";
		senha == "" ? alert("Senha vazio") : "nome";
		confirmaSenha == "" ? alert("Confirme a senha") : "nome";

		return isValid;
	};

	const handleSave = (e) => {
		e.preventDefault();

		console.log(nome);
		console.log(user);
		if (validation()) {
			user.nome = nome;
			user.cpf = cpf;
			user.senha = senha;
			user.grupo = grupo;
			console.log(user);
		}
		console.log(user);
	};

	return (
		<main>
			<h1>Alterar usuário</h1>
			<div>
				<form onSubmit={handleSave}>
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
						<button onClick={handleSave}>Salvar</button>
						<button>Cancelar</button>
					</div>
				</form>
			</div>
		</main>
	);
}

export default Alterar;
