import {
  PricingTag,
  ProductInfoContainer,
} from "../Styles/ProductDetails.styles";
import AddToCartButton from "./AddToCartButton";
import StarRating from "./StarRating";
import { useLocation } from "react-router";

function ProductInfo() {
  let disco = useLocation().state;
  console.log("prod info", location.state);

  return (
    <ProductInfoContainer>
      <h1>{disco.nome_disco}</h1>
      <h2>{disco.artista}</h2>
      <h3>
        {disco.ano}, {disco.genero}
      </h3>
      <StarRating />
      <PricingTag>R$ {disco.valor}</PricingTag>
      <AddToCartButton />
    </ProductInfoContainer>
  );
}

export default ProductInfo;
