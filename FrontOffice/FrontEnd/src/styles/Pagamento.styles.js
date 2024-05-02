import styled from "styled-components";

export const MainPagamentoContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const FormaPagamentoPage = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OpPagamentoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100px;
  width: 400px;
  align-items: center;
`;

export const OpPagamentoButton = styled.button`
  font-size: 18px;
  font-weight: 400;
  background-color: white;
  color: black;
  padding: 10px 20px;
  border: none;
  box-shadow: 2px 2px 5px grey;

  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const DadosCartaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 500px;
  width: 550px;
  align-items: center;
  border: 1px solid black;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonContinuar = styled.button``;
