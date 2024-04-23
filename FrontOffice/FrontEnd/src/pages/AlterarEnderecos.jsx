import React from "react";
import { MainAlterarEndereco } from "../styles/AlterarEndereco.styles";
import { AlterarContainer } from "../styles/AlterarCliente.styles";
function AlterarEnderecos() {
  return (
    <div>
      <MainAlterarEndereco>
        <h1>Cadastrar Endereço</h1>
        <AlterarContainer></AlterarContainer>
      </MainAlterarEndereco>
    </div>
  );
}

export default AlterarEnderecos;
