import styled from "styled-components";

export const ProdutosContainer = styled.main`
  display: flex;
  justify-content: center;
`;

export const ProdutoContainer = styled.div``;

export const ProdutoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #dddddd;
`;

export const ProdutoTh = styled.th`
  background-color: #ddd;
  padding: 8px;
  text-align: left;
`;

export const ProdutoTd = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 8px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const PaginationButton = styled.div`
  display: flex;
`;

export const PaginationItem = styled.div`
  margin: 0 10px;
`;
