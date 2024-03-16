import styled from "styled-components";

export const MainFormContainer = styled.div`
	display: grid;
	place-items: center;

	header {
		display: flex;
		gap: 1rem;
	}
	header img {
		cursor: pointer;
	}
`;

export const ProdutoFormContainer = styled.form`
	display: grid;
	background-color: var(--blue);
	padding: 1rem;
	width: 55rem;
	color: var(--white);
	height: 80vh;

	fieldset {
		border: none;
		width: 5rem;
	}

	section {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	img {
		height: 200px;
		aspect-ratio: 1/1;
	}

	label img {
		width: 50px;
		height: 50px;
	}
`;

export const ImagesContainer = styled.div`
	display: flex;
	height: 300px;
`;

export const ImageFieldset = styled.fieldset`
	display: grid;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	button {
		color: white;
		background: none;
		border: 0;
		outline: 1px solid red;
		display: flex;
		justify-content: center;
		align-items: center;
		height: fit-content;
		transition: all ease-in-out 0.15s;
	}
	button:hover {
		background-color: red;
		color: var(--white);
	}

	button img {
		margin: 0;
		padding: 0;
		height: 25px;
	}
`;

export const ImgLabel = styled.img`
	height: 50px;
	width: 50px;
	background-color: none;
	margin: 0;
`;

export const SubmitButton = styled.button`
	all: unset;
	text-align: center;
	height: 5rem;
	float: bottom;
	background: none;
	outline: 1px solid white;
	box-shadow: none;
	transition: all ease-in-out 0.2s;

	&:hover {
		background-color: white;
		color: black;
	}
`;

export const FormContainer = styled.div`
	background-color: var(--blue);
	display: grid;
	padding: 2rem;
	color: white;
	max-height: 30%;

	div {
		margin: 0.5rem 0;
		display: grid;
		gap: 1rem;
		text-align: center;
		grid-template-columns: 1fr 1fr;
	}

	input,
	select {
		margin: 0.5rem;
		border: none;
		width: 100%;
		height: 25px;
		font-size: 18px;
		transition: all ease-in-out 0.15s;
	}

	input:focus,
	select:focus {
		outline: none;

		-webkit-box-shadow: 8px 13px 0px -8px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 8px 13px 0px -8px rgba(0, 0, 0, 0.75);
		box-shadow: 8px 13px 0px -8px rgba(0, 0, 0, 0.75);
	}

	button {
		all: unset;
		margin: 0 0.5rem;
		padding: 0.5rem 2rem;
		background-color: var(--white);
		color: var(--black);
		transition: all ease-in-out 0.2s;
	}

	button:hover {
		cursor: pointer;
		transform: scale(1.1);
	}
`;

export const InputQuantidade = styled.input`
	width: 50%;
	text-align: center;
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;
