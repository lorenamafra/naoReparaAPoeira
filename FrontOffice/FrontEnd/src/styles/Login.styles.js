import styled from "styled-components";

export const LoginPage = styled.div`
  background-color: black;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
`;

export const MainLoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 40%;
  max-width: 800px;
  min-width: 400px;
  border: 4px solid white;
`;

export const LoginContainer = styled.form`
  display: grid;
  place-items: center;
`;

export const InputField = styled.div`
  text-align: left;
  display: grid;

  margin-top: 10px;
`;

export const ButtonLogar = styled.button`
  margin-top: 20px;
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
