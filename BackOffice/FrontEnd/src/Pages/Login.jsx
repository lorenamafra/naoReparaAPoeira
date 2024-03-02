import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div>
        <main className="login_main" >
          <div className="card-login">
            <h1>Login</h1>
            <div className="container">
              <div className="textfield">
                <label for="usuario">Usuário</label>
                <input type="text" name="usuario" />
              </div>
              <div className="textfield">
                <label for="senha">Senha</label>
                <input type="password" name="senha" />
              </div>
              <button className="btn-login" onclick="Logar()"><b>Login</b></button>
            </div>
          </div>
        </main>
    </div>
  )
}

export default Login