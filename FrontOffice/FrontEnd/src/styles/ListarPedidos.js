import styled from "styled-components";

export const MainListarPedidos = styled.main`
  margin: 2rem;
  display: grid;
  justify-content: center;
  background-color: white;
`;

export const TabelaPedidos = styled.table`
  border: 1px solid black;
  box-shadow: 2px 2px grey;
  border-collapse: collapse;
  width: 100%;
`;

export const CabecalhoTabela = styled.thead`
  background-color: black;
  color: white;
  font-size: 15px;
`;

export const Coluna = styled.th`
  padding: 8px;
  text-align: center;
  width: 20vh;
`;

export const Descricao = styled.td`
  padding: 8px;
  text-align: center;
`;
