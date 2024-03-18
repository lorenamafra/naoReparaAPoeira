import DetalhesProduto from "../Components/DetalhesProduto";
import FooterProduto from "../Components/FooterProduto";
import Nav from "../Components/Nav";

function VisualizarProduto(props) {
	return (
		<div>
			<Nav />
			<DetalhesProduto />
			<FooterProduto />
		</div>
	);
}

export default VisualizarProduto;
