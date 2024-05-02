import styled from "styled-components";

export const MainFreteContainer = styled.main`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const CalculoFretePage = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EnderecoEntregaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
  width: 1000px;
  align-items: center;
  border: 1px solid black;
`;

export const OpcoesFreteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 500px;
  width: 550px;
  align-items: center;
  border: 1px solid black;
`;

export const OpFretediv = styled.div`
  display: grid;
  justify-items: left;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100px;
  width: 530px;
  border: 1px solid black;
`;

export const ResumoFreteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 500px;
  width: 550px;
  align-items: center;
  border: 1px solid black;
`;

export const DivisaoContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6rem;
  gap: 4rem;
`;

export const ButtonContinuar = styled.button``;

export const AlterarEnderecoButton = styled.button``;
