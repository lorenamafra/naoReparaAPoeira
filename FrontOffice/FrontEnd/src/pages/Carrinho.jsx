import {
	CarrinhoProdutosContainer,
	MainContainer,
} from "../styles/Carrinho.styles";
import ProdutoCarrinho from "../Components/ProdutoCarrinho";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import CarrinhoTotal from "../Components/CarrinhoTotal";
function Carrinho() {
	const context = useOutletContext();
	const [produtos, setProdutos] = useState([]);

	useEffect(() => {
		if (context.cart.length > 0) {
			sessionStorage.setItem("cart", JSON.stringify(context.cart));
			setProdutos(context.cart);
		}
	}, [context.cart]);

	useEffect(() => {
		const data = sessionStorage.getItem("cart");

		if (data) {
			console.log("oii");
			console.log(data);
			setProdutos(JSON.parse(data));
		}
	}, []);

	return (
		<MainContainer>
			<CarrinhoProdutosContainer>
				{produtos.length > 0 &&
					produtos.map((produto, key) => {
						return <ProdutoCarrinho produto={produto} key={key} />;
					})}
				{produtos.length == 0 ? <p> O carrinho está vazio !</p> : ""}
			</CarrinhoProdutosContainer>
			<CarrinhoTotal />
		</MainContainer>
	);
}

export default Carrinho;
