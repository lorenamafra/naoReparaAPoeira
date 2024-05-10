import React from "react";
import {
  CabecalhoTabela,
  Coluna,
  Descricao,
  MainListarPedidos,
  TabelaPedidos,
} from "../styles/ListarPedidos";
import { ButtonDetalhes } from "../styles/MainStyles.styles";
import { ContainerBotao } from "../styles/MeusEnderecos";

function ListarPedidos() {
  return (
    <div>
      <MainListarPedidos>
        <TabelaPedidos>
          <CabecalhoTabela>
            <Coluna>Número do Pedido</Coluna>
            <Coluna>Data da Compra</Coluna>
            <Coluna>Valor Total</Coluna>
            <Coluna>Status</Coluna>
          </CabecalhoTabela>
          <Descricao>1</Descricao>
          <Descricao>João</Descricao>
          <Descricao>Camiseta</Descricao>
          <Descricao>2</Descricao>
        </TabelaPedidos>
        <ContainerBotao>
          <ButtonDetalhes>+ Detalhes</ButtonDetalhes>
        </ContainerBotao>
      </MainListarPedidos>
    </div>
  );
}

export default ListarPedidos;
