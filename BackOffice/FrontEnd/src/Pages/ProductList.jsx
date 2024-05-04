/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from "react";
import { ContainerBusca, ContainerHead } from "../Styles/MainBackOffice.styles";
import axios from "axios";
import { useNavigate } from "react-router";
import Icon from "@mdi/react";
import { mdiMagnify, mdiPlusBoxOutline } from "@mdi/js";
import {
	BtnAlterar,
	Pagination,
	PaginationButton,
	PaginationItem,
	ProdutoTable,
	ProdutoTd,
	ProdutoTh,
} from "../Styles/ListaProdutos.styles";

function ProductList() {
	const [isLoaded, setLoader] = useState(false);
	const [produtos, setProdutos] = useState([]);
	const navigate = useNavigate();
	// const [total] = useState(produtos.length);
	const [limite] = useState(10);
	const [pages, setPages] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [nomeDisco, setNomeDisco] = useState();
	const currentUser = JSON.parse(sessionStorage.getItem("User"));

	useEffect(() => {
		const fetchProdutos = async () => {
			await axios.get("http://localhost:8080/produtos").then((resp) => {
				const totalProdutos = resp.data.produtos.length;
				const totalPages = Math.ceil(totalProdutos / limite);
				const arrayPages = [];
				for (let i = 1; i <= totalPages; i++) {
					arrayPages.push(i);
				}
				setPages(arrayPages);

				const startIndex = (currentPage - 1) * limite;
				const endIndex = startIndex + limite;
				const slicedProducts = resp.data.produtos.slice(startIndex, endIndex);
				setProdutos(slicedProducts);

				setLoader(false);
			});
		};
		fetchProdutos();
		console.log(produtos);
	}, []);

	const handleFetchProdutos = () => {
		if (nomeDisco == "" || !nomeDisco) {
			axios.get("http://localhost:8080/produtos").then((resp) => {
				console.log("oii", resp);
				const totalProdutos = resp.data.produtos.length;
				const totalPages = Math.ceil(totalProdutos / limite);
				const arrayPages = [];
				for (let i = 1; i <= totalPages; i++) {
					arrayPages.push(i);
				}
				setPages(arrayPages);

				const startIndex = (currentPage - 1) * limite;
				const endIndex = startIndex + limite;
				const slicedProducts = resp.data.produtos.slice(startIndex, endIndex);
				setProdutos(slicedProducts);

				setLoader(false);
			});
		} else {
			axios
				.post("http://localhost:8080/produtos/pesquisar", {
					nomeDisco: nomeDisco,
				})
				.then((resp) => {
					setLoader(true);
					setProdutos(resp.data);
					console.log(resp);
					setLoader(false);
				});
		}
	};

	const handleAlterarStatusProdutos = (index) => {
		console.log(index);
		console.log(produtos[index]);
		if (confirm("Deseja alterar o status do produto?")) {
			produtos[index].status_produto == "Ativo"
				? axios.put("http://localhost:8080/produto/alterar/status", {
						status_produto: "Inativo",
						cod_produto: produtos[index].cod_produto,
				  })
				: axios.put("http://localhost:8080/produto/alterar/status", {
						status_produto: "Ativo",
						cod_produto: produtos[index].cod_produto,
				  });

			navigate(0);
		}
	};

	const handleVisualizar = (produto) => {
		console.log(produto.cod_produto);

		axios
			.get(`http://localhost:8080/produto/${produto.cod_produto}/imagens`)
			.then((resp) => {
				produto.imagensCarregadas = resp.data;
			})
			.then(() => {
				navigate("/VisualizarProduto", {
					state: produto,
				});
			});
	};
	return (
		<div>
			{isLoaded ? (
				<p> Is loading</p>
			) : (
				<div>
					<div>
						{" "}
						<ContainerHead>
							<h1>Produtos</h1>
						</ContainerHead>
						<>
							<ContainerBusca>
								<input
									type="search"
									id="search"
									placeholder="Digite o nome do produto"
									value={nomeDisco}
									onChange={(event) => setNomeDisco(event.target.value)}
								/>
								<button onClick={handleFetchProdutos}>
									<Icon path={mdiMagnify} alt="Lupa" size={1.5} />
								</button>
								{currentUser.grupo == "Admin" ? (
									<button onClick={() => navigate("Cadastrar")}>
										<Icon path={mdiPlusBoxOutline} size={1.5} alt="" />
									</button>
								) : (
									""
								)}
							</ContainerBusca>

							<div>
								<>
									<ProdutoTable>
										<thead>
											<tr>
												<ProdutoTh>Codigo do produto</ProdutoTh>
												<ProdutoTh>Nome do produto</ProdutoTh>
												<ProdutoTh>Quantidade em estoque</ProdutoTh>
												<ProdutoTh>Preço</ProdutoTh>
												<ProdutoTh>Status</ProdutoTh>
												<ProdutoTh></ProdutoTh>
												<ProdutoTh></ProdutoTh>
												<ProdutoTh></ProdutoTh>
											</tr>
										</thead>
										<tbody>
											{produtos.map((produto, index) => {
												return (
													<tr key={produtos.cod_produto}>
														<ProdutoTd>{produto.cod_produto}</ProdutoTd>
														<ProdutoTd>{produto.nome_disco}</ProdutoTd>
														<ProdutoTd>{produto.estoque}</ProdutoTd>
														<ProdutoTd>{produto.valor}</ProdutoTd>

														<ProdutoTd>
															<div
																className="buttonTD"
																onClick={() =>
																	navigate("Alterar", {
																		state: produto.cod_produto,
																	})
																}
															>
																Alterar
															</div>
														</ProdutoTd>
														<ProdutoTd>
															<BtnAlterar
																// eslint-disable-next-line react/no-unknown-property
																status={produto.status_produto}
																id="buttonStatus"
																onClick={() =>
																	handleAlterarStatusProdutos(index)
																}
															>
																{produto.status_produto}
															</BtnAlterar>
														</ProdutoTd>
														<ProdutoTd>
															<div
																className="buttonTD"
																onClick={() => handleVisualizar(produto)}
															>
																Visualizar
															</div>
														</ProdutoTd>
													</tr>
												);
											})}
										</tbody>
									</ProdutoTable>
									<Pagination>
										<PaginationButton>
											<PaginationItem>
												<button
													onClick={() =>
														setCurrentPage(
															currentPage > 1 ? currentPage - 1 : 1
														)
													}
												>
													Anterior
												</button>
											</PaginationItem>
											{pages.map((page) => (
												// eslint-disable-next-line react/jsx-key
												<PaginationItem>
													<button
														key={page}
														onClick={() => setCurrentPage(page)}
														disabled={page === currentPage}
													>
														{page}
													</button>
												</PaginationItem>
											))}
											<PaginationItem>
												<button
													onClick={() =>
														setCurrentPage(
															currentPage < pages.length
																? currentPage + 1
																: pages.length
														)
													}
												>
													Próxima
												</button>
											</PaginationItem>
										</PaginationButton>
									</Pagination>
								</>
							</div>
						</>
					</div>
				</div>
			)}
		</div>
	);
}

export default ProductList;
