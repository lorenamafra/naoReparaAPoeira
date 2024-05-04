import React from "react";
import {
  ContainerLeft,
  ContainerPedido,
  ContainerPrincipal,
  ContainerRight,
  ContainerTotal,
  DescricaoProduto,
  DescricaoTotal,
  MainResumoPedido,
  PrecoProduto,
} from "../styles/ResumoPedido";
import { BotaoContinuar, ContainerButton } from "../styles/MainStyles.styles";

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
          <ContainerRight>
            Pagamento via: PIX
            <br />
            Frete: Nuvem Voadora
            <br />
            **1 dia útil: 90.90
          </ContainerRight>
        </ContainerPedido>
        <ContainerTotal>
          <DescricaoTotal>Total: 90.90</DescricaoTotal>
          <ContainerButton>
            <BotaoContinuar>Finalizar</BotaoContinuar>
          </ContainerButton>
        </ContainerTotal>
      </ContainerPrincipal>
    </MainResumoPedido>
  );
}

export default ResumoPedido;
