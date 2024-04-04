import React from "react";

import {
  Container_CardLancamentos,
  Container_Card_MainLancamentos,
  TituloLancamentos,
  MainContainer,
} from "../styles/LandingPage.styles";
import { useLocation } from "react-router";
import Component5 from "../assets/Component5.png";
import CardLancamentos from "./CardLancamentos";

function Lancamentos() {
  return (
    <MainContainer>
      <Container_Card_MainLancamentos>
        <TituloLancamentos>Lançamentos Recentes</TituloLancamentos>
        <Container_CardLancamentos>
          <CardLancamentos />
          <CardLancamentos />
          <CardLancamentos />
        </Container_CardLancamentos>
      </Container_Card_MainLancamentos>
    </MainContainer>
  );
}

export default Lancamentos;
