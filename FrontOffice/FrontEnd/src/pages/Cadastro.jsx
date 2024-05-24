import {
  InputField,
  ImageContainer,
  MainCadastroContainer,
  CadastroContainer,
  CadastroPage,
  ButtonLinkCE,
} from "../styles/Cadastro.styles";
import Logo from "../assets/Component5.png";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import ValidaCPF from "../testes/ValidaCPF";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import CampoVazio from "../testes/CampoVazio";
import axios from "axios";
const infoStyles = {
  backgroundColor: "white",
  color: "red",
};
import { createCart } from "../Context/CartFunctions";

const validation = () => {
  const fd = new FormData(event.target);

  let isValid = true;

  let email = fd.get("email");
  let nome = fd.get("nome");
  let cpf = fd.get("cpf");
  let genero = fd.get("genero");
  let senha = fd.get("senha");
  let confirmaSenha = fd.get("confirmarSenha");
  let data_nascimento = fd.get("data_nascimento");
  if (cpf.toString().length > 11) {
    toast.warning("CPF tem mais de 11 digitos", { style: infoStyles });
  }
  const confirmarSenha = (senha, senha2) => {
    if (senha != senha2) {
      toast.warning(`Senha não está igual`, { style: infoStyles });
      return false;
    }
  };

  if (isValid == true) isValid = CampoVazio(email, "Email");
  if (isValid == true) isValid = CampoVazio(nome, "Nome");
  if (isValid == true)
    isValid = CampoVazio(data_nascimento, "Data de Nascimento");
  if (isValid == true) isValid = CampoVazio(cpf, "CPF");
  if (isValid == true) isValid = CampoVazio(genero, "Genero");
  if (isValid == true) isValid = CampoVazio(senha, "Senha");
  if (isValid == true) isValid = CampoVazio(confirmaSenha, "Senha Confirmada");

  confirmarSenha(senha, confirmaSenha);

  if (!ValidaCPF(cpf)) {
    isValid = false;
    toast.warning("CPF inválido!", { style: infoStyles });
  }

  const myArray = nome.trim().split(" ");

  if (myArray.length <= 1) {
    toast.warning("Insira o nome completo");
    isValid = false;
  } else {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i].length < 3) {
        toast.warning("Insira um nome com pelo menos 3 letras!");
        isValid = false;
      }
    }
  }

  return isValid;
};

function Cadastro() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const ObjectForm = Object.fromEntries(fd);

    const checkExistence = async (valid) => {
      await axios
        .post("http://localhost:8081/check/cpf", ObjectForm)
        .then((resp) => {
          if (resp.data == true) {
            toast.warning("CPF já cadastrado", { style: infoStyles });
            valid = false;
          }
        });

      await axios
        .post("http://localhost:8081/check/email", ObjectForm)
        .then((resp) => {
          if (resp.data == true) {
            toast.warning("Email já cadastrado", { style: infoStyles });
            valid = false;
          }
        });

      return valid;
    };
    let valid = true;
    if (validation()) {
      checkExistence(valid).then((r) => {
        if (r == true) {
          toast.info("Cadastrado com sucesso!");
          navigate("/Cadastro/CadastroEndereco", {
            state: {
              user: ObjectForm,
              carrinho: location?.carrinho,
              context: location?.context,
            },
          });
        }
      });
    }
  };

  const location = useLocation().state;
  console.log(location);

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
            <input type="number" name="cpf"></input>
          </InputField>

          <InputField>
            <input type="date" name="data_nascimento" />
          </InputField>
          <InputField>
            <label>Gênero</label>
            <select name="genero" defaultValue="Selecione o gênero">
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
              <option value="Outros">Outros</option>
            </select>
          </InputField>

          <InputField>
            <label>Senha</label>
            <input type="password" name="senha"></input>
          </InputField>

          <InputField>
            <label>Confirmar senha</label>
            <input type="password" name="confirmarSenha"></input>
          </InputField>

          <ButtonLinkCE>Continuar</ButtonLinkCE>

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
      <Toaster expand={true} visibleToasts={10} />
    </CadastroPage>
  );
}

export default Cadastro;
