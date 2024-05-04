import {
	Container_InnerContainer,
	MainContainer,
	TituloLancamentos,
} from "../styles/LandingPage.styles";
import CardLancamentos from "./CardLancamentos";

function Promocoes() {
	return (
		<MainContainer>
			<TituloLancamentos>Promoções</TituloLancamentos>
			<Container_InnerContainer>
				<CardLancamentos />
				<CardLancamentos />
				<CardLancamentos />
			</Container_InnerContainer>
		</MainContainer>
	);
}

export default Promocoes;
