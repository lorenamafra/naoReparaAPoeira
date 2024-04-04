import React from "react";
import {
  Container_Footer,
  Contato_Footer,
  Duvidas_Footer,
  Main_Footer,
} from "../styles/LandingPage.styles";

function Footer() {
  return (
    <Container_Footer>
      <Contato_Footer>
        Avenida dos discos de Vinil, 1000
        <br />
        Jardim Itaipava - São Paulo, SP
        <br />
        Fale Conosco!
        <br />
        (11) 5656-5656
      </Contato_Footer>
      <Duvidas_Footer>Quais as formas de pagamento?</Duvidas_Footer>
    </Container_Footer>
  );
}

export default Footer;
