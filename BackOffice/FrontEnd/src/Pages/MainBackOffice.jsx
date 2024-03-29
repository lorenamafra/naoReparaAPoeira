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
  //Produtos --------------------------------------------------------------------------------

  const [produtos, setProdutos] = useState([]);
  const [total] = useState(produtos.length);
  const [limite] = useState(10);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mostrarTabela, setMostrarTabela] = useState(false);
  const [loaderProdutos, setLoaderProdutos] = useState(true);
  const [nomeDisco, setNomeDisco] = useState();

  //Usuarios

  const currentUser = JSON.parse(sessionStorage.getItem("User"));
  const navigate = useNavigate();
  const [nome, setNome] = useState();
  const [usuarios, setUsuarios] = useState([]);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState();

  //Produtos

  /*   function loadProdutos() {
      const totalPages = Math.ceil(total / limite);
      const arrayPages = [];
      for (let i = 1; i <= totalPages; i++) {
        arrayPages.push(i);
      }
      setPages(arrayPages);

      const startIndex = (currentPage - 1) * limite;
      const slicedProducts = produtos.slice(startIndex, startIndex + limite);
      setProdutos(slicedProducts);
    }*/
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

        setLoaderProdutos(false);
      });
    };
    fetchProdutos();
  }, [currentPage, limite]);

  //loadProdutos();

  const handleFetchProdutos = () => {
    if (nomeDisco == "") {
      axios.get("http://localhost:8080/produtos").then((resp) => {
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

        setLoaderProdutos(false);
      });
    } else {
      axios
        .post("http://localhost:8080/produtos/pesquisar", {
          nomeDisco: nomeDisco,
        })
        .then((resp) => {
          setLoaderProdutos(true);
          setProdutos(resp.data);
          console.log(resp);
          setLoaderProdutos(false);
        });
    }
  };

  const handleAlterarStatusProdutos = (index) => {
    console.log(index);
    console.log(produtos[index]);
    if (confirm("Deseja alterar o status do produto?")) {
      produtos[index].status_produto == "Ativo"
        ? axios.put("http://localhost:8080/produto/alterarStatusProduto", {
            status_produto: "Inativo",
            cod_produto: produtos[index].cod_produto,
          })
        : axios.put("http://localhost:8080/produto/alterarStatusProduto", {
            status_produto: "Ativo",
            cod_produto: produtos[index].cod_produto,
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
              {loaderProdutos ? (
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
                          <img src={searchIcon} alt="" />
                        </button>
                        {currentUser.grupo == "Admin" ? (
                          <button
                            onClick={() => navigate("/CadastrarProdutos")}
                          >
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
                                      <button
                                        onClick={() =>
                                          navigate("/Produto/Alterar", {
                                            state: produto.cod_produto,
                                          })
                                        }
                                      >
                                        Alterar
                                      </button>
                                    </ProdutoTd>
                                    <ProdutoTd>
                                      <div
                                        id="status"
                                        onClick={() =>
                                          handleAlterarStatusProdutos(index)
                                        }
                                      >
                                        {" "}
                                        {produto.status_produto}
                                      </div>
                                    </ProdutoTd>
                                    <ProdutoTd>
                                      <button
                                        onClick={() =>
                                          navigate("/Produto/Visualizar", {
                                            state: produtos[index],
                                          })
                                        }
                                      >
                                        Visualizar
                                      </button>
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
                    </>
                  </div>
                </div>
              )}
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
