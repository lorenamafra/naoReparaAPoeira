import styled from "styled-components";

export const TituloLancamentos = styled.h1`
  margin: 0;
`;

export const TituloMaisVendidos = styled.h1`
  margin: 0;
  color: white;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;

export const Container_Card_MainLancamentos = styled.div`
  display: grid;
  gap: 2rem;
`;

export const Container_Card_MainMaisVendidos = styled.div`
  border: 2px solid black;
  padding: 4rem;
  background-color: black;
  display: grid;
  gap: 2rem;
`;

export const Container_Card_MainPromocoes = styled.div`
  margin: 2rem;
  display: grid;
  gap: 2rem;
`;

export const Imagem_ContainerLancamentos = styled.div`
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  height: 15rem;
  width: 15rem;
`;

export const Imagem_ContainerMaisVendidos = styled.div`
  border: 2px solid white;
  height: 15rem;
  width: 15rem;
`;

export const DescricaoLancamentos = styled.div`
  display: grid;
  justify-content: center;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  width: 15rem;
  padding: 1rem 0 1rem 0;
`;

export const DescricaoMaisVendidos = styled.div`
  display: grid;
  justify-content: center;
  width: 15rem;
  color: white;
  padding: 1rem 0 1rem 0;
`;

export const Foto = styled.img`
  padding: 1rem;
  width: 200px;
  aspect-ratio: 1/1;
`;

export const BotaoPreto = styled.button`
  border: 2px solid black;
  border-radius: 2px;
  color: white;
  background-color: black;
  margin-top: 1rem;
`;

export const BotaoBranco = styled.button`
  border: 2px solid white;
  border-radius: 2px;
  color: black;
  background-color: white;
  margin-top: 1rem;
`;

export const Container_CardLancamentos = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const Container_CardMaisVendidos = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Container_CardPromocoes = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const Container_Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 2px solid black;
  background-color: black;
  padding: 1rem;
  width: 100%;
`;

export const Contato_Footer = styled.div`
  text-align: left;
  color: white;
`;

export const Duvidas_Footer = styled.div`
  text-align: left;
  color: white;
`;
