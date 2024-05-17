/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
	DadosCliente,
	DadosEntrega,
	ItensContainer,
	NFContainer,
} from "../styles/Pedido.styles";
function Pedido() {
	const navigate = useNavigate();
	const pedido = useLocation().state.pedido;
	const [items, setItems] = useState();
	const [endereco, setEndereco] = useState();
	const [cliente, setCliente] = useState();
	const [isLoaded, setLoaded] = useState();
	useEffect(() => {
		const getData = async () => {
			await axios
				.post("http://localhost:8081/pedido/itens", pedido)
				.then((resp) => setItems(resp.data));
			console.log(items);

			await axios
				.post("http://localhost:8081/endereco", pedido)
				.then((resp) => setEndereco(resp.data));

			await axios
				.get(`http://localhost:8081/cliente/cpf/${pedido.cpf}`, pedido)
				.then((resp) => {
					setCliente(resp.data);
				});

			setLoaded(true);
		};
		getData();
	}, []);

	return (
		<div>
			{isLoaded ? (
				<NFContainer>
					<p onClick={() => navigate(-1)}> Voltar </p>
					<DadosCliente>
						<p>Não Repare a Poeira LTDA.</p>{" "}
						<p>
							{" "}
							<b>Nota Fiscal:</b> {pedido.NF}
						</p>
					</DadosCliente>
					<DadosCliente>
						<p>
							{" "}
							<b>Nome/Razão Social:</b> {cliente.nome_completo}
						</p>
						<p>
							<b>CPF:</b> {cliente.cpf.substring(0, 3)}.
							{cliente.cpf.substring(3, 6)}.{cliente.cpf.substring(6, 9)}-
							{cliente.cpf.substring(9, 11)}
						</p>
					</DadosCliente>
					<DadosEntrega>
						<b>Endereço:</b> <br />
						<p>
							<b>Logradouro: </b>
							{endereco.logradouro}, {endereco.numero} - <b>CEP: </b>{" "}
							{endereco.cep}
						</p>
						<div>
							<p>
								{" "}
								<b>Entregadora</b>: {pedido.tipo_frete}
							</p>
							<p>
								<b>Valor Frete:</b> {pedido.valor_frete}
							</p>
						</div>
					</DadosEntrega>

					<ItensContainer>
						<p>
							<b>Itens:</b>
						</p>
						<table>
							<th width={"20%"}>Nome Disco</th>
							<th width={"20%"}>Artista</th>
							<th width={"20%"}>Valor</th>
							<th width={"20%"}>Quantidade</th>
							<th width={"20%"}>Valor Total</th>
							{items.map((item) => {
								return (
									<tr>
										<td width={"20%"}>{item.nome_disco}</td>
										<td width={"20%"}>{item.artista}</td>
										<td width={"20%"}>{item.valor}</td>
										<td width={"20%"}>{item.quantidade}</td>
										<td width={"20%"}>
											{Number(item.valor) * Number(item.quantidade)}
										</td>
									</tr>
								);
							})}
						</table>
						<p>
							<b>Valor total da Compra:</b> {pedido.valor_total}{" "}
						</p>

						<p>Forma de Pagamento: {pedido.forma_pagamento}</p>
					</ItensContainer>
				</NFContainer>
			) : (
				<p> is loading</p>
			)}
		</div>
	);
}

export default Pedido;
