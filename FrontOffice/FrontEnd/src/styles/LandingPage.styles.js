import styled from "styled-components";

export const TituloLancamentos = styled.h1`
	margin: 0;
	font-size: 48px;
`;

export const MainLandingPageContainer = styled.main`
	width: 100%;
`;

export const TituloMaisVendidos = styled.h1`
	margin: 0;
	color: white;
`;

export const MainContainer = styled.div`
	height: 80vh;
	background-color: ${(props) => (props.Dark ? "black" : "white")};
	display: flex;
	flex-direction: column;
	gap: 10rem;
	padding: 4rem;
`;

export const Container_Card_MainLancamentos = styled.div`
	display: grid;
	gap: 2rem;
	padding: 2rem 5rem;
`;

export const Container_Card_MainMaisVendidos = styled.div`
	background-color: black;
`;

export const Container_Card_MainPromocoes = styled.div``;

export const Imagem_ContainerLancamentos = styled.div`
	border-bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Imagem_ContainerMaisVendidos = styled.div`
	border: 2px solid white;
	height: 15rem;
	width: 15rem;
`;

export const DescricaoLancamentos = styled.div`
	border-top: 5px solid black;
	text-align: left;
	padding: 0 1rem;
	height: 12rem;
	overflow-y: hidden;
	overflow-x: hidden;
	display: grid;

	span {
		padding: 0;
		margin-bottom: 1rem;
		justify-content: center;
		height: 7rem;
		h1 {
			margin-bottom: 0;
		}
		h2 {
			margin: 0;
			font-weight: 400;
		}
	}
`;

export const CardLancamentosContainer = styled.div`
	border: 5px solid black;
	width: 20rem;
`;

export const DescricaoMaisVendidos = styled.div`
	display: grid;
	justify-content: center;
	width: 15rem;
	color: white;
	padding: 1rem 0 1rem 0;
`;

export const Foto = styled.img`
	width: 100%;
	aspect-ratio: 1/1;
`;

export const BotaoCarrinho = styled.button`
	/* color: white; */
	color: ${(props) => (props.theme == "Dark" ? "white" : "black")};
	background-color: ${(props) => (props.theme == "Dark" ? "black" : "white")};

	margin: none;
	width: 100%;
	padding: 1rem;
	font-size: 24px;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	transition: all ease-in-out 0.15s;

	&:hover {
		cursor: pointer;
		color: ${(props) => (props.theme == "Dark" ? "black" : "white")};
		background-color: ${(props) => (props.theme == "Dark" ? "white" : "black")};
	}
`;

export const BotaoBranco = styled.button`
	border: 2px solid white;
	border-radius: 2px;
	color: black;
	background-color: white;
	margin-top: 1rem;
`;

export const Container_InnerContainer = styled.div`
	margin-bottom: 4rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
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
