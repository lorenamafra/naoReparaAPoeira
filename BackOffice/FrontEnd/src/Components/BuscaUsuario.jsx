import React from "react";
import searchIcon from "../assets/search.svg";

function BuscaUsuario() {
	return (
		<div>
			<div class="container-busca">
				<input type="text" id="search" placeholder="Digite o nome" />
				<button>
					<img src={searchIcon} alt="" />
				</button>
			</div>
		</div>
	);
}

export default BuscaUsuario;
