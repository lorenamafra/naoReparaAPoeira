import React, { useEffect, useState } from "react";
import { ContainerBotao, InputField } from "../styles/AlterarCliente.styles";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useLocation, useNavigate } from "react-router";
import { BotaoPadrao, ButtonConfirmar } from "../styles/MainStyles.styles";

function FormularioAlterarCadastro() {
  let navigate = useNavigate();
  let usuario = useLocation().state;
  const [user, setUser] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const fd = new FormData(event.target);
    const ObjectForm = Object.fromEntries(fd);
    console.log(ObjectForm);
    axios
      .put("http://localhost:8081/cliente/alterar", ObjectForm)
      .then((resp) => {
        console.log(resp.data);
        navigate(0);
      });
  }

  const validation = (event) => {
    const fd = new FormData(event.target);

    let isValid = true;

    let email = fd.get("email");
    let nome = fd.get("nome");
    let CPF = fd.get("CPF");
    let genero = fd.get("genero");

    const campoVazio = (campo, campoNome) => {
      if (!campo || campo == "" || campo == " ") {
        alert(`${campoNome} está vazio!`);

        return false;
      }
      return true;
    };

    isValid = campoVazio(email, "Email");
    isValid = campoVazio(nome, "Nome");
    isValid = campoVazio(cpf, "Cpf");
    isValid = campoVazio(genero, "genero");

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
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Alterar Cadastro</h1>

      <InputField>
        <label>Email</label>
        <input type="email" name="email" defaultValue={user.email}></input>
      </InputField>

      <InputField>
        <label>Nome</label>
        <input
          type="text"
          name="nome_completo"
          defaultValue={user.nome_completo}
        ></input>
      </InputField>

      <InputField>
        <label>CPF</label>
        <input type="number" name="cpf" defaultValue={user.cpf}></input>
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
        <BotaoPadrao
          onClick={() => navigate("/MeusEnderecos", { state: { user: user } })}
        >
          Endereços
        </BotaoPadrao>
        <Toaster />
      </ContainerBotao>
    </form>
  );
}

export default FormularioAlterarCadastro;
