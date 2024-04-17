import styled from "styled-components";

export const MainMeusEnderecos = styled.div`
  display: grid;
  justify-content: center;
`;

export const Title = styled.h1``;

export const Subtitle = styled.h3`
  text-align: left;
  margin: 0;
  padding: 1rem;
`;

export const ContainerEnderecos = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const ContainerEntrega = styled.div`
  border: 2px solid black;
  padding: 1rem 0;
`;

export const ContainerFaturamento = styled.div`
  border: 2px solid black;
  padding: 1rem 0;
`;

export const ContainerDescricao = styled.div`
  display: grid;
  margin: 1rem;
`;

export const ContainerBotaoAdd = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const ContainerBotao = styled.div`
  display: flex;
  justify-content: left;
  gap: 1rem;
`;

export const BotaoAdicionar = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-top: 20px;
  margin-bottom: 20px;
  transition: all ease-in-out 0.15s;
  padding: 0.5rem 0.5rem;
  color: black;
  border: 1px solid #ccd7c5;
  background-color: #ccd7c5;
  font-size: 15px;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background-color: white;
    color: black;
    outline: 0.1rem solid black;
  }
`;

export const BotaoInativar = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-top: 20px;
  transition: all ease-in-out 0.15s;
  padding: 0.5rem 0.5rem;
  color: black;
  border: 1px solid #f2dd6e;
  background-color: #f2dd6e;
  font-size: 15px;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background-color: white;
    color: black;
    outline: 0.1rem solid black;
  }
`;

export const BotaoPadrao = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-top: 20px;
  transition: all ease-in-out 0.15s;
  padding: 0.5rem 0.5rem;
  color: black;
  border: 1px solid #e8eef2;
  background-color: #e8eef2;
  font-size: 15px;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background-color: white;
    color: black;
    outline: 0.1rem solid black;
  }
`;
