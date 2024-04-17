import styled from "styled-components";

export const CadastroEnderecoPage = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: black;
`;

export const InputField = styled.div`
  text-align: left;
  display: grid;
  color: white;
  margin-top: 10px;
`;

export const MainCadastroEnderecoContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 2px solid white;
  padding: 2rem;
`;

export const CadastroEnderecoContainer = styled.div`
  display: grid;
  place-items: center;
  color: white;
`;

export const ButtonCadastrarEndereco = styled.button`
  transition: all ease-in-out 0.15s;
  padding: 0.5rem 0.5rem;
  margin: 1rem;
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

export const ImageContainer = styled.div`
  display: grid;
  place-items: center;

  img {
    height: 50%;
    aspect-ratio: 1/1;
  }
`;
