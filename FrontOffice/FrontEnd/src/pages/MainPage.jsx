import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

function MainPage() {
	return (
		<main>
			<Nav />
			<Outlet />
			<Footer />
		</main>
	);
}

export default MainPage;
