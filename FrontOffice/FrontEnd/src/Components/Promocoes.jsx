import React from "react";
import {
  Container_CardPromocoes,
  Container_Card_MainPromocoes,
  MainContainer,
  TituloLancamentos,
} from "../styles/LandingPage.styles";
import CardPromocoes from "./CardPromocoes";

function Promocoes() {
  return (
    <MainContainer>
      <Container_Card_MainPromocoes>
        <TituloLancamentos>Promoções</TituloLancamentos>
        <Container_CardPromocoes>
          <CardPromocoes />
          <CardPromocoes />
          <CardPromocoes />
        </Container_CardPromocoes>
      </Container_Card_MainPromocoes>
    </MainContainer>
  );
}

export default Promocoes;
