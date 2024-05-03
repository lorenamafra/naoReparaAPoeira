import CalculoFrete from "../Components/CalculoFrete";
import { MainFreteContainer } from "../styles/CalculoFrete.styles";
import { useLocation } from "react-router";
function Frete() {
	const location = useLocation().state.pedido;
	console.log(location);
	return (
		<MainFreteContainer>
			<CalculoFrete />
		</MainFreteContainer>
	);
}

export default Frete;
