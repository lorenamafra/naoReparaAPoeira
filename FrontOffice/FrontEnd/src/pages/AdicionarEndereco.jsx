import React, { useState } from "react";
import {
  CadastroEnderecoContainer,
  CadastroEnderecoPage,
  InputField,
  MainCadastroEnderecoContainer,
} from "../styles/AdicionarEndereco";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import { ButtonConfirmar } from "../styles/MainStyles.styles";

function AdicionarEndereco() {
  const navigate = useNavigate();
  const user = useLocation().state.user;
  const [address, setAddress] = useState({});
  const handleCEP = (e) => {
    console.log(e.target.value);
    axios
      .get(`https://viacep.com.br/ws/${e.target.value}/json/`)
      .then((resp) => {
        console.log("oi");
        setAddress(resp.data);
        console.log(address);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);

    const ObjectData = Object.fromEntries(fd);
    console.log(ObjectData);
    console.log(user);
    ObjectData.cpf = user.cpf;
    console.log(ObjectData);

    axios
      .post(
        `http://localhost:8081/cliente/${ObjectData.cpf}/endereco`,
        ObjectData
      )
      .then((resp) => {
        if (resp.status == 200) {
          navigate(-1);
        }
      });
  };
  return (
    <CadastroEnderecoPage>
      <MainCadastroEnderecoContainer onSubmit={handleSubmit}>
        <CadastroEnderecoContainer>
          <h1>Cadastrar endereço</h1>
          <InputField>
            <label>CEP</label>
            <input
              type="number"
              name="cep"
              maxLength="10"
              // onChange={(e) => handleChangeCEP(e)}
              onBlur={(e) => handleCEP(e)}
              // value={valueCEP}
            ></input>
          </InputField>

          <InputField>
            <label>Logradouro</label>
            <input
              type="text"
              name="logradouro"
              value={address.logradouro}
            ></input>
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
            <input type="text" name="bairro" value={address.bairro}></input>
          </InputField>

          <InputField>
            <label>Cidade</label>
            <input type="text" name="cidade" value={address.localidade}></input>
          </InputField>

          <InputField>
            <label>UF</label>
            <input type="text" name="uf" value={address.uf}></input>
          </InputField>

          <ButtonConfirmar>Confirmar</ButtonConfirmar>
        </CadastroEnderecoContainer>
      </MainCadastroEnderecoContainer>
    </CadastroEnderecoPage>
  );
}

export default AdicionarEndereco;
