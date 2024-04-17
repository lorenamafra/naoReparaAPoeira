import {
	InputField,
	ImageContainer,
	MainLoginContainer,
	LoginContainer,
	ButtonLogar,
	LoginPage,
} from "../styles/Login.styles";
import Logo from "../assets/Component5.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const validation = () => {
	const fd = new FormData(event.target);

	let isValid = true;

	let email = fd.get("email");
	let senha = fd.get("senha");

	const campoVazio = (campo, campoNome) => {
		if (!campo || campo == "" || campo == " ") {
			alert(`${campoNome} está vazio!`);

			return false;
		}
		return true;
	};

	isValid = campoVazio(email, "email");
	isValid = campoVazio(senha, "senha");

	return isValid;
};

function Login() {
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

  const fd = new FormData(event.target);
  for (const value of fd.values()) {
    console.log(value);
  }

  if (validation()) {
    axios.post("http://localhost:8080/cliente/login", fd).then((resp) => {
      if (resp.data == true) {
        axios.post("http://localhost:8080/cliente", fd).then((resp) => {
          const currentClient = {
            nome: resp.data.nome_completo,
            email: resp.data.email,
          };
          sessionStorage.setItem("client", JSON.stringify(currentClient));
          navigate("/");
        });
      } else {
        setErro(resp.data.message);
      }
    });
  }
};

function Login() {
  return (
    <LoginPage>
      <MainLoginContainer>
        <LoginContainer onSubmit={handleSubmit}>
          <h1>login</h1>

					<InputField>
						<label>Email</label>
						<input type="email" name="email" />
					</InputField>

					<InputField>
						<label>Senha</label>
						<input type="password" name="senha" />
					</InputField>

					<ButtonLogar>Logar</ButtonLogar>

					<span>
						<b>
							{" "}
							<Link to="/Cadastro">Registre-se</Link>{" "}
						</b>
						<label> se não tiver uma conta</label>
					</span>
				</LoginContainer>

				<ImageContainer>
					<img src={Logo} alt="Logo NRP" />
				</ImageContainer>
			</MainLoginContainer>
		</LoginPage>
	);
}

export default Login;
