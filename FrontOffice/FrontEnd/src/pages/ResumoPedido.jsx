import React from "react";
import {
  ContainerLeft,
  ContainerPedido,
  ContainerPrincipal,
  DescricaoProduto,
  MainResumoPedido,
  PrecoProduto,
} from "../styles/ResumoPedido";

function ResumoPedido() {
  return (
    <MainResumoPedido>
      <ContainerPrincipal>
        <h2>Resumo do Pedido</h2>
        <ContainerPedido>
          <ContainerLeft>
            <DescricaoProduto>Nome do Disco</DescricaoProduto>
            <PrecoProduto>R$ 199.90</PrecoProduto>
          </ContainerLeft>
        </ContainerPedido>
      </ContainerPrincipal>
    </MainResumoPedido>
  );
}

export default ResumoPedido;
