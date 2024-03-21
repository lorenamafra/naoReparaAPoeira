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
  ContainerHead,
  AlterarStatusButton,
} from "../Styles/MainBackOffice.styles.js";

import {
  ProdutoTable,
  ProdutoTh,
  ProdutoTd,
  Pagination,
  PaginationButton,
  PaginationItem,
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
    { nome: "teste0", codigo: 0, estoque: 1, preco: 10.99, status: "inativo" },
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

  //Produtos --------------------------------------------------------------------------------

  const [products, setProducts] = useState([]);
  const [total] = useState(products.length);
  const [limite] = useState(10);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mostrarTabela, setMostrarTabela] = useState(false);
  const [loaderP, setLoaderP] = useState(true);
  const [nomeDisco, setNomeDisco] = useState();

  //Usuarios --------------------------------------------------------------------------------

  const currentUser = JSON.parse(sessionStorage.getItem("User"));
  const navigate = useNavigate();
  const [nome, setNome] = useState();
  const [usuarios, setUsuarios] = useState([]);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState();

  //Produtos --------------------------------------------------------------------------------

  useEffect(() => {
    function loadProdutos() {
      const totalPages = Math.ceil(total / limite);
      const arrayPages = [];
      for (let i = 1; i <= totalPages; i++) {
        arrayPages.push(i);
      }
      setPages(arrayPages);

      const startIndex = (currentPage - 1) * limite;
      const slicedProducts = products.slice(startIndex, startIndex + limite);
      setProducts(slicedProducts);
    }

    loadProdutos();
  }, [currentPage, total, limite, products]);

  useEffect(() => {
    const fetchProdutos = async () => {
      await axios.get("http://localhost:8080/produtos").then((resp) => {
        setProducts(resp.data.products);
        setLoaderP(false);
      });
    };
    fetchProdutos();
  }, []);

  const handleFetchProdutos = () => {
    if (nome == "") {
      axios.get("http://localhost:8080/produtos").then((resp) => {
        setProducts(resp.data.products);
        setLoader(false);
      });
    } else {
      axios
        .post("http://localhost:8080/produtos/pesquisar", {
          nomeDisco: nomeDisco,
        })
        .then((resp) => {
          setLoader(true);
          setUsuarios(resp.data);
          console.log(resp);
          setLoader(false);
        });
    }
  };

  const handleAlterarStatusProdutos = () => {
    if (confirm("Deseja alterar o status do produto?")) {
      usuario.status_cliente == "Ativo"
        ? axios.put("http://localhost:8080/produtos/alterarStatusProduto", {
            status_cliente: "Inativo",
            cod_produto: products.cod_produto,
          })
        : axios.put("http://localhost:8080/usuario/alterarStatusProduto", {
            status_cliente: "Ativo",
            email: products.cod_produto,
          });

      navigate(0);
    }
  };

  //Usuarios --------------------------------------------------------------------------------

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
                <ContainerHead>
                  <h1>Produtos</h1>
                </ContainerHead>

                <>
                  <ContainerBusca>
                    <button
                      onClick={() => setMostrarTabela(true) && fetchProdutos}
                    >
                      Listar produtos
                    </button>

                    <input
                      type="search"
                      id="search"
                      placeholder="Digite o nome do produto"
                      value={nomeDisco}
                      onChange={(event) => setNomeDisco(event.target.value)}
                    />
                    <button onClick={handleFetchProdutos}>
                      <img src={searchIcon} alt="" />
                    </button>
                    <button onClick={() => navigate("/CadastrarProdutos")}>
                      <Icon path={mdiPlusBoxOutline} size={1.5} alt="" />
                    </button>
                  </ContainerBusca>
                  {mostrarTabela && (
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
                            {products.map((product) => {
                              return (
                                <tr key={products.cod_produto}>
                                  <ProdutoTd>{product.cod_produto}</ProdutoTd>
                                  <ProdutoTd>{product.nome_disco}</ProdutoTd>
                                  <ProdutoTd>{product.estoque}</ProdutoTd>
                                  <ProdutoTd>{product.valor}</ProdutoTd>
                                  <ProdutoTd>
                                    {product.status_produto}
                                  </ProdutoTd>
                                  <ProdutoTd>
                                    <button>alterar</button>
                                  </ProdutoTd>
                                  <ProdutoTd>
                                    <div
                                      id="status"
                                      onClick={handleAlterarStatusProdutos}
                                    >
                                      {" "}
                                      {usuario.status_cliente}
                                    </div>
                                  </ProdutoTd>
                                  <ProdutoTd>
                                    <button>Visualizar</button>
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
                  )}
                </>
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
                            <Icon path={mdiPlusBoxOutline} size={1.5} alt="" />
                          </button>
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
