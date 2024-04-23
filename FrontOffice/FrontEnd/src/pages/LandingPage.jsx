import Footer from "../Components/Footer";
import Lancamentos from "../Components/Lancamentos";
import Nav from "../Components/Nav";
import { MainLandingPageContainer } from "../styles/LandingPage.styles";
import { Outlet } from "react-router";

function LandingPage() {
	return (
		<MainLandingPageContainer>
			<Lancamentos />
		</MainLandingPageContainer>
	);
}

export default LandingPage;
