import React from 'react'
import "./ListarUsuarios.css"
import Usuario from "../Components/Usuario.jsx"
import BuscaUsuario from '../Components/BuscaUsuario'
import Sidenav from '../Components/Sidenav'


function ListarUsuarios() {
  const lista = [1,2,3,4]

  return (
    <div>    
    <main className="main-container">
    <h1>Usuários</h1>
    <BuscaUsuario/> 
    <div className='geral'>
    <Sidenav/>
    <div className='usuarios-container'>
    {lista.map((usuario)=>(
      <Usuario/>
    ))} 
    </div>
    </div>
    </main>
    </div>
  )
}

export default ListarUsuarios