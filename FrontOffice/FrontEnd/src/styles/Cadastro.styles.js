import styled from "styled-components";

export const CadastroPage = styled.div`
  background-color: black;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
`;

export const InputField = styled.div`
  text-align: left;
  display: grid;

  margin-top: 10px;
`;

export const MainCadastroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 40%;
  max-width: 800px;
  min-width: 400px;
  border: 4px solid white;
`;

export const CadastroContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const ButtonCadastrar = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  display: grid;
  place-items: center;
  border: 1px solid white;

  img {
    height: 50%;
    aspect-ratio: 1/1;
  }
`;
