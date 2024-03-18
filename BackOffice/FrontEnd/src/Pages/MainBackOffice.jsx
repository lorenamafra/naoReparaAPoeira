import { useEffect, useState } from "react";
import Usuario from "../Components/Usuario.jsx";
import axios from "axios";
import searchIcon from "../assets/search.svg";
import Sidenav from "../Components/Sidenav.jsx";
import Icon from "@mdi/react";
import { mdiPlusBoxOutline } from "@mdi/js";
import {
	ListaUsuarios,
	ContainerBusca,
	MainBackOfficeContainer,
	MainContainer,
	OuterContainer,
	AlterarStatusButton,
} from "../Styles/MainBackOffice.styles.js";
import {
	ProdutoTable,
	ProdutoTh,
	ProdutoTd,
} from "../Styles/ListaProdutos.styles.js";
import { useNavigate } from "react-router";

//mockUser
// const mockUser = {
// 	nome:"Denis",
// 	status_cliente:"Ativo",
// 	email:"",
// 	grupo:"Admin"
// }

function MainBackOffice() {
	const produtos = [
		{ nome: "teste1", codigo: 1, estoque: 1, preco: 10.99, status: "inativo" },
		{ nome: "teste2", codigo: 2, estoque: 5, preco: 20.0, status: "ativo" },
		{ nome: "teste3", codigo: 3, estoque: 21, preco: 12.99, status: "ativo" },
		{ nome: "teste4", codigo: 4, estoque: 23, preco: 15.99, status: "ativo" },
		{ nome: "teste5", codigo: 5, estoque: 42, preco: 6.99, status: "inativo" },
		{ nome: "teste6", codigo: 6, estoque: 29, preco: 19.9, status: "ativo" },
		{ nome: "teste7", codigo: 7, estoque: 8, preco: 23.5, status: "ativo" },
		{ nome: "teste8", codigo: 8, estoque: 3, preco: 40.2, status: "ativo" },
		{ nome: "teste9", codigo: 9, estoque: 15, preco: 30.45, status: "inativo" },
		{ nome: "teste10", codigo: 10, estoque: 18, preco: 50.0, status: "ativo" },
		{
			nome: "teste11",
			codigo: 11,
			estoque: 31,
			preco: 32.8,
			status: "inativo",
		},
		{
			nome: "teste12",
			codigo: 12,
			estoque: 30,
			preco: 21.75,
			status: "inativo",
		},
		{ nome: "teste13", codigo: 13, estoque: 11, preco: 14.5, status: "ativo" },
	];

	const [currentPage, setCurrentPage] = useState(1);
	// Definindo o número de itens por página
	const itemsPerPage = 10;

	// Calculando o índice inicial e final dos itens na página atual
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const [currentItens, setCurrentItens] = useState([]);
	// Função para trocar para a página anterior
	const goToPrevPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	// Função para trocar para a próxima página
	const goToNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const currentUser = JSON.parse(sessionStorage.getItem("User"));
	const navigate = useNavigate();
	const [nome, setNome] = useState();
	const [usuarios, setUsuarios] = useState([]);
	const [loader, setLoader] = useState(true);
	const [page, setPage] = useState();
	console.log(produtos[0]);
	useEffect(() => {
		const fetchUsuarios = async () => {
			await axios.get("http://localhost:8080/usuarios").then((resp) => {
				setUsuarios(resp.data.usuarios);
				setLoader(false);
			});
		};
		fetchUsuarios();
	}, []);

	const handleFetch = () => {
		if (nome == "") {
			axios.get("http://localhost:8080/usuarios").then((resp) => {
				setUsuarios(resp.data.usuarios);
				setLoader(false);
			});
		} else {
			axios
				.post("http://localhost:8080/usuario/pesquisar", { nome: nome })
				.then((resp) => {
					setLoader(true);
					setUsuarios(resp.data);
					console.log(resp);
					setLoader(false);
				});
		}
	};

	console.log(page);

	return (
		<MainBackOfficeContainer>
			<aside>
				<p> {currentUser.nome}</p>
				<p> {currentUser.grupo} </p>
			</aside>

			<OuterContainer>
				<Sidenav page={[page, setPage]} />
				<MainContainer>
					{page == "Lista de Produtos" ? (
						<div>
							{" "}
							<div>
								<h1>Produtos</h1>

								<div>
									<button>Listar produtos</button>
								</div>

								<div>
									<input
										type="BuscaProduto"
										id="BuscaProduto"
										placeholder="Digite o nome do produto"
										value={"produto.nome"}
										onChange={(event) => setNomeProduto(event.target.value)}
									/>
									<button onClick={"handleFetch"}>
										<img src={searchIcon} alt="" />
									</button>
									<button onClick={() => navigate("/CadastrarProdutos")}>
										<Icon path={mdiPlusBoxOutline} size={1.5} alt="" />
									</button>
								</div>

								<div>
									<ProdutoTable>
										<thead>
											<tr>
												<ProdutoTh>Codigo do produto</ProdutoTh>
												<ProdutoTh>Nome do produto</ProdutoTh>
												<ProdutoTh>Quantidade em estoque</ProdutoTh>
												<ProdutoTh>Preço</ProdutoTh>
												<ProdutoTh>Status</ProdutoTh>
											</tr>
										</thead>
										<tbody>
											{produtos.map((produto) => {
												return (
													<tr key={produto.codigo}>
														<ProdutoTd>{produto.codigo}</ProdutoTd>
														<ProdutoTd>{produto.nome}</ProdutoTd>
														<ProdutoTd>{produto.estoque}</ProdutoTd>
														<ProdutoTd>{produto.preco}</ProdutoTd>
														<ProdutoTd>{produto.status}</ProdutoTd>
														<button>alterar</button>
														<AlterarStatusButton status={"Ativo"}>
															Ativo
														</AlterarStatusButton>
														<button>Visualizar</button>
													</tr>
												);
											})}
										</tbody>
									</ProdutoTable>

									<div>
										<button onClick={goToPrevPage} disabled={currentPage === 1}>
											Anterior
										</button>
										<button
											onClick={goToNextPage}
											disabled={indexOfLastItem >= produtos.length}
										>
											Próxima
										</button>
									</div>
								</div>
							</div>
						</div>
					) : (
						""
					)}
					{page == "Lista de Usuarios" ? (
						<div>
							{loader ? (
								<p> Is loading</p>
							) : (
								<div>
									{" "}
									<header>
										<span>
											<h1>Usuários</h1>

											<div>
												<ContainerBusca>
													<div>
														<input
															type="search"
															id="search"
															placeholder="Digite o nome"
															value={nome}
															onChange={(event) => setNome(event.target.value)}
														/>
														<button onClick={handleFetch}>
															<img src={searchIcon} alt="" />
														</button>

														<button
															onClick={() => {
																navigate("/Usuarios/Cadastrar");
															}}
														>
															{" "}
															+{" "}
														</button>
													</div>
												</ContainerBusca>
											</div>
										</span>
									</header>
									<ListaUsuarios>
										{usuarios.map((usuario, key) => (
											// eslint-disable-next-line react/jsx-key
											<Usuario
												usuario={usuario}
												key={key}
												status={usuario.status_cliente}
											/>
										))}
									</ListaUsuarios>
								</div>
							)}
						</div>
					) : (
						""
					)}
				</MainContainer>
			</OuterContainer>
		</MainBackOfficeContainer>
	);
}

export default MainBackOffice;
