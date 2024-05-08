import { useState } from "react";
import {
	FormaPagamentoPage,
	OpPagamentoContainer,
	OpPagamentoButton,
	DadosCartaoContainer,
	ButtonContinuar,
} from "../styles/Pagamento.styles";
import { useLocation, useNavigate } from "react-router";
import testeCartao from "../testes/TesteCartao";
import { Toaster } from "sonner";

function FormaPagamento() {
	const navigate = useNavigate();
	let location = useLocation();
	console.log(location);
	const [formaPagamento, setFormaPagamento] = useState(null);
	const [parcelas, setParcelas] = useState("");
	const handleSubmit = () => {
		const pedido = location.state.pedido;
		console.log(pedido);
		if (formaPagamento == null) {
			return;
		} else {
			const pedido = location.state.pedido;
			console.log(pedido);
			pedido.pagamento.formaPagamento = formaPagamento;
			if (formaPagamento == "Cartao") {
				pedido.pagamento.finalCartao = document
					.getElementById("numeroCartao")
					.value.slice(-4);

				pedido.pagamento.parcelas = parcelas;

				navigate("/ResumoPedido", { state: { pedido: pedido } });
			}
		}
		console.log("nem retornou");
	};

	const handleCard = (e) => {
		e.preventDefault();
		console.log("cardzin");
		const fd = new FormData(e.target);
		let objeto = Object.fromEntries(fd);
		console.log(objeto);
		console.log(typeof objeto.NumeroCartao);
		let finalCartao = objeto.NumeroCartao.slice(-4);
		console.log(finalCartao);
		console.log(testeCartao(objeto));
		if (testeCartao(objeto) == true) {
			setParcelas(objeto.parcelas);

			console.log("oi");
			handleSubmit();
		}
	};
	return (
		<FormaPagamentoPage>
			<h1>Qual a forma de pagamento?</h1>

			<OpPagamentoContainer>
				<OpPagamentoButton onClick={() => setFormaPagamento("Cartao")}>
					Cartão de crédito
				</OpPagamentoButton>
				<OpPagamentoButton onClick={() => setFormaPagamento("Boleto")}>
					Boleto
				</OpPagamentoButton>
				<OpPagamentoButton onClick={() => setFormaPagamento("Pix")}>
					PIX
				</OpPagamentoButton>
			</OpPagamentoContainer>

			{formaPagamento == "Cartao" ? (
				<DadosCartaoContainer onSubmit={(e) => handleCard(e)}>
					<label>Número do Cartão</label>
					<input type="number" name="NumeroCartao" id="numeroCartao"></input>

					<label>Nome do Titular</label>
					<input type="text" name="NomeTitular"></input>

					<label>CVV</label>
					<input type="number" name="CVV"></input>

					<label>Validade</label>
					<input type="month" name="Validade"></input>
					<label htmlFor="parcelas">Selecione as Parcelas</label>
					<select name="parcelas" id="parcelas">
						<option> 1X de {location.state.pedido.valor.total}</option>
						<option>
							{" "}
							2X de {Math.ceil(location.state.pedido.valor.total / 2)}
						</option>
						<option>
							{" "}
							3X de {Math.ceil(location.state.pedido.valor.total / 3)}
						</option>
					</select>
					<ButtonContinuar
						onClick={() => {
							handleCard();
						}}
					>
						{" "}
						Continuar
					</ButtonContinuar>
				</DadosCartaoContainer>
			) : (
				""
			)}

			{formaPagamento == "Pix" ? (
				<DadosCartaoContainer onSubmit={(e) => e.preventDefault()}>
					<p>Clique em continuar para gerar o PIX, no final do pedido!</p>
					<ButtonContinuar
						onClick={() => {
							handleSubmit();
						}}
					>
						{" "}
						Continuar
					</ButtonContinuar>
				</DadosCartaoContainer>
			) : (
				""
			)}

			{formaPagamento == "Boleto" ? (
				<DadosCartaoContainer onSubmit={(e) => e.preventDefault()}>
					<p>Clique em continuar para gerar o boleto, no final do pedido!</p>
					<ButtonContinuar
						onClick={() => {
							handleSubmit();
						}}
					>
						{" "}
						Continuar
					</ButtonContinuar>
				</DadosCartaoContainer>
			) : (
				""
			)}
			<Toaster />
		</FormaPagamentoPage>
	);
}

export default FormaPagamento;
