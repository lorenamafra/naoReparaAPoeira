import { useNavigate } from "react-router";
import axios from "axios";
import {
  UsuarioContainer,
  UsuarioInnerContainer,
} from "../Styles/MainBackOffice.styles";

function Usuario(props) {
  const usuario = props.usuario;
  const navigate = useNavigate();

  const handleAlterarStatus = () => {
    if (confirm("Deseja alterar o status?")) {
      usuario.status_cliente == "Ativo"
        ? axios.put("http://localhost:8080/usuario/alterarStatus", {
            status_produto: "Inativo",
            email: usuario.email,
          })
        : axios.put("http://localhost:8080/usuario/alterarStatus", {
            status_produto: "Ativo",
            email: usuario.email,
          });

      navigate(0);
    }
  };
  return (
    <UsuarioContainer>
      <UsuarioInnerContainer status={usuario.status_cliente}>
        <div>
          <div id="name">{usuario.nome}</div> <br />
          <div id="email">{usuario.email}</div>
        </div>
        <div id="group">{usuario.grupo}</div>
        <div id="status" onClick={handleAlterarStatus}>
          {" "}
          {usuario.status_cliente}
        </div>
        <button
          onClick={() =>
            navigate("/usuarios/alterar", { state: { usuario: usuario } })
          }
        >
          Alterar
        </button>
      </UsuarioInnerContainer>
    </UsuarioContainer>
  );
}

export default Usuario;
