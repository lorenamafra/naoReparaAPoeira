import {
	PricingTag,
	ProductInfoContainer,
} from "../Styles/ProductDetails.styles";
import AddToCartButton from "./AddToCartButton";
import StarRating from "./StarRating";

function ProductInfo() {
	return (
		<ProductInfoContainer>
			<h1>Humbug</h1>
			<h2>Arctic Monkeys </h2>
			<h3>2006</h3>
			<StarRating />
			<PricingTag>R$ 25.00</PricingTag>
			<AddToCartButton />
		</ProductInfoContainer>
	);
}

export default ProductInfo;
