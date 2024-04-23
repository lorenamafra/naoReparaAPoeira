import styled from "styled-components";

export const MainAlterarCliente = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: black;

  #container_alterarsenha {
    background-color: black;
    border: 2px solid white;
    height: 20rem;
    color: white;
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
  border: 2px solid white;
  padding: 2rem;
`;

export const ConteudoContainer = styled.div`
  display: grid;
  padding: 2rem;
  color: white;
`;

export const InputField = styled.div`
  text-align: left;
  display: grid;
  margin-top: 10px;
`;

export const ContainerBotao = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const ImgContainer = styled.div`
  display: flex;
  padding: 2rem;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 300px;
  height: 300px;
  aspect-ratio: 1/1;
`;
