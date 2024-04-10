import {
  InputField,
  ImageContainer,
  MainCadastroContainer,
  CadastroContainer,
  ButtonCadastrar,
  CadastroPage,
} from "../styles/Cadastro.styles";
import Logo from "../assets/Component5.png";
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <CadastroPage>
      <MainCadastroContainer>
        <CadastroContainer>
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

          <ButtonCadastrar>Confirmar</ButtonCadastrar>

          <span>
            ou faça{" "}
            <b>
              <Link>login</Link>
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
