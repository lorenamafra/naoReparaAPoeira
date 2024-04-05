import { useLocation, useParams } from "react-router";
import DetalhesProduto from "../Components/DetalhesProduto";
import FooterProduto from "../Components/FooterProduto";
import Nav from "../Components/Nav";
import { useEffect } from "react";
import axios from "axios";

function VisualizarProduto() {
  const cod_produto = useParams();
  console.log(cod_produto);
  // useEffect(()=>{
  // 	const getDisco = () =>{
  // 		axios.get("http://localhost:8080/produto/")
  // 	}
  // })
  return (
    <div>
      <Nav />
      <DetalhesProduto />
      <FooterProduto />
    </div>
  );
}

export default VisualizarProduto;
