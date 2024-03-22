import { useLocation } from "react-router";
import DetalhesProduto from "../Components/DetalhesProduto";
import FooterProduto from "../Components/FooterProduto";
import Nav from "../Components/Nav";

function VisualizarProduto() {
	let location = useLocation();
	console.log(location.state);
	return (
		<div>
			<Nav />
			<DetalhesProduto />
			<FooterProduto />
		</div>
	);
}

export default VisualizarProduto;
