import styled from "styled-components";

export const MainAlterarCliente = styled.div`
  display: grid;
  justify-content: center;
  height: 80vh;
  align-items: center;
  background-color: white;

  #container_alterarsenha {
    background-color: white;
    border: 1px solid black;
    box-shadow: 2px -1px 5px grey;
    height: 20rem;
    color: black;
    aspect-ratio: 1/1;
    justify-content: center;
    align-items: center;
    display: flex;
    form {
      display: grid;
      gap: 0.5rem;
    }
  }
`;

export const AlterarContainer = styled.div`
  display: flex;
  border: 1px solid black;
  box-shadow: 2px -1px 2px grey;
  padding: 2rem;
`;

export const ConteudoContainer = styled.div`
  display: grid;
  color: black;
`;

export const InputField = styled.div`
  text-align: left;
  display: grid;
  margin-top: 10px;
  padding: 0.5rem;
`;

export const ContainerBotao = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
`;
