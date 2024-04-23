import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import { AddToCart } from "../styles/ProductDetails.styles";

function AddToCartButton() {
  return (
    <AddToCart>
      Adicionar ao carrinho <Icon path={mdiCartOutline} size={1} />{" "}
    </AddToCart>
  );
}

export default AddToCartButton;
