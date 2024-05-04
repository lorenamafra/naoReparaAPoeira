import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: white;
`;

export const MainLoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid black;
  box-shadow: 2px -1px 5px grey;
  padding: 2rem;
`;

export const LoginContainer = styled.form`
  display: grid;
  place-items: center;
  color: black;
`;

export const InputField = styled.div`
  text-align: left;
  display: grid;
  color: black;
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
