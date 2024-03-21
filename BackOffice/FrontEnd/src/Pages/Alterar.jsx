import { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { FormContainer, MainFormContainer } from "../Styles/Form.styles";
import LeftArrow from "../assets/arrow-thin-left.svg";
function Alterar() {
  let navigate = useNavigate();
  let location = useLocation();
  const currentUser = JSON.parse(sessionStorage.getItem("User"));

  console.log(location.state.usuario);

  const user = location.state.usuario;

  console.log(user);
  const [email, setEmail] = useState();
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [grupo, setGrupo] = useState();
  const [senha, setSenha] = useState();
  const [confirmaSenha, setConfirmaSenha] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchUsuarios = async () => {
      await setEmail(user.email);
      await setNome(user.nome);
      await setCpf(user.cpf);
      await setGrupo(user.grupo);
      setLoader(false);
    };
    fetchUsuarios();
  }, []);

  const validation = () => {
    let isValid = true;

    const invalidado = (campo) => {
      isValid = false;
      alert(`${campo} vazio!`);
    };

    const invalidaSenhaConfirma = () => {
      alert("Senha não confirmada");
      isValid = false;
    };

    const senhasNãoCorrespondem = () => {
      alert("Senhas não correspondem");
      isValid = false;
    };
    nome == "" ? invalidado("Nome") : "";
    cpf == "" ? invalidado("CPF") : "";
    grupo == "" ? invalidado("Grupo") : "";
    senha == "" ? invalidado("Senha") : "";
    confirmaSenha == "" ? invalidaSenhaConfirma() : "";
    senha == confirmaSenha ? "" : senhasNãoCorrespondem();
    return isValid;
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (validation()) {
      user.nome = nome;
      user.cpf = cpf;
      user.senha = senha;
      user.grupo = grupo;
      console.log(user);

      axios.put("http://localhost:8080/usuario/alterar", user).then((resp) => {
        if (resp.status == 200) {
          navigate(-1);
        }
      });
    }
  };

  const handleGrupo = () => {
    setGrupo(event.target.value);
    if (user.email == email) {
      prompt("Você não pode alterar seu próprio grupo");
    }
  };
  return (
    <MainFormContainer>
      <header>
        <img src={LeftArrow} onClick={() => navigate(-1)} />

        <h1>Alterar usuário</h1>
      </header>
      <div>
        <FormContainer onSubmit={handleSave}>
          <label htmlFor="email"> Email </label>
          <input defaultValue={email} type="text" name="email" disabled />

          <label htmlFor="nome"> Nome </label>
          <input
            required
            value={nome}
            type="text"
            name="nome"
            onChange={(event) => setNome(event.target.value)}
          />

          <label htmlFor="CPF"> CPF </label>
          <input
            required
            value={cpf}
            type="text"
            name="CPF"
            onChange={(event) => setCpf(event.target.value)}
          />

          <label htmlFor="Grupo"> Grupo </label>

          {currentUser.email == user.email ? (
            <select disabled>
              <option>{currentUser.grupo}</option>
            </select>
          ) : (
            <select
              onChange={(event) => handleGrupo(event)}
              // value={grupo}
              // type="text"
              // name="Grupo"
              // required
              // onChange={(event) => setGrupo(event.target.value)}
            >
              <option value="Admin"> Admin </option>
              <option value="Estoquista"> Estoquista </option>
            </select>
          )}

          <label htmlFor="Senha"> Senha </label>
          <input
            value={senha}
            type="password"
            name="Senha"
            required
            onChange={(event) => setSenha(event.target.value)}
          />

          <label htmlFor="ConfirmaSenha"> Confirmar Senha </label>
          <input
            value={confirmaSenha}
            type="password"
            name="ConfirmaSenha"
            required
            onChange={(event) => setConfirmaSenha(event.target.value)}
          />
          <div>
            <button onClick={handleSave}>Alterar</button>
            <button
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancelar
            </button>
          </div>
        </FormContainer>
      </div>
    </MainFormContainer>
  );
}

export default Alterar;
