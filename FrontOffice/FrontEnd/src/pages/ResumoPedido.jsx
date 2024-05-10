import React from "react";
import {
	ContainerLeft,
	ContainerPedido,
	ContainerPrincipal,
	ContainerRight,
	ContainerTotal,
	DescricaoProduto,
	DescricaoTotal,
	FormaPagamento,
	MainResumoPedido,
	PagamentoContainer,
	PrecoProduto,
	ProdutoContainer,
} from "../styles/ResumoPedido";
import {
	ButtonConfirmarBranco,
	ContainerButton,
} from "../styles/MainStyles.styles";
import { useLocation, useOutletContext } from "react-router";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router";

function ResumoPedido() {
	const context = useOutletContext();
	const navigate = useNavigate();
	const pedido = useLocation().state.pedido;
	console.log(pedido);
	const handleFinalizar = () => {
		console.log(pedido);

		axios.post("http://localhost:8081/pedido/criar", pedido).then((resp) => {
			if (resp.status == 200) {
				toast.success("Pedido criado");

				axios
					.post("http://localhost:8081/pedido/item/criar", pedido)
					.then((resp) => {
						if (resp.status == 200) {
							toast.success("Pedido finalizado");
							setTimeout(() => {
								navigate("/");
							}, 3000);
						}
					});
			} else {
				toast.warning("Ocorreu um erro");
			}
		});
	};

	return (
		<MainResumoPedido>
			<ContainerPrincipal>
				<h2>Resumo do Pedido</h2>
				<ContainerPedido>
					<ContainerLeft>
						{pedido.items.map((item) => (
							// eslint-disable-next-line react/jsx-key
							<ProdutoContainer>
								<DescricaoProduto>
									<p>
										<b>Álbum:</b> {item.nome_disco}
										<br />
										<b>Artista:</b> {item.artista}
										<br />
										<b>Qtd:</b> {item.qtd}
									</p>
								</DescricaoProduto>
								<PrecoProduto>
									<p>R$ {item.valor}</p>
								</PrecoProduto>
							</ProdutoContainer>
						))}
					</ContainerLeft>
					<ContainerRight>
						<PagamentoContainer>
							<b>Pagamento via:</b>{" "}
							{pedido.pagamento.formaPagamento == "Cartao" ? (
								<p>Cartão de Crédito</p>
							) : (
								<p>{pedido.pagamento.formaPagamento}</p>
							)}
							<FormaPagamento>
								{pedido.pagamento.formaPagamento == "Cartao" && (
									<div>
										<p>Final do Cartão: {pedido.pagamento.finalCartao}</p>
										<p>Parcelas: {pedido.pagamento.parcelas}</p>
									</div>
								)}
							</FormaPagamento>
						</PagamentoContainer>
						<div>
							<p>Endereço de entrega:</p>
							<p>
								{pedido.envio.endereco.logradouro},{" "}
								{pedido.envio.endereco.numero},{" "}
								{pedido.envio.endereco.complemento}
							</p>
							<p>CEP: {pedido.envio.endereco.cep}</p>
						</div>
					</ContainerRight>
				</ContainerPedido>
				<ContainerTotal>
					<DescricaoTotal>
						Total: R$ {parseFloat(pedido.valor.total)}
					</DescricaoTotal>
					<ContainerButton>
						<ButtonConfirmarBranco onClick={() => navigate(-1)}>
							Voltar
						</ButtonConfirmarBranco>
						<ButtonConfirmarBranco onClick={() => handleFinalizar()}>
							Finalizar
						</ButtonConfirmarBranco>
					</ContainerButton>
				</ContainerTotal>
			</ContainerPrincipal>
			<Toaster />
		</MainResumoPedido>
	);
}

export default ResumoPedido;
