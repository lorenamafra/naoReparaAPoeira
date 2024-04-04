import Lancamentos from "../Components/Lancamentos";

import { Main } from "../styles/LandingPage.styles";
import MaisVendidos from "../Components/MaisVendidos";
import Promocoes from "../Components/Promocoes";
import Footer from "../Components/Footer";

function LandingPage() {
  return (
    <Main>
      <Lancamentos />
      <MaisVendidos />
      <Promocoes />
      <Footer />
    </Main>
  );
}

export default LandingPage;
