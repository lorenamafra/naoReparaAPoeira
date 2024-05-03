import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import { CarrinhoTotalContainer } from "../styles/Carrinho.styles";
import axios from "axios";
import { BotaoContinuar } from "../styles/MainStyles.styles";
function CarrinhoTotal() {
	const navigate = useNavigate();
	const context = useOutletContext();
	const [total, setTotal] = useState(0);
	const [user, setUser] = useState();
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
			valorFrete: 0,
			total: 0,
		};
		let cliente = JSON.parse(sessionStorage.getItem("User")) || undefined;
		const getCliente = async () => {
			if (cliente != undefined) {
				await axios
					.get(`http://localhost:8081/cliente/${cliente.email}`)
					.then((resp) => {
						setUser(resp.data);
					});
			} else {
				return undefined;
			}
		};
		getCliente();
		cliente = user;
		console.log(user);

		console.log(user);
		const pedido = {
			items: items,
			valor: valor,
			cliente: cliente,
			frete: { tipoFrete: "", valorFrete: "" },
			formaPagamento: "" }
		};

		console.log(pedido);

		navigate("/Frete", { state: { pedido: pedido } });
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
