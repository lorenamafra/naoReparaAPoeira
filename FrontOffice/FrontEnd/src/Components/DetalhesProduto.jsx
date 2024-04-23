import {
	ImageContainer,
	InnerContainer,
	MainContainer,
} from "../styles/ProductDetails.styles";
import ProductImageDetailed from "./ProductImageDetailed";
import ProductInfo from "./ProductInfo";

function DetalhesProduto() {
	return (
		<MainContainer>
			<InnerContainer>
				<ImageContainer>
					<ProductImageDetailed />
				</ImageContainer>
				<div>
					<ProductInfo />
				</div>
			</InnerContainer>
		</MainContainer>
	);
}

export default DetalhesProduto;
