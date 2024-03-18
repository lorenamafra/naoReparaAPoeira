import { AddToCart } from "../Styles/ProductDetails.styles";

import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";

function AddToCartButton() {
	return (
		<AddToCart>
			Adicionar ao carrinho <Icon path={mdiCartOutline} size={1} />{" "}
		</AddToCart>
	);
}

export default AddToCartButton;
