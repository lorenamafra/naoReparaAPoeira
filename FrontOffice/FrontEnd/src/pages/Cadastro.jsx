import {
  Textfield,
  ImageContainer,
  MainCadastroContainer,
  CadastroContainer,
  ButtonCadastrar,
} from "../styles/MainStyles.styles";

function Cadastro() {
  return (
    <MainCadastroContainer>
      <CadastroContainer>
        <h1>Registre-se</h1>

        <Textfield>
          <label>Email</label>
          <input type="email" name="email"></input>
        </Textfield>

        <Textfield>
          <label>Nome</label>
          <input type="text" name="nome"></input>
        </Textfield>

        <Textfield>
          <label>CPF</label>
          <input type="number" name="CPF"></input>
        </Textfield>

        <Textfield>
          <label>Senha</label>
          <input type="password" name="senha"></input>
        </Textfield>

        <Textfield>
          <label>Confirmar senha</label>
          <input type="password" name="confirmar senha"></input>
        </Textfield>

        <ButtonCadastrar>Registre-se</ButtonCadastrar>

        <Textfield>
          <label>ou faça</label> <button>login</button>
          <label>se ja tiver uma conta</label>
        </Textfield>
      </CadastroContainer>
      <ImageContainer>
        <img src="../assets/Component5.png" alt="Logo NRP" />
      </ImageContainer>
    </MainCadastroContainer>
  );
}

export default Cadastro;
