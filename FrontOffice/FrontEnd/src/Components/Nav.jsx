import {
  DropdownDiv,
  DropdownDivContainer,
  LoggedDiv,
  NavContainer,
  UnloggedDiv,
} from "../styles/MainStyles.styles";
import Logo from "../assets/LoaderImg.png";
import { Link, useNavigate } from "react-router-dom";

import Icon from "@mdi/react";
import {
  mdiAccountCircle,
  mdiAccountPlusOutline,
  mdiCartOutline,
} from "@mdi/js";
function Nav() {
  const currentUser = JSON.parse(sessionStorage.getItem("User"));
  const navigate = useNavigate();
  return (
    <NavContainer>
      <img src={Logo} alt="vinil disc" onClick={() => navigate("/")} />
      {currentUser ? (
        <LoggedDiv>
          <DropdownDiv>
            <button>{currentUser.nome}</button>
            <DropdownDivContainer>
              <p
                onClick={() => {
                  navigate("/AlterarCliente", {
                    state: { email: currentUser.email },
                  });
                }}
              >
                {" "}
                Alterar Cadastro
              </p>
              <p
                onClick={() => {
                  navigate("/ListarPedidos", {
                    state: { user: currentUser },
                  });
                }}
              >
                Meus pedidos
              </p>
              <p
                onClick={() => {
                  sessionStorage.removeItem("User");
                  navigate("/");
                }}
              >
                Sair
              </p>
            </DropdownDivContainer>
          </DropdownDiv>
          <Link to={"/Carrinho"}>
            <Icon path={mdiCartOutline} size={1} />
          </Link>{" "}
        </LoggedDiv>
      ) : (
        <UnloggedDiv
          style={{
            verticalAlign: "center",
          }}
        >
          <Link to={"/Login"}>
            <Icon path={mdiAccountCircle} size={1} />
            <br />
            <>Login</>
          </Link>
          <Link to={"/Cadastro"}>
            <Icon path={mdiAccountPlusOutline} size={1} />
            <br />
            <>Cadastrar</>
          </Link>

          <Link to={"/Carrinho"}>
            <Icon path={mdiCartOutline} size={1} />
            <br />
            <>Carrinho</>
          </Link>
        </UnloggedDiv>
      )}
    </NavContainer>
  );
}

export default Nav;
