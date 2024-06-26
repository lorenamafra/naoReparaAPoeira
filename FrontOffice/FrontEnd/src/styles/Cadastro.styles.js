import styled from "styled-components";

export const CadastroPage = styled.div`
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
  select {
    padding: 0.5rem 0.5rem;
    margin: 1rem;
    color: black;
    border: 1px solid black;
    background-color: white;
  }
`;

export const MainCadastroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 2px solid black;
  box-shadow: 2px -1px 2px grey;
  padding: 2rem;
`;

export const CadastroContainer = styled.form`
  display: grid;
  place-items: center;
  color: black;
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

export const ButtonLinkCE = styled.button`
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
