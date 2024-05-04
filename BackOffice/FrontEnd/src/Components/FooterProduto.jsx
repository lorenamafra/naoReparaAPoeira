import { useLocation, useParams } from "react-router";
import { FooterContainer } from "../Styles/ProductDetails.styles";

function FooterProduto() {
	let disco = useLocation().state;
	let cod_produto = disco.cod_produto;
	let description = disco.descricao;
	return (
		<FooterContainer>
			<h3>Descrição</h3>
			<p>{description}</p>

			<h3>SKU</h3>
			<p>{cod_produto}</p>
		</FooterContainer>
	);
}

export default FooterProduto;
