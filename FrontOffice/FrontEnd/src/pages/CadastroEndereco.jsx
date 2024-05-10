import {
	MainCadastroEnderecoContainer,
	CadastroEnderecoPage,
	CadastroEnderecoContainer,
	InputField,
	ImageContainer,
} from "../styles/CadastroEndereco.styles";
import Logo from "../assets/Component5.png";
import axios from "axios";
import { useLocation, useNavigate, useOutletContext } from "react-router";
import { useState } from "react";
import { ButtonCadastrarEndereco } from "../styles/MainStyles.styles";

const validation = () => {
	const fd = new FormData(event.target);

	let isValid = true;

	let cep = fd.get("cep");
	let logradouro = fd.get("logradouro");
	let numero = fd.get("numero");
	let complemento = fd.get("complemento");
	let bairro = fd.get("bairro");
	let cidade = fd.get("cidade");
	let uf = fd.get("uf");

	const campoVazio = (campo, campoNome) => {
		if (!campo || campo == "" || campo == " ") {
			alert(`${campoNome} está vazio!`);

			return false;
		}
		return true;
	};

	isValid = campoVazio(cep, "cep");
	isValid = campoVazio(logradouro, "logradouro");
	isValid = campoVazio(numero, "numero");
	isValid = campoVazio(complemento, "complemento");
	isValid = campoVazio(bairro, "bairro");
	isValid = campoVazio(cidade, "cidade");
	isValid = campoVazio(uf, "uf");

	return isValid;
};

function CadastroEndereco() {
	const CEP = (e) => {
		console.log(e.target.value);
		axios
			.get(`https://viacep.com.br/ws/${e.target.value}/json/`)
			.then((resp) => {
				console.log("oi");
				setAdress(resp.data);
			});
	};

	const [address, setAdress] = useState({});
	const navigate = useNavigate();
	const context = useOutletContext();
	console.log(context);
	const handleSubmit = (event) => {
		event.preventDefault();
		const fd = new FormData(event.target);
		for (const value of fd.values()) {
			console.log(value);
		}
		let ObjectForm = Object.fromEntries(fd);
		console.table(ObjectForm);
		console.table(dados.state);
		let cepString = ObjectForm.cep.toString;
		ObjectForm.cep = cepString;
		ObjectForm = Object.assign({ ...ObjectForm }, dados.state.user);

		console.log(ObjectForm);
		console.table(ObjectForm);
		if (validation()) {
			axios
				.post("http://localhost:8081/cliente/cadastrar", ObjectForm)
				.then((resp) => {
					console.log(resp.data);
					if (resp.status == 200) {
						if (dados.state.carrinho == true) {
							console.log("oi ");
							navigate("/Trans", { state: { cart: dados.state.context } });
						}
					} else {
						navigate("/");
					}
				});
		}
	};
	// const handleChangeCEP = (e) => {
	// 	if (valueCEP.length > 7) {
	// 		return;
	// 	} else {
	// 		setValueCEP(e.target.value);
	// 		console.log(valueCEP);
	// 	}
	// };

	const dados = useLocation();
	console.table(dados.state);
	return (
		<CadastroEnderecoPage>
			<MainCadastroEnderecoContainer onSubmit={(e) => handleSubmit(e)}>
				<ImageContainer>
					<img src={Logo} alt="Logo NRP" />
				</ImageContainer>
				<CadastroEnderecoContainer onSubmit={handleSubmit}>
					<h1>Cadastrar endereço</h1>

					<InputField>
						<label>CEP</label>
						<input
							type="number"
							name="cep"
							maxLength="10"
							// onChange={(e) => handleChangeCEP(e)}
							onBlur={(e) => CEP(e)}
							// value={valueCEP}
						></input>
					</InputField>

					<InputField>
						<label>Logradouro</label>
						<input
							type="text"
							name="logradouro"
							value={address.logradouro}
							readOnly
						></input>
					</InputField>

					<InputField>
						<label>Numero</label>
						<input type="number" name="numero"></input>
					</InputField>

					<InputField>
						<label>Complemento</label>
						<input type="text" name="complemento"></input>
					</InputField>

					<InputField>
						<label>Bairro</label>
						<input
							type="text"
							name="bairro"
							value={address.bairro}
							readOnly
						></input>
					</InputField>

					<InputField>
						<label>Cidade</label>
						<input
							type="text"
							name="cidade"
							value={address.localidade}
							readOnly
						></input>
					</InputField>

					<InputField>
						<label>UF</label>
						<input type="text" name="uf" value={address.uf} readOnly></input>
					</InputField>

					<ButtonCadastrarEndereco>Finalizar Cadastro</ButtonCadastrarEndereco>
				</CadastroEnderecoContainer>
			</MainCadastroEnderecoContainer>
		</CadastroEnderecoPage>
	);
}

export default CadastroEndereco;
