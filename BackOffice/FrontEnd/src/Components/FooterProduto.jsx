import { useLocation } from "react-router";
import { FooterContainer } from "../Styles/ProductDetails.styles";

function FooterProduto() {
	let cod_produto = useLocation().state.cod_produto;
	let description = useLocation().state.descricao;
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
