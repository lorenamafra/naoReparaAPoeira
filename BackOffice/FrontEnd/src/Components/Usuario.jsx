import React from 'react'

function Usuario() {
  return (
    <div>
        <div class="container-principal">
        <div class="container">
        <div id="name">Nome Completo</div>
        <div id="email">email@email.com</div>
        <div id="group">Grupo</div>
        <div id="status">Status</div>
        <button onclick="Alterar()">Alterar</button>   
      </div>
    </div>
  </div>
  )
}

export default Usuario