import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import { useState } from "react";
import CartContext from "../Context/CartContext";
function MainPage() {
	const [cart, setCart] = useState([]);
	return (
		<main>
			<CartContext.Provider value={[cart, setCart]}>
				<Nav />
				<Outlet />
			</CartContext.Provider>
			<Footer />
		</main>
	);
}

export default MainPage;
