import { useEffect } from "react";
import {
	PricingTag,
	ProductInfoContainer,
} from "../styles/ProductDetails.styles";
import AddToCartButton from "./AddToCartButton";
import StarRating from "./StarRating";
import { useParams } from "react-router";
import axios from "axios";
import { useState } from "react";

function ProductInfo() {
	const [disco, setDisco] = useState({});
	let produto = useParams();
	console.log(disco);

	useEffect(() => {
		axios
			.get(`http://localhost:8080/produto/${produto.cod_produto}`)
			.then((resp) => {
				setDisco(resp.data);
			});
	}, []);
	return (
		<ProductInfoContainer>
			<h1>{disco.nome_disco}</h1>
			<h2>{disco.artista}</h2>
			<h3>
				{disco.ano}, {disco.genero}
			</h3>
			<StarRating stars={disco.avaliacao} />
			<PricingTag>R$ {disco.valor}</PricingTag>
			<AddToCartButton />
		</ProductInfoContainer>
	);
}

export default ProductInfo;
