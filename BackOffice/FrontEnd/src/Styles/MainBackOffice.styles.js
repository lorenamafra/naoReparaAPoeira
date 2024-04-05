import styled from "styled-components";

export const ButaoTeste = styled.div`
	background-color: ${(props) => (props.status == "Ativo" ? "Green" : "Red")};
	background-color: ${(props) => (props.status == "Ativo" ? "Green" : "Red")};
`;
export const EstoquistaSideNav = styled.div``;
export const AdminSideNav = styled.div``;
export const MainBackOfficeContainer = styled.div`
	align-items: center;
	header {
		display: flex;
		justify-content: center;
	}

	header p {
		margin: 0;
	}
	span {
		display: grid;
		place-items: center;
	}

	aside {
		position: absolute;
		right: 0;
		margin: 0;
		padding-right: 3rem;
	}
`;

export const SidenavContainer = styled.nav`
	display: flex;
	color: white;
	height: 100vh;
	justify-content: center;
	width: 10rem;
	min-width: 5rem;
	background-color: #383f51;
	cursor: pointer;

	a {
		all: unset;
		text-align: left;
		list-style: none;
		margin: 0.5rem 0;
		padding: 0;
	}

	ul {
		display: grid;
		padding: 0;
	}
`;

export const OuterContainer = styled.div`
	display: flex;
	gap: 25%;
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
	display: grid;
	gap: 2rem;
	grid-template-columns: 2fr 1fr 0.5fr 0.5fr;
	border: 1px solid black;
	padding: 1rem;
	box-shadow: -0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.4);
	align-items: center;

	& #status {
		color: #f6f8ff;
		width: 4rem;
		text-align: center;

		background-color: ${(props) => (props.status == "Ativo" ? "Green" : "Red")};

		border-radius: 0.9rem;
		padding: 0.3rem 0.5rem;
	}
	& #status:hover {
		cursor: pointer;
		outline: 1px solid ${(props) => (props.status == "Ativo" ? "Green" : "Red")};
		background-color: #f6f8ff;
		color: ${(props) => (props.status == "Ativo" ? "Green" : "Red")};
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

export const AlterarStatusButton = styled.div`
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

export const ContainerHead = styled.div`
	display: flex;
	justify-content: center;
`;
