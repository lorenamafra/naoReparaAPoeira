import { NavContainer } from "../styles/MainStyles.styles";
import Logo from "../assets/LoaderImg.png";
import { useNavigate } from "react-router-dom";
function Nav() {
  const currentUser = JSON.parse(sessionStorage.getItem("User"));
  console.log(currentUser);

  const navigate = useNavigate();
  return (
    <NavContainer>
      <img src={Logo} alt="vinil disc" />
      {currentUser ? (
        <div>
          <p>{currentUser.nome}</p>
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
        </div>
      ) : (
        <div>
          <Link to={"/Login"}>Login</Link>

          <Link to={"/Cadastro"}>Cadastrar</Link>
        </div>
      )}
    </NavContainer>
  );
}

export default Nav;
