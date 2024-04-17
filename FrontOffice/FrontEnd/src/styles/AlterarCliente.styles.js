import styled from "styled-components";

export const MainAlterarCliente = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: black;
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

export const ButtonConfirmar = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  transition: all ease-in-out 0.15s;
  padding: 0.5rem 0.5rem;
  color: black;
  border: 1px solid #ccd7c5;
  background-color: #ccd7c5;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 0.1rem solid black;
  }
`;

export const ButtonEndereco = styled.button`
  transition: all ease-in-out 0.15s;
  padding: 0.5rem 0.5rem;
  color: black;
  border: 1px solid #e8eef2;
  background-color: #e8eef2;
  font-size: 15px;

  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 0.1rem solid black;
  }
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
