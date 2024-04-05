import Lancamentos from "../Components/Lancamentos";

import MaisVendidos from "../Components/MaisVendidos";
import Promocoes from "../Components/Promocoes";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import { MainLandingPageContainer } from "../styles/LandingPage.styles";

function LandingPage() {
	return (
		<MainLandingPageContainer>
			<Nav />
			<Lancamentos />
			{/* <MaisVendidos />
			<Promocoes /> */}
			<Footer />
		</MainLandingPageContainer>
	);
}

export default LandingPage;
