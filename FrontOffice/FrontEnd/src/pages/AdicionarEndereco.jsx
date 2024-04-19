import React from "react";
import { ButtonConfirmar } from "../styles/AlterarCliente.styles";
import {
  CadastroEnderecoContainer,
  CadastroEnderecoPage,
  InputField,
  MainCadastroEnderecoContainer,
} from "../styles/AdicionarEndereco";

function AdicionarEndereco() {
  return (
    <CadastroEnderecoPage>
      <MainCadastroEnderecoContainer>
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

          <ButtonConfirmar>Confirmar</ButtonConfirmar>
        </CadastroEnderecoContainer>
      </MainCadastroEnderecoContainer>
    </CadastroEnderecoPage>
  );
}

export default AdicionarEndereco;
