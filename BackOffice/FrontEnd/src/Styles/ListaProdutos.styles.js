import styled from "styled-components";

export const ProdutosContainer = styled.main`
	display: flex;
	justify-content: center;
`;

export const BtnAlterar = styled.div`
	color: #f6f8ff;
	width: 4rem;
	text-align: center;

	background-color: ${(props) => (props.status == "Ativo" ? "Green" : "Red")};

	border-radius: 0.9rem;
	padding: 0.3rem 0.5rem;
	&:hover {
		cursor: pointer;
		outline: 1px solid ${(props) => (props.status == "Ativo" ? "Green" : "Red")};
		background-color: #f6f8ff;
		color: ${(props) => (props.status == "Ativo" ? "Green" : "Red")};
	}
`;

export const ProdutoTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	border: 1px solid #dddddd;

	.buttonTD {
		background-color: black;
		color: white;
		padding: 0.3rem 0.5rem;

		border-radius: 5rem;
		transition: all ease-in-out 0.15s;
		cursor: pointer;

		&:hover {
			background-color: white;
			color: black;
			outline: 1px solid black;
		}
	}
`;

export const ProdutoTh = styled.th`
	background-color: #ddd;
	padding: 8px;
	text-align: left;
`;

export const ProdutoTd = styled.td`
	border-bottom: 1px solid #ddd;
	padding: 8px;
`;

export const Pagination = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
	margin-bottom: 30px;
`;

export const PaginationButton = styled.div`
	display: flex;
`;

export const PaginationItem = styled.div`
	margin: 0 10px;
`;
