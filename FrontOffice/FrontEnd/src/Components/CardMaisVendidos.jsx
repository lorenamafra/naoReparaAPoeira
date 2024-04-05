import {
	BotaoBranco,
	DescricaoMaisVendidos,
	Foto,
	Imagem_ContainerMaisVendidos,
} from "../styles/LandingPage.styles";
import Component6 from "../assets/Component6.png";

function CardMaisVendidos() {
	return (
		<div>
			<Imagem_ContainerMaisVendidos>
				<Foto src={Component6} alt="" />
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
