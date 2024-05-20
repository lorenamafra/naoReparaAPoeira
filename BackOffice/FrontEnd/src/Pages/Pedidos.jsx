/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { Btn, MainPedidos } from "../Styles/Pedidos";
import { useNavigate } from "react-router-dom";
import { ProdutoTable, ProdutoTh } from "../Styles/ListaProdutos.styles";
import axios from "axios";

function Pedidos() {
	const navigate = useNavigate();
	//tudo que acontecerá com página antes de ser carregada (receber os dados)
	//a lista vazia é para que não seja atualizado diversas vezes, pois o axios irá retornar os dados sempre que a lista for atualizada
	useEffect(() => {
		//promise
		axios.get("http://localhost:8081/pedidos").then((resp) => {
			setPedidos(resp.data);
		});
	}, []);

	const [pedidos, setPedidos] = useState([]);
	const handleAlterarStatus = (id_pedido, status) => {
		console.log(status);
		axios
			.put("http://localhost:8081/pedido/alterar", {
				status: status,
				id_pedido: id_pedido,
			})
			.then((resp) => {
				alert(resp.data);
				navigate(0);
			});
	};
	return (
		<div>
			<MainPedidos>
				<ProdutoTable>
					<thead>
						<tr>
							<ProdutoTh>Data do Pedido</ProdutoTh>
							<ProdutoTh>Nº do Pedido</ProdutoTh>
							<ProdutoTh>Valor Total</ProdutoTh>
							<ProdutoTh>Status</ProdutoTh>
							<ProdutoTh>Alterar Status</ProdutoTh>
							<ProdutoTh></ProdutoTh>
							<ProdutoTh></ProdutoTh>
						</tr>
					</thead>
					{/* map: passar por cada item da lista e chamá-lo de pedido */}
					{pedidos.map((pedido, key) => (
						<tr>
							<td>
								{pedido.data.substring(8, 10)} / {pedido.data.substring(5, 7)} /
								{pedido.data.substring(0, 4)}
							</td>
							<td>{pedido.id_pedido}</td>
							<td>{pedido.valor_total}</td>
							<td>{pedido.status}</td>
							<td>
								<Btn onClick={() => document.getElementById(key).showModal()}>
									Alterar Status
								</Btn>
								<dialog id={key}>
									<p>Pedido: {pedido.id_pedido}</p>
									<p>Status atua: {pedido.status}</p>

									<div>
										<button
											onClick={(e) =>
												handleAlterarStatus(
													pedido.id_pedido,
													e.target.innerHTML
												)
											}
										>
											Pagamento Aprovado
										</button>
										<button
											onClick={(e) =>
												handleAlterarStatus(
													pedido.id_pedido,
													e.target.innerHTML
												)
											}
										>
											Pagamento Rejeitado
										</button>
										<button
											onClick={(e) =>
												handleAlterarStatus(
													pedido.id_pedido,
													e.target.innerHTML
												)
											}
										>
											Aguardando Retirada
										</button>
										<button
											onClick={(e) =>
												handleAlterarStatus(
													pedido.id_pedido,
													e.target.innerHTML
												)
											}
										>
											Em transito
										</button>
										<button
											onClick={(e) =>
												handleAlterarStatus(
													pedido.id_pedido,
													e.target.innerHTML
												)
											}
										>
											Entregue
										</button>
									</div>

									<button onClick={() => document.getElementById(key).close()}>
										Cancelar
									</button>
								</dialog>
							</td>
						</tr>
					))}
				</ProdutoTable>
			</MainPedidos>
		</div>
	);
}

export default Pedidos;
