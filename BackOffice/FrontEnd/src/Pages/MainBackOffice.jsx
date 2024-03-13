import { useEffect, useState } from "react";
import Usuario from "../Components/Usuario.jsx";
import axios from "axios";
import searchIcon from "../assets/search.svg";
import Sidenav from "../Components/Sidenav.jsx";
import {
  ListaUsuarios,
  ContainerBusca,
  MainBackOfficeContainer,
  MainContainer,
  OuterContainer,
} from "../Styles/MainBackOffice.styles.js";
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
    { nome: "teste", codigo: 1, estoque: 1, preco: 10.99 },
    { nome: "teste2", codigo: 12, estoque: 4, preco: 10.99 },
  ];

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
                <table>
                  <thead>
                    <tr>
                      <th>Codigo do produto</th>
                      <th>Nome do produto</th>
                      <th>Quantidade em estoque</th>
                      <th>Preço</th>
                    </tr>
                  </thead>
                  <tbody>
                    {produtos.map((produto, key) => {
                      return (
                        <tr>
                          <td>{produto.codigo}</td>
                          <td>{produto.nome}</td>
                          <td>{produto.estoque}</td>
                          <td>{produto.preco}</td>
                          <button>alterar</button>
                          <button>inativar</button>
                          <button>reativar</button>
                          <button>vizualizar</button>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
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
