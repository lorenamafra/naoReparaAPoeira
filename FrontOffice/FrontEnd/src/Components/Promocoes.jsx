import React from "react";
import {
  Container_CardPromocoes,
  Container_Card_MainPromocoes,
  Main,
  TituloLancamentos,
} from "../styles/LandingPage.styles";
import CardPromocoes from "./CardPromocoes";

function Promocoes() {
  return (
    <Main>
      <Container_Card_MainPromocoes>
        <TituloLancamentos>Promoções</TituloLancamentos>
        <Container_CardPromocoes>
          <CardPromocoes />
          <CardPromocoes />
          <CardPromocoes />
        </Container_CardPromocoes>
      </Container_Card_MainPromocoes>
    </Main>
  );
}

export default Promocoes;
