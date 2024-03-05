import React from 'react'
import { useNavigate } from 'react-router'

function Sidenav() {
  let navigate = useNavigate();

  return (
        <nav class="sidenav">
        <div class="nav">
        Opções
      <p onClick={()=>{navigate("/Usuarios/Cadastrar")}}>Cadastrar Usuários</p>
    </div>
  </nav>
  )
}

export default Sidenav