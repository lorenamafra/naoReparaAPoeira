import styled from "styled-components";

export const MainContainer = styled.main`
	padding: 4rem;
`;

export const Preco = styled.p`
	color: red;
`;

export const ProdutoCarrinhoContainer = styled.div`
	padding: 3rem 2rem;
	display: grid;
	grid-template-columns: 7fr 3fr;
	img {
		height: 150px;
		aspect-ratio: 1/1;
		margin-right: 1rem;
	}
	gap: 4rem;
	text-align: left;
`;

export const ProdutoCarrinhoDetalhes = styled.div`
	background-color: black;
	color: white;
	display: flex;
	outline: 1px solid white;
	gap: 1rem;
`;

export const ProdutoCarrinhoButtonContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

export const CarrinhoProdutosContainer = styled.div`
	height: 65vh;
	overflow-y: scroll;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const CarrinhoTotalContainer = styled.div`
	background-color: white;
	height: 10vh;
	color: black;
	display: flex;
	outline: 5px solid black;
	justify-content: center;
	align-items: center;
	padding-left: 1rem;
	gap: 4rem;
`;
