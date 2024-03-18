import styled from "styled-components";

export const MainContainer = styled.div`
	display: grid;
	place-items: center;
	padding: 1rem;
`;

export const InnerContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 5rem 10rem;
	gap: 7rem;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

export const ImageContainer = styled.div`
	display: grid;
	place-items: center;
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	div {
		:not(img) {
			cursor: pointer;
			transition: all ease-in 0.15s;
		}
		:not(img):active {
			opacity: calc(0.4);
		}
	}
`;

export const DetailedImage = styled.img`
	aspect-ratio: 1/1;
	width: 60%;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

export const ProductInfoContainer = styled.div`
	h1,
	h2,
	h3 {
		margin: 0 auto;
	}
	h1 {
		font-size: 4rem;
	}
	h2 {
		font-size: 2rem;
	}

	h3 {
		font-size: 1.5rem;
	}
`;

export const AddToCart = styled.button`
	outline: none;
	background-color: var(--black);
	border: none;
	color: var(--white);
	width: 20rem;
	padding: 2rem;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	transition: all ease-in-out 0.15s;

	&:hover {
		color: black;
		outline: 1px solid black;
		background-color: white;
	}
`;

export const PricingTag = styled.p`
	font-size: 2rem;
`;

export const FooterContainer = styled.footer`
	padding: 0 5rem;
`;
