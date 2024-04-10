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
