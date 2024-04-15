import React from "react";
import {
  AlterarContainer,
  ContainerBotao,
  ConteudoContainer,
  ImgContainer,
  MainAlterarCliente,
  StyledImage,
} from "../styles/AlterarCliente.styles";
import { useNavigate } from "react-router";
import FormularioAlterarCadastro from "../Components/FormularioAlterarCadastro";
import Logo from "../assets/Component5.png";

function AlterarCliente() {
  let navigate = useNavigate();
  return (
    <MainAlterarCliente>
      <AlterarContainer>
        <ConteudoContainer>
          <FormularioAlterarCadastro />
        </ConteudoContainer>
        <ImgContainer>
          <StyledImage src={Logo} alt="Logo NRP" />
        </ImgContainer>
      </AlterarContainer>
    </MainAlterarCliente>
  );
}

export default AlterarCliente;
