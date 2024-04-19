import React, { useEffect, useState } from "react";
import {
  ButtonConfirmar,
  ButtonEndereco,
  ContainerBotao,
  InputField,
} from "../styles/AlterarCliente.styles";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

function FormularioAlterarCadastro() {
  let navigate = useNavigate();
  let usuario = useLocation().state;
  console.log(usuario);
  const [user, setUser] = useState({});

  function HandleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const fd = new FormData(event.target);
    const ObjectForm = Object.fromEntries(fd);
    console.log(ObjectForm);
    axios.post("/cliente/alterar");
  }

  const validation = (event) => {
    const fd = new FormData(event.target);

    let isValid = true;

    let email = fd.get("email");
    let nome = fd.get("nome");
    let CPF = fd.get("CPF");
    let genero = fd.get("genero");
    let senha = fd.get("senha");
    let confirmaSenha = fd.get("confirmar Senha");

    const campoVazio = (campo, campoNome) => {
      if (!campo || campo == "" || campo == " ") {
        alert(`${campoNome} está vazio!`);

        return false;
      }
      return true;
    };

    const confirmarSenha = (senha, senha2) => {
      if (senha != senha2) {
        alert(`Senha não está igual`);
        return false;
      }
    };

    isValid = campoVazio(email, "Email");
    isValid = campoVazio(nome, "Nome");
    isValid = campoVazio(cpf, "Cpf");
    isValid = campoVazio(genero, "genero");
    isValid = campoVazio(senha, "Senha");
    isValid = campoVazio(confirmaSenha, "confirmar Senha");

    confirmarSenha(senha, confirmaSenha);
    if (!ValidaCPF(cpf)) {
      isValid = false;
      alert("CPF falso");
    }
    return isValid;
  };

  useEffect(() => {
    const getData = () => {
      axios
        .get(`http://localhost:8081/cliente/${usuario.email}`)
        .then((resp) => {
          setUser(resp.data);
        });
    };

    getData();
  }, []);

  return (
    <form onSubmit={(e) => HandleSubmit(e)}>
      <h1>Alterar Cadastro</h1>

      <InputField>
        <label>Email</label>
        <input type="email" name="email" value={user.email}></input>
      </InputField>

      <InputField>
        <label>Nome</label>
        <input type="text" name="nome" value={user.nome_completo}></input>
      </InputField>

      <InputField>
        <label>CPF</label>
        <input type="number" name="cpf" value={user.cpf}></input>
      </InputField>

      <InputField>
        <label>Gênero</label>
        <select name="genero">
          <option value="Feminino">Feminino</option>
          <option value="Masculino">Masculino</option>
          <option value="Outros">Outros</option>
        </select>
      </InputField>

      <ContainerBotao>
        <ButtonConfirmar>Confirmar</ButtonConfirmar>
        <ButtonConfirmar
          onClick={() =>
            navigate("/AlterarCliente/AlterarSenha", { state: { user: user } })
          }
        >
          Alterar senha
        </ButtonConfirmar>
        <ButtonEndereco
          onClick={() => navigate("/MeusEnderecos", { state: { user: user } })}
        >
          Endereços
        </ButtonEndereco>
      </ContainerBotao>
    </form>
  );
}

export default FormularioAlterarCadastro;
