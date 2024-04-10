import {
	BotaoBranco,
	DescricaoMaisVendidos,
	Foto,
	Imagem_ContainerMaisVendidos,
} from "../styles/LandingPage.styles";
import LoaderImg from "../assets/LoaderImg.png";

function CardMaisVendidos() {
	return (
		<div>
			<Imagem_ContainerMaisVendidos>
				<Foto src={LoaderImg} alt="" />
			</Imagem_ContainerMaisVendidos>
			<DescricaoMaisVendidos>
				Nome Álbum
				<br />
				Nome Artista
				<br />
				R$80.00
				<BotaoBranco>Carrinho</BotaoBranco>
			</DescricaoMaisVendidos>
		</div>
	);
}

export default CardMaisVendidos;
