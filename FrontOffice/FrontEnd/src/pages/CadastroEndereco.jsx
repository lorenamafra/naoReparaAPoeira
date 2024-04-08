import {
  MainCadastroEnderecoContainer,
  CadastroEnderecoPage,
  CadastroEnderecoContainer,
  ButtonCadastrarEndereco,
  InputField,
  ImageContainer,
} from "../styles/CadastroEndereco.styles";
import Logo from "../assets/Component5.png";

function CadastroEndereco() {
  return (
    <CadastroEnderecoPage>
      <MainCadastroEnderecoContainer>
        <ImageContainer>
          <img src={Logo} alt="Logo NRP" />
        </ImageContainer>
        <CadastroEnderecoContainer>
          <h1>Cadastrar endereço</h1>

          <InputField>
            <label>CEP</label>
            <input type="number" name="CEP"></input>
          </InputField>

          <InputField>
            <label>Logradouro</label>
            <input type="text" name="Logradouro"></input>
          </InputField>

          <InputField>
            <label>Numero</label>
            <input type="number" name="Numero"></input>
          </InputField>

          <InputField>
            <label>Complemento</label>
            <input type="text" name="Complemento"></input>
          </InputField>

          <InputField>
            <label>Bairro</label>
            <input type="text" name="Bairro"></input>
          </InputField>

          <InputField>
            <label>Cidade</label>
            <input type="text" name="Cidade"></input>
          </InputField>

          <InputField>
            <label>UF</label>
            <input type="text" name="UF"></input>
          </InputField>

          <ButtonCadastrarEndereco>CadastrarEndereco</ButtonCadastrarEndereco>
        </CadastroEnderecoContainer>
      </MainCadastroEnderecoContainer>
    </CadastroEnderecoPage>
  );
}

export default CadastroEndereco;
