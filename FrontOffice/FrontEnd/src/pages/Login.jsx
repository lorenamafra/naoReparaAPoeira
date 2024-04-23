import {
  InputField,
  ImageContainer,
  MainLoginContainer,
  LoginContainer,
  LoginPage,
} from "../styles/Login.styles";
import Logo from "../assets/Component5.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ButtonConfirmar } from "../styles/MainStyles.styles";

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
    const ObjectData = Object.fromEntries(fd);

    axios
      .post("http://localhost:8081/cliente/login", ObjectData)
      .then((resp) => {
        console.log(resp.data);
        if (resp.data == true) {
          console.log("oii");
          axios
            .get(`http://localhost:8081/cliente/${ObjectData.email}`)
            .then((resp) => {
              console.log(resp.data);
              const currentClient = {
                nome: resp.data.nome_completo,
                email: resp.data.email,
              };
              console.log(currentClient);
              sessionStorage.setItem("User", JSON.stringify(currentClient));
              navigate("/");
            });
        }
      });
  };
  return (
    <LoginPage>
      <MainLoginContainer>
        <LoginContainer onSubmit={handleSubmit}>
          <h1>Login</h1>

          <InputField>
            <label>Email</label>
            <input type="email" name="email" />
          </InputField>

          <InputField>
            <label>Senha</label>
            <input type="password" name="senha" />
          </InputField>

          <ButtonConfirmar>Logar</ButtonConfirmar>

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
