import React from "react";
import {
  Container_CardMaisVendidos,
  Container_Card_MainMaisVendidos,
  MainContainer,
  TituloMaisVendidos,
} from "../styles/LandingPage.styles";
import CardMaisVendidos from "./CardMaisVendidos";

function MaisVendidos() {
  return (
    <MainContainer>
      <Container_Card_MainMaisVendidos>
        <TituloMaisVendidos>Mais Vendidos</TituloMaisVendidos>
        <Container_CardMaisVendidos>
          <CardMaisVendidos />
          <CardMaisVendidos />
          <CardMaisVendidos />
        </Container_CardMaisVendidos>
      </Container_Card_MainMaisVendidos>
    </MainContainer>
  );
}

export default MaisVendidos;
