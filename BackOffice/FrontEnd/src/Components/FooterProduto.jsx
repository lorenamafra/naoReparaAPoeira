import { useParams } from "react-router";

function FooterProduto() {
  let { disco } = useParams();
  let cod_produto = disco.cod_produto;
  let description = disco.descricao;
  return (
    <FooterContainer>
      <h3>Descrição</h3>
      <p>{description}</p>

      <h3>SKU</h3>
    </FooterContainer>
  );
}

export default FooterProduto;
