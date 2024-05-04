import {
	ImageContainer,
	InnerContainer,
	MainContainer,
} from "../Styles/ProductDetails.styles";
import ProductImageDetailed from "./ProductImageDetailed";
import ProductInfo from "./ProductInfo";

function DetalhesProduto() {
	return (
		<div>
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
		</div>
	);
}

export default DetalhesProduto;
