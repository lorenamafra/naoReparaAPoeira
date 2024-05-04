import styled from "styled-components";

export const LoginMainContainer = styled.div`
	display: flex;
	height: 40rem;
	justify-content: center;
	align-items: center;
`;

export const CardLogin = styled.div`
	border: 1px solid black;
	box-shadow: 0.2rem 0.1rem rgba(0, 0, 0, 0.4);
	max-width: 15rem;
	padding: 3rem 4rem;
`;

export const Textfield = styled.div`
	margin: 0.5rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

export const BtnLogin = styled.button`
	transition: all ease-in-out 0.15s;
	padding: 0.5rem 0.5rem;
	color: #f6f8ff;
	border: 1px solid #f6f8ff;
	background-color: #383f51;
	font-size: 15px;
	cursor: pointer;

	&:hover {
		background-color: #f6f8ff;
		color: #383f51;
		border: 0.1rem solid #383f51;
	}
`;

export const LoginContainer = styled.form`
	display: grid;
	place-items: center;
`;

export const Erro = styled.p`
	color: red;
`;
