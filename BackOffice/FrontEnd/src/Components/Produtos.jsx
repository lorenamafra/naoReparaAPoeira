import { useEffect, useState } from "react";
import axios from "axios";
import searchIcon from "../assets/search.svg";
import Sidenav from "./Sidenav.jsx";
import { useNavigate } from "react-router";


function Produtos(props) {






return (
	<produtosContainer>
		<produtosInnerContainer>
	<div>
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
   				<tr>
      				<td>{produtos.codigo}</td>
     				<td>{produtos.nome}</td>
      				<td>{produtos.estoque}</td>
					<td>{produtos.preco}</td>
    			</tr>
 	 		</tbody>
		</table>
				<div id="statusProduto" onClick={handleAlterarStatusProduto}>
					{" "}
					{produto.status}
				</div>
		</div>
		</produtosInnerContainer>
	</produtosContainer>

);
}

export default Produtos;
