import styled from "styled-components";

export const MainResumoPedido = styled.main`
  margin: 2rem;
  display: grid;
  justify-content: center;
  background-color: white;
  height: 100vh;
`;

export const ContainerPrincipal = styled.div``;

export const ContainerPedido = styled.div`
  display: flex;
  border: 1px solid black;
  box-shadow: 2px 2px grey;
  margin: 0;
`;

export const ContainerLeft = styled.div`
  display: grid;
  align-items: center;
  padding: 3rem;
  border-right: 1px solid grey;
`;

export const PagamentoContainer = styled.div`
  display: grid;
  text-align: left;
`;

export const FormaPagamento = styled.div`
  display: flex;
  text-align: left;
`;

export const DescricaoProduto = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background: repeating-linear-gradient(
    25deg,
    #fff,
    #fff 1px,
    #d7d7d7 1px,
    #d7d7d7 2px
  );
  border: 0.5px solid #d7d7d7;
`;

export const PrecoProduto = styled.div`
  display: flex;
  align-items: center;
`;

export const ProdutoContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 1rem;
  gap: 1rem;
`;

export const ContainerRight = styled.div`
  display: grid;
  padding: 5rem;
  gap: 1rem;
  align-items: center;
`;

export const ContainerTotal = styled.div`
  display: flex;
  padding: 1rem;
  margin: 2rem 0;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  background-color: black;
  box-shadow: 2px 2px grey;
`;

export const DescricaoTotal = styled.div`
  color: white;
`;
