import styled from "styled-components";

export const CadastroPage = styled.div`
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
  select {
    padding: 0.5rem 0.5rem;
    margin: 1rem;
    color: black;
    border: 1px solid white;
    background-color: white;
  }
`;

export const MainCadastroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 2px solid white;
  padding: 2rem;
`;

export const CadastroContainer = styled.form`
  display: grid;
  place-items: center;
  color: white;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  input:focus {
    outline: 0;
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
