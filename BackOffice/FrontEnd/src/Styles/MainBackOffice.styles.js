import styled from "styled-components";

export const MainBackOfficeContainer = styled.div`
	header {
		display: grid;
		place-items: center;
	}
`;

export const SidenavContainer = styled.nav`
	display: flex;
	height: 100vh;
	width: 10rem;
	min-width: 5rem;
	background-color: #383f51;

	div {
		display: flex;
		justify-content: center;
		height: 5rem;
		color: #f6f8ff;
	}
`;

export const OuterContainer = styled.div`
	display: flex;
	flex-shrink: 1;
	gap: 10rem;
`;

export const ListaUsuarios = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const MainContainer = styled.main`
	display: flex;
	justify-content: center;
`;

export const UsuarioContainer = styled.div`
	display: flex;
	align-items: flex-start;
`;

export const UsuarioInnerContainer = styled.div`
	display: flex;
	gap: 1rem;
	border: 1px solid black;
	padding: 1rem;
	box-shadow: -0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.4);
	align-items: center;

	& #status {
		color: #f6f8ff;
		border: 0.1rem solid red;
		background-color: red;
		border-radius: 0.9rem;
		padding: 0.3rem 0.5rem;
	}

	button {
		transition: all ease-in-out 0.15s;
		font-size: 15px;
		color: #f6f8ff;
		border: 0.1rem solid black;
		background-color: black;
		border-radius: 0.9rem;
		padding: 0.3rem 0.5rem;
		cursor: pointer;
		font-family: "Roboto Slab", serif;
		font-optical-sizing: auto;
		font-style: normal;
	}

	button:hover {
		color: black;
		background-color: #f6f8ff;
		border: 0.1rem solid black;
		border-radius: 0.9rem;
	}

	div {
		width: 8rem;
	}
`;

export const ContainerBusca = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem;
	gap: 0.5rem;
	text-align: center;
	border-radius: 0.5rem;

	button {
		padding: 10px 20px;
		background-color: #f6f8ff;
		border: 1px solid #383f51;
		cursor: pointer;
	}

	img {
		width: 15px;
	}
`;
