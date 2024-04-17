import { useLocation, useNavigate } from "react-router";
import DetalhesProduto from "../Components/DetalhesProduto";
import FooterProduto from "../Components/FooterProduto";
import Nav from "../Components/Nav";
import { useEffect } from "react";
import { useState } from "react";
function VisualizarProduto() {
	let location = useLocation();
	console.log(location.state);
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 150);
	}, []);
	let navigate = useNavigate();
	console.log(location.imagens);
	return (
		<div>
			{loader ? (
				<p> await </p>
			) : (
				<>
					<Nav />
					<p
						onClick={() => {
							// if (location.imagensCarregadas) {
							// 	// navigate(-1, { state: location.state });
							// 	console.log("veio do cadastrar");
							// } else {
							// 	console.log("veio do todos produtros");

							// 	// navigate("/Home/Produtos");
							// }

							navigate(-1, { state: location.state });
						}}
					>
						{" "}
						Retornar{" "}
					</p>
					<DetalhesProduto />
					<FooterProduto />
				</>
			)}
		</div>
	);
}

export default VisualizarProduto;
