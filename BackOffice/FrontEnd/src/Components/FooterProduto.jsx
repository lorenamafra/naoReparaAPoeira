import { useLocation } from "react-router";
import { FooterContainer } from "../Styles/ProductDetails.styles";

function FooterProduto() {
  let cod_produto = useLocation().state.cod_produto;

  return (
    <FooterContainer>
      <h3>Descrição</h3>
      <p>Lorem Ipsun et dolor sit amet</p>

      <h3>SKU</h3>
      <p>{cod_produto}</p>
    </FooterContainer>
  );
}

export default FooterProduto;
