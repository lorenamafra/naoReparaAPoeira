import {
  MainCadastroEnderecoContainer,
  CadastroEnderecoPage,
  CadastroEnderecoContainer,
  ButtonCadastrarEndereco,
  InputField,
  ImageContainer,
} from "../styles/CadastroEndereco.styles";
import Logo from "../assets/Component5.png";
import axios from "axios";

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

const handleSubmit = (event) => {
  event.preventDefault();

  const fd = new FormData(event.target);
  for (const value of fd.values()) {
    console.log(value);
  }

  if (validation()) {
    axios.post("http://localhost:8080/cliente/cadastrar").then((resp) => {
      console.log(resp);
      if (resp.status == 200) {
        navigate("/");
      }
    });
  }
};

function CadastroEndereco() {
  return (
    <CadastroEnderecoPage>
      <MainCadastroEnderecoContainer>
        <ImageContainer>
          <img src={Logo} alt="Logo NRP" />
        </ImageContainer>
        <CadastroEnderecoContainer onSubmit={handleSubmit}>
          <h1>Cadastrar endereço</h1>

          <InputField>
            <label>CEP</label>
            <input type="number" name="cep"></input>
          </InputField>

          <InputField>
            <label>Logradouro</label>
            <input type="text" name="logradouro"></input>
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
            <input type="text" name="bairro"></input>
          </InputField>

          <InputField>
            <label>Cidade</label>
            <input type="text" name="cidade"></input>
          </InputField>

          <InputField>
            <label>UF</label>
            <input type="text" name="uf"></input>
          </InputField>

          <ButtonCadastrarEndereco>Finalizar Cadastro</ButtonCadastrarEndereco>
        </CadastroEnderecoContainer>
      </MainCadastroEnderecoContainer>
    </CadastroEnderecoPage>
  );
}

export default CadastroEndereco;
