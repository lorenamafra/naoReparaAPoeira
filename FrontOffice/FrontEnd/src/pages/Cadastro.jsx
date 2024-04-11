import {
  InputField,
  ImageContainer,
  MainCadastroContainer,
  CadastroContainer,
  CadastroPage,
  ButtonLinkCE,
} from "../styles/Cadastro.styles";
import Logo from "../assets/Component5.png";
import { Link } from "react-router-dom";

const handleSubmit = (event) => {
  event.preventDefault();

  const fd = new FormData(event.target);
  for (const value of fd.values()) {
    console.log(value);
  }
};

function Cadastro() {
  return (
    <CadastroPage>
      <MainCadastroContainer>
        <CadastroContainer onSubmit={handleSubmit}>
          <h1>Registre-se</h1>

          <InputField>
            <label>Email</label>
            <input type="email" name="email"></input>
          </InputField>

          <InputField>
            <label>Nome</label>
            <input type="text" name="nome"></input>
          </InputField>

          <InputField>
            <label>CPF</label>
            <input type="number" name="CPF"></input>
          </InputField>

          <InputField>
            <label>Senha</label>
            <input type="password" name="senha"></input>
          </InputField>

          <InputField>
            <label>Confirmar senha</label>
            <input type="password" name="confirmar senha"></input>
          </InputField>

          <ButtonLinkCE>
            <Link to="/Cadastro/CadastroEndereco">Cadastrar endereço</Link>
          </ButtonLinkCE>

          <span>
            ou faça{" "}
            <b>
              <Link to="/Login">login</Link>
            </b>{" "}
            se ja tiver uma conta
          </span>
        </CadastroContainer>
        <ImageContainer>
          <img src={Logo} alt="Logo NRP" />
        </ImageContainer>
      </MainCadastroContainer>
    </CadastroPage>
  );
}

export default Cadastro;
