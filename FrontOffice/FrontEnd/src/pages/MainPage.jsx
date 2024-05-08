import { Outlet } from "react-router";
import Nav from "../Components/Nav";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

function MainPage() {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const data = sessionStorage.getItem("cart");
		if (data) {
			setCart(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		setTimeout(() => {
			if (cart) {
				sessionStorage.setItem("cart", JSON.stringify(cart));
			}
		}, 500);
	}, [cart]);

	return (
		<mainPage>
			<Nav />
			<Outlet context={{ cart, setCart }} />

			<Toaster expand={true} visibleToasts={10} />
		</mainPage>
	);
}

export default MainPage;
