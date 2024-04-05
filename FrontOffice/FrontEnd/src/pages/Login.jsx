import {
  Textfield,
  ImageContainer,
  MainLoginContainer,
  LoginContainer,
  ButtonLogar,
} from "../styles/MainStyles.styles";

function Login() {
  return (
    <MainLoginContainer>
      <LoginContainer>
        <h1>login</h1>

        <Textfield>
          <label>Email</label>
          <input type="email" name="email" />
        </Textfield>
        <Textfield>
          <label>Senha</label>
          <input type="password" name="password" />
        </Textfield>

        <ButtonLogar>oi</ButtonLogar>

        <Textfield>
          <button onClick={() => navigate("Cadastro")}>Registre-se</button>{" "}
          <label> se não tiver uma conta</label>
        </Textfield>
      </LoginContainer>

      <ImageContainer>
        <img src="../assets/Component5.png" alt="Logo NRP" />
      </ImageContainer>
    </MainLoginContainer>
  );
}

export default Login;
