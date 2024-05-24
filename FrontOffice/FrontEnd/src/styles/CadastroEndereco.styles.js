import styled from "styled-components";

export const CadastroEnderecoPage = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export const InputField = styled.div`
  text-align: left;
  display: grid;
  color: black;
  margin-top: 10px;
`;

export const MainCadastroEnderecoContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 2px solid black;
  box-shadow: 2px -1px 2px grey;
  padding: 2rem;
`;

export const CadastroEnderecoContainer = styled.div`
  display: grid;
  place-items: center;
  color: black;
`;

export const ImageContainer = styled.div`
  display: grid;
  place-items: center;

  img {
    height: 50%;
    aspect-ratio: 1/1;
  }
`;

export const ContainerBotao = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 0.5rem;
`;
