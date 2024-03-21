import {
  ImageContainer,
  InnerContainer,
  MainContainer,
} from "../Styles/ProductDetails.styles";
import ProductImageDetailed from "./ProductImageDetailed";
import ProductInfo from "./ProductInfo";

function DetalhesProduto(props) {
  return (
    <div>
      <MainContainer>
        <InnerContainer>
          <ImageContainer>
            <ProductImageDetailed />
          </ImageContainer>
          <div>
            <ProductInfo props={props.props} />
          </div>
        </InnerContainer>
      </MainContainer>
    </div>
  );
}

export default DetalhesProduto;
