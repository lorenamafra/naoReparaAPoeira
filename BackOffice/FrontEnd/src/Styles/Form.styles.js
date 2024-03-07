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