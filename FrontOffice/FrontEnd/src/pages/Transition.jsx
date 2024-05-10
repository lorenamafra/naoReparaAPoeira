import { useEffect } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router";
import { createCart } from "../Context/CartFunctions";
function Transition() {
	const context = useOutletContext();
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (location.cart) {
			console.log("opi");
			createCart(location.cart, context);
		}
	});
	setTimeout(() => {
		navigate("/Carrinho");
	}, 100);
	console.log(context.cart);
	return <div>Transtion</div>;
}

export default Transition;
