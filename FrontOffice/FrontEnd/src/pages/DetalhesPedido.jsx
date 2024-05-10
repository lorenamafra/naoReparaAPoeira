import React from "react";
import {
  DescricaoPedido,
  MainDetalhesPedido,
  TituloPedido,
} from "../styles/DetalhesPedido";
import {
  ButtonConfirmarPreto,
  ContainerButton,
} from "../styles/MainStyles.styles";

function DetalhesPedido() {
  return (
    <MainDetalhesPedido>
      <TituloPedido>Detalhes do Pedido</TituloPedido>
      <DescricaoPedido>
        Número do Pedido:
        <br />
        Data da Compra:
        <br />
        Disco: <br />
        Forma de Pagamento: <br />
        Endereço de Entrega: <br />
        Valor: <br />
        Valor do Frete: <br />
        Valor Total: <br />
      </DescricaoPedido>
      <ContainerButton>
        <ButtonConfirmarPreto onClick={() => navigate(-1)}>
          Finalizar
        </ButtonConfirmarPreto>
      </ContainerButton>
    </MainDetalhesPedido>
  );
}

export default DetalhesPedido;
