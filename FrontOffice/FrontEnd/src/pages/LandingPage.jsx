import Footer from "../Components/Footer";
import Lancamentos from "../Components/Lancamentos";
import { MainLandingPageContainer } from "../styles/LandingPage.styles";
import { Outlet } from "react-router";

function LandingPage() {
	return (
		<MainLandingPageContainer>
			<Lancamentos />
			<Footer />
		</MainLandingPageContainer>
	);
}

export default LandingPage;
