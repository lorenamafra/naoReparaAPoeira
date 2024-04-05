import {
	Container_InnerContainer,
	MainContainer,
	TituloMaisVendidos,
} from "../styles/LandingPage.styles";
import CardMaisVendidos from "./CardMaisVendidos";

function MaisVendidos() {
	return (
		<MainContainer Dark>
			<TituloMaisVendidos>Mais Vendidos</TituloMaisVendidos>
			<Container_InnerContainer>
				<CardMaisVendidos />
				<CardMaisVendidos />
				<CardMaisVendidos />
			</Container_InnerContainer>
		</MainContainer>
	);
}

export default MaisVendidos;
