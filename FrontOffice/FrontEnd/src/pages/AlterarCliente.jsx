import React from "react";
import {
  AlterarContainer,
  ConteudoContainer,
  MainAlterarCliente,
} from "../styles/AlterarCliente.styles";
import { useNavigate } from "react-router";
import FormularioAlterarCadastro from "../Components/FormularioAlterarCadastro";

function AlterarCliente() {
  let navigate = useNavigate();
  return (
    <MainAlterarCliente>
      <AlterarContainer>
        <ConteudoContainer>
          <FormularioAlterarCadastro />
        </ConteudoContainer>
      </AlterarContainer>
    </MainAlterarCliente>
  );
}

export default AlterarCliente;
