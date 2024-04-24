import styled from "styled-components";

export const MainResumoPedido = styled.main`
  margin: 2rem;
  display: grid;
  justify-content: center;
  background-color: white;
`;
export const ContainerPrincipal = styled.div`
  display: grid;
`;

export const ContainerPedido = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0;
`;

export const ContainerLeft = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 5rem;
  gap: 1rem;
  align-items: center;
`;

export const DescricaoProduto = styled.div`
  display: flex;
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
`;
