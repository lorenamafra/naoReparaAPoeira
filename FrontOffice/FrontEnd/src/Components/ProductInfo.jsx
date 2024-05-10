import { useEffect } from "react";
import {
  AddToCart,
  PricingTag,
  ProductInfoContainer,
} from "../styles/ProductDetails.styles";
import StarRating from "./StarRating";
import { useNavigate, useOutletContext, useParams } from "react-router";
import axios from "axios";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import { toast } from "sonner";
import { addToContextCart } from "../Context/CartFunctions";

function ProductInfo() {
  const navigate = useNavigate();
  const context = useOutletContext();
  const [disco, setDisco] = useState({});
  const [imagem, setImagem] = useState();
  const [imagens, setImagens] = useState([]);
  let produto = useParams();
  console.log(disco);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/produto/${produto.cod_produto}`)
      .then((resp) => {
        setDisco(resp.data);
      });
  }, []);

  const handleCompra = () => {
    let discoCopy = disco;
    // console.log(sessionStorage.getItem("IMAGEMPRINCIPALITEM"));
    discoCopy.imagem = JSON.parse(
      sessionStorage.getItem("IMAGEMPRINCIPALITEM")
    );

    console.log(discoCopy);

    addToContextCart(discoCopy, context);
    toast.success("Disco adicionado ou quantidade incrementada");
    navigate("/");
  };

  return (
    <ProductInfoContainer>
      <h1>{disco.nome_disco}</h1>
      <h2>{disco.artista}</h2>
      <h3>
        {disco.ano}, {disco.genero}
      </h3>
      <StarRating stars={disco.avaliacao} />
      <PricingTag>R$ {disco.valor}</PricingTag>
      <AddToCart onClick={() => handleCompra()}>
        Adicionar ao carrinho <Icon path={mdiCartOutline} size={1} />{" "}
      </AddToCart>
    </ProductInfoContainer>
  );
}

export default ProductInfo;
