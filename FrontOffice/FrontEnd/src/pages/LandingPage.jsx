import Lancamentos from "../Components/Lancamentos";

import { Main } from "../styles/LandingPage.styles";
import MaisVendidos from "../Components/MaisVendidos";
import Promocoes from "../Components/Promocoes";
import Footer from "../Components/Footer";

function LandingPage() {
  return (
    <div>
      <Lancamentos />
      <MaisVendidos />
      <Promocoes />
      <Footer />
    </div>
  );
}

export default LandingPage;
