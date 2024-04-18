import React from "react";
import { ButtonConfirmar } from "../styles/AlterarCliente.styles";
import {
  CadastroEnderecoContainer,
  CadastroEnderecoPage,
  MainCadastroEnderecoContainer,
} from "../styles/CadastroEndereco.styles";
import { ImageContainer } from "../styles/MainStyles.styles";
import { InputField } from "../styles/Login.styles";

function AdicionarEndereco() {
  return (
    <CadastroEnderecoPage>
      <MainCadastroEnderecoContainer onSubmit={(e) => handleSubmit(e)}>
        <ImageContainer>
          <img src={Logo} alt="Logo NRP" />
        </ImageContainer>
        <CadastroEnderecoContainer onSubmit={handleSubmit}>
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
              readOnly
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
            <input
              type="text"
              name="bairro"
              value={address.bairro}
              readOnly
            ></input>
          </InputField>

          <InputField>
            <label>Cidade</label>
            <input
              type="text"
              name="cidade"
              value={address.localidade}
              readOnly
            ></input>
          </InputField>

          <InputField>
            <label>UF</label>
            <input type="text" name="uf" value={address.uf} readOnly></input>
          </InputField>

          <ButtonConfirmar>Confirmar</ButtonConfirmar>
        </CadastroEnderecoContainer>
      </MainCadastroEnderecoContainer>
    </CadastroEnderecoPage>
  );
}

export default AdicionarEndereco;
