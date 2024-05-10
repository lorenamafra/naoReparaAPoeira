import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: black;
  height: 6rem;
  display: flex;
  color: white;
  padding-right: 1rem;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  img {
    cursor: pointer;
    height: 150px;
  }
`;

export const UnloggedDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  gap: 4rem;

  a:hover {
    cursor: pointer;
  }
`;
export const LoggedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 0 2rem;

  p,
  a {
    cursor: pointer;
  }
`;

export const DropdownDivContainer = styled.div`
  display: none !important;
  background-color: black;
  z-index: 1;
  position: absolute;
  min-width: 150px;
  margin-top: 1.45rem;

  p {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  ul {
    all: unset;
  }
  p:hover {
    background-color: white;
    color: black;
  }
  &:hover {
    display: block !important;

    cursor: pointer;
  }
`;

export const CarrinhoDropdown = styled.div`
  display: none !important;
  background-color: black;
  z-index: 1;
  position: absolute;
  margin-right: 100rem;
  p {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  ul {
    all: unset;
  }
  p:hover {
    background-color: white;
    color: black;
  }
  &:hover {
    display: block !important;

    cursor: pointer;
  }
`;

export const DropdownDiv = styled.div`
  float: left;
  overflow: hidden;
  padding: 5rem 0;
  button {
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    cursor: pointer;

    font-family: inherit; /* Important for vertical align on mobile phones */
    margin: 0; /* Important for vertical align on mobile phones */
  }

  &:hover div {
    display: block !important;
  }
  cursor: pointer;
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
  color: ${(props) => (props.theme == "black" ? "white" : "#4a4a4d")};
  border: 1px solid #c6c6c7;
  border-radius: 5px;
  background-color: ${(props) => (props.theme ? props.theme : "#c6c6c7")};
  font-size: 15px;
  height: fit-content;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: ${(props) => (props.theme ? props.theme : "#c6c6c7")};
    outline: 1px solid black;
  }
`;

export const BotaoContinuar = styled(BotaoPadrao)`
  font-size: 26px;
  text-align: center;
  padding: 1rem 5rem;
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

export const ButtonConfirmarBranco = styled.button`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  transition: all ease-in-out 0.15s;
  padding: 0.5rem;
  color: black;
  border: 1px solid white;
  background-color: white;
  font-size: 15px;
  height: fit-content;
  cursor: pointer;

  &:hover {
    background-color: #d5dfe5;
    color: black;
    outline: 1px solid black;
  }
`;

export const ButtonDetalhes = styled(ButtonConfirmarBranco)`
  border: 1px solid black;
  font-size: 10px;
  text-align: center;
  margin: 5px 0;
  padding: 0.5rem;
`;

export const ButtonConfirmarPreto = styled(ButtonConfirmarBranco)`
  border: 1px solid black;
  background-color: black;
  color: white;
  text-align: center;
  margin: 5px 0;
  padding: 0.5rem;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

export const mainPage = styled.main``;
