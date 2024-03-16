import {
	ImageContainer,
	InnerContainer,
	MainContainer,
} from "../Styles/ProductDetails.styles";
import ProductImageDetailed from "./ProductImageDetailed";

function DetalhesProduto() {
	return (
		<div>
			<MainContainer>
				<InnerContainer>
					<ImageContainer>
						<ProductImageDetailed />
					</ImageContainer>
					<div></div>
				</InnerContainer>
			</MainContainer>
		</div>
	);
}

export default DetalhesProduto;
