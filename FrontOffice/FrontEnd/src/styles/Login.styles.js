import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: black;
`;

export const MainLoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 2px solid white;
  padding: 2rem;
`;

export const LoginContainer = styled.form`
  display: grid;
  place-items: center;
  color: white;
`;

export const InputField = styled.div`
  text-align: left;
  display: grid;
  color: white;
  margin-top: 10px;
`;

export const ImageContainer = styled.div`
  display: grid;
  place-items: center;
  img {
    height: 50%;
    aspect-ratio: 1/1;
  }
`;
