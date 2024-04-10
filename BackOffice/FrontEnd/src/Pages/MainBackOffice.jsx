import { useState } from "react";
import Sidenav from "../Components/Sidenav.jsx";
import {
	MainBackOfficeContainer,
	OuterContainer,
} from "../Styles/MainBackOffice.styles.js";

import { Outlet } from "react-router";
import { Link } from "react-router-dom";

function MainBackOffice() {
	const currentUser = JSON.parse(sessionStorage.getItem("User"));

	const [page, setPage] = useState();

	return (
		<MainBackOfficeContainer>
			<aside>
				<p> {currentUser.nome}</p>
				<p> {currentUser.grupo} </p>
				<Link to="/">Deslogar</Link>
			</aside>

			<OuterContainer>
				<Sidenav page={[page, setPage]} />
				<Outlet />
			</OuterContainer>
		</MainBackOfficeContainer>
	);
}

export default MainBackOffice;
