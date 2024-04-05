/* eslint-disable react/jsx-key */
import Icon from "@mdi/react";
import { TituloLancamentos, MainContainer } from "../styles/LandingPage.styles";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardLancamentos from "./CardLancamentos";
import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";
import { useEffect, useState } from "react";
import axios from "axios";
function Lancamentos() {
	const [produtos, setProdutos] = useState([]);
	let cards = [];
	const [isLoading, setLoader] = useState(true);
	const settings = {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		speed: 500,
		centerMode: true,
		nextArrow: (
			<div>
				<Icon
					path={mdiArrowRight}
					size={4}
					style={{ color: "black", display: "block" }}
				/>
			</div>
		),
		prevArrow: (
			<div>
				<Icon
					path={mdiArrowLeft}
					size={4}
					style={{ color: "black", display: "block" }}
				/>
			</div>
		),
	};

	useEffect(() => {
		const getLancamentos = async () => {
			const data = await axios.get("http://localhost:8080/produtos");
			// setProdutos(data.data);
			console.log(data.data.produtos);
			setProdutos(data.data.produtos);

			setLoader(false);
		};
		getLancamentos().catch((err) => {
			console.log(err);
		});
	}, []);

	return (
		<MainContainer>
			{isLoading ? (
				<p> is Loading...</p>
			) : (
				<>
					<TituloLancamentos>Lançamentos Recentes</TituloLancamentos>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							padding: "0 9rem",
						}}
					>
						<Slider {...settings}>
							{produtos.map((produto) => {
								return <CardLancamentos produto={produto} />;
							})}
						</Slider>
					</div>
				</>
			)}
		</MainContainer>
	);
}

export default Lancamentos;
