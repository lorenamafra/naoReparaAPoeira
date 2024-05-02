import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { CarrinhoTotalContainer } from "../styles/Carrinho.styles";
import axios from "axios";
import { BotaoContinuar, BotaoPadrao } from "../styles/MainStyles.styles";
function CarrinhoTotal() {
	const context = useOutletContext();
	const [total, setTotal] = useState(0);

	useEffect(() => {
		let price = 0;
		for (let i = 0; i < context.cart.length; i++) {
			price += context.cart[i].valor * context.cart[i].qtd;
		}
		setTotal(price);
	}, [context.cart]);

	const handleSubmit = () => {
		const items = context.cart;
		const valor = {
			subTotal: total,
			tipoFrete: "",
			valorFrete: 0,
		};
		let cliente = JSON.parse(sessionStorage.getItem("User")) || undefined;
		const getCliente = async () => {
			if (cliente != undefined) {
				await axios
					.get(`http://localhost:8081/cliente/${cliente.email}`)
					.then((resp) => {
						return resp.data;
					});
			}
		};
		getCliente().then((resp) => {
			console.log(resp);
		});
		const pedido = {
			items: items,
			valor: valor,
			cliente: cliente,
		};

		console.log(pedido);
	};

	return (
		<CarrinhoTotalContainer>
			<div style={{ display: "flex", gap: "1rem" }}>
				<h1>TOTAL:</h1>
				<h1>{total}</h1>
			</div>
			<BotaoContinuar
				theme={"black"}
				onClick={() => {
					handleSubmit();
				}}
			>
				{" "}
				Continuar{" "}
			</BotaoContinuar>
		</CarrinhoTotalContainer>
	);
}

export default CarrinhoTotal;
