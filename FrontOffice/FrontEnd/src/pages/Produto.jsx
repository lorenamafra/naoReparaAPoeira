import DetalhesProduto from "../Components/DetalhesProduto";
import FooterProduto from "../Components/FooterProduto";
function Produto() {
	return (
		<div
			style={{
				height: "80vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<DetalhesProduto />
			<FooterProduto />
		</div>
	);
}

export default Produto;
