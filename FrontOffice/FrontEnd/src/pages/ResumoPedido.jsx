import React from "react";
import {
  ContainerLeft,
  ContainerPedido,
  ContainerPrincipal,
  ContainerRight,
  ContainerTotal,
  DescricaoProduto,
  DescricaoTotal,
  FormaPagamento,
  MainResumoPedido,
  PagamentoContainer,
  PrecoProduto,
  ProdutoContainer,
} from "../styles/ResumoPedido";
import {
  ButtonConfirmarBranco,
  ContainerButton,
} from "../styles/MainStyles.styles";
import { useLocation } from "react-router";

// var pedido = {
//   items: [
//     {
//       nome_disco: "I Love You",
//       artista: "The Neighbourhood",
//       id_produto: 1,
//       qtd: 3,
//       valor: 250,
//       imagem: "/TNILoveYou20131.jpg",
//     },
//     {
//       nome_disco: "AM",
//       artista: "Arctic Monkeys",
//       id_produto: 5,
//       qtd: 1,
//       valor: 250,
//       imagem: "/AMAM20130.jpeg",
//     },
//     {
//       nome_disco: "Humbug",
//       artista: "Arctic Monkeys",
//       id_produto: 3,
//       qtd: 1,
//       valor: 15,
//       imagem: "/AMHumbug20090.jpg",
//     },
//   ],
//   valor: {
//     subTotal: 1015,
//     valorFrete: 0,
//     total: 0,
//   },
//   cliente: {
//     id_cliente: 4,
//     cpf: "51501128876",
//     email: "denisls02@outlook.com",
//     nome_completo: "undefined",
//     data_nascimento: "2002-11-15T02:00:00.000Z",
//     genero: "Masculino",
//     endereco_faturamento_cep: "3243080",
//     endereco_faturamento_numero: "191",
//     endereco_faturamento_complemento: "casa",
//   },
//   envio: {
//     tipoFrete: "Nuvem Voadora",
//     valorFrete: 20,
//     endereco: {
//       cep: "03243080",
//       numero: "191",
//       complemento: "Casa",
//       logradouro: "Rua Vitória do Mearim",
//     },
//   },
//   pagamento: {
//     FormaPagamento: "",
//     formaPagamento: "Cartao",
//     finalCartao: "9642",
//     parcelas: "",
//   },
// };

function ResumoPedido() {
  const pedido = useLocation().state.pedido;
  console.log(pedido);
  return (
    <MainResumoPedido>
      <ContainerPrincipal>
        <h2>Resumo do Pedido</h2>
        <ContainerPedido>
          <ContainerLeft>
            {pedido.items.map((item) => (
              <ProdutoContainer>
                <DescricaoProduto>
                  <p>
                    <b>Álbum:</b> {item.nome_disco}
                    <br />
                    <b>Artista:</b> {item.artista}
                    <br />
                    <b>Qtd:</b> {item.qtd}
                  </p>
                </DescricaoProduto>
                <PrecoProduto>
                  <p>R$ {item.valor}</p>
                </PrecoProduto>
              </ProdutoContainer>
            ))}
          </ContainerLeft>
          <ContainerRight>
            <PagamentoContainer>
              <b>Pagamento via:</b>{" "}
              {pedido.pagamento.formaPagamento == "Cartao" ? (
                <p>Cartão de Crédito</p>
              ) : (
                <p>Boleto</p>
              )}
              <FormaPagamento>
                {pedido.pagamento.formaPagamento == "Cartao" && (
                  <div>
                    <p>Final do Cartão: {pedido.pagamento.finalCartao}</p>
                    <p>Parcelas: {pedido.pagamento.parcelas}</p>
                  </div>
                )}
              </FormaPagamento>
              {/* <p>
                  <b>Frete:</b> {item.tipoFrete} <br />
                  <b>Valor:</b> {item.valorFrete}
                </p> */}
            </PagamentoContainer>
          </ContainerRight>
        </ContainerPedido>
        <ContainerTotal>
          <DescricaoTotal>Total: R$ 90.90</DescricaoTotal>
          <ContainerButton>
            <ButtonConfirmarBranco>Finalizar</ButtonConfirmarBranco>
          </ContainerButton>
        </ContainerTotal>
      </ContainerPrincipal>
    </MainResumoPedido>
  );
}

export default ResumoPedido;
