import styled from "styled-components";

export const MainFreteContainer = styled.main`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

export const CalculoFretePage = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const EnderecoEntregaContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 180px;
	width: 1180px;
	align-items: center;
	border: 2px solid black;
	box-shadow: 7px 7px 3px #c0c0c0;

	p {
		font-size: 25px;
	}
`;

export const OpcoesFreteContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 500px;
	width: 550px;
	align-items: center;
	border: 2px solid black;
	box-shadow: 7px 7px 3px #c0c0c0;
`;

export const OpFretediv = styled.div`
	font-size: 15px;
	display: grid;
	justify-items: left;
	align-items: center;
	grid-template-columns: 1fr 1fr;
	height: 100px;
	width: 530px;
	border: 1px solid black;
	background-color: ${(props) => (props.isSelected ? "black" : "")};

	&:hover {
		background-color: black;
		color: white;
	}
`;

export const ResumoFreteContainer = styled.div`
	display: flex;
	font-size: 20px;
	flex-direction: column;
	justify-content: space-around;
	height: 500px;
	width: 550px;
	align-items: center;
	border: 2px solid black;
	box-shadow: 7px 7px 3px #c0c0c0;

	div {
		margin-top: 10px;
		display: flex;
		font-size: 20px;
		height: 400px;
		width: 400px;
		flex-direction: column;
		align-items: left;
		margin-top: 20px;
	}
`;

export const DivisaoContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 6rem;
	gap: 4rem;
`;

export const ButtonContinuar = styled.button`
	background-color: white;
	border: 1px solid black;
	padding: 5px 150px;
	font-size: 25px;
	margin-bottom: 25px;

	&:hover {
		background-color: black;
		color: white;
	}
`;
("");

export const AlterarEnderecoButton = styled.button`
	background-color: white;
	border: 1px solid black;
	padding: 5px 150px;
	font-size: 25px;
	transition: all ease-in-out 0.15s;

	&:hover {
		background-color: black;
		color: white;
	}
`;
