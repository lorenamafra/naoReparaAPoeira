import CalculoFrete from "../Components/CalculoFrete";
import { MainFreteContainer } from "../styles/CalculoFrete.styles";
import { useLocation, useOutletContext } from "react-router";
function Frete() {
	const location = useLocation().state.pedido;
	console.log(location);
	const context = useOutletContext();
	console.log(context);
	return (
		<MainFreteContainer>
			<CalculoFrete />
		</MainFreteContainer>
	);
}

export default Frete;
