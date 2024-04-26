import {
  BotaoPreto,
  DescricaoLancamentos,
  Foto,
  Imagem_ContainerLancamentos,
} from "../styles/LandingPage.styles";
import Component5 from "../assets/Component5.png";

function CardPromocoes() {
  return (
    <div>
      <Imagem_ContainerLancamentos>
        <Foto src={Component5} alt="" />
      </Imagem_ContainerLancamentos>
      <DescricaoLancamentos>
        Nome Álbum
        <br />
        Nome Artista
        <br />
        R$80.00
        <BotaoPreto>Carrinho</BotaoPreto>
      </DescricaoLancamentos>
    </div>
  );
}

export default CardPromocoes;
