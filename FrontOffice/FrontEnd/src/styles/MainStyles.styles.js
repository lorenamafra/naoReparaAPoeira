import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: black;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  color: white;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
    gap: 4rem;

    a {
      cursor: pointer;
    }
  }
  img {
    cursor: pointer;
  }
`;

export const LoaderStyles = styled.img`
  animation: rotation 1s infinite linear;
  width: 500px;
  aspect-ratio: 1/1;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export const MainLoginContainer = styled.div`
  justify-content: center;
  align-items: center;
  border: 2px solid black;
`;

export const LoginContainer = styled.div`
  justify-content: center;
  align-items: center;
`;

export const Textfield = styled.div`
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
`;

export const ButtonLogar = styled.button`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const MainCadastroContainer = styled.div`
  justify-content: center;
  align-items: center;
  border: 2px solid black;
`;

export const CadastroContainer = styled.div`
  justify-content: center;
  align-items: center;
`;

export const ButtonCadastrar = styled.button`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ImageContainer = styled.div`
  justify-content: center;
  align-items: center;
`;

export const BotaoInativar = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-top: 20px;
  transition: all ease-in-out 0.15s;
  padding: 0.5rem 0.5rem;
  color: black;
  border: 1px solid #f2dd6e;
  background-color: #f2dd6e;
  font-size: 15px;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background-color: white;
    color: black;
    outline: 0.1rem solid black;
  }
`;

export const BotaoPadrao = styled.button`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  transition: all ease-in-out 0.15s;
  padding: 0.5rem;
  color: #4a4a4d;
  border: 1px solid #c6c6c7;
  border-radius: 5px;
  background-color: #c6c6c7;
  font-size: 15px;
  height: fit-content;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #4a4a4d;
    outline: 1px solid black;
  }
`;

export const BotaoLogar = styled.button`
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

export const ButtonConfirmar = styled.button`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  transition: all ease-in-out 0.15s;
  padding: 0.5rem;
  color: #06592d;
  border: 1px solid #ccd7c5;
  border-radius: 5px;
  background-color: #ccd7c5;
  font-size: 15px;
  height: fit-content;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #06592d;
    outline: 1px solid black;
  }
`;
