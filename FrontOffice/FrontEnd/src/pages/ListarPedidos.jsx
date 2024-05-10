import React, { useEffect, useState } from "react";
import {
  CabecalhoTabela,
  Coluna,
  Descricao,
  MainListarPedidos,
  TabelaPedidos,
} from "../styles/ListarPedidos";
import { ButtonDetalhes } from "../styles/MainStyles.styles";
import { ContainerBotao } from "../styles/MeusEnderecos";
import { useLocation } from "react-router";
import axios from "axios";

function ListarPedidos() {
  const location = useLocation().state.user;
  const [pedidos, setPedidos] = useState([]);
  console.log(location);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/cliente/${location.email}`)
      .then((resp) => {
        axios.post("http://localhost:8081/pedidos", resp.data).then((resp) => {
          setPedidos(resp.data);
        });
      });
  }, []);
  return (
    <div>
      <MainListarPedidos>
        <TabelaPedidos>
          <CabecalhoTabela>
            <Coluna>Número do Pedido</Coluna>
            <Coluna>Data da Compra</Coluna>
            <Coluna>Valor Total</Coluna>
            <Coluna>Status</Coluna>
            <Coluna>Detalhes</Coluna>
          </CabecalhoTabela>
          {pedidos.map((pedido) => (
            <tr>
              <Descricao>{pedido.NF}</Descricao>
              <Descricao>{pedido.data}</Descricao>
              <Descricao>{pedido.valor_total}</Descricao>
              <Descricao>"{pedido.status}"</Descricao>
              <ContainerBotao>
                <ButtonDetalhes>+ Detalhes</ButtonDetalhes>
              </ContainerBotao>
            </tr>
          ))}
        </TabelaPedidos>
      </MainListarPedidos>
    </div>
  );
}

export default ListarPedidos;
