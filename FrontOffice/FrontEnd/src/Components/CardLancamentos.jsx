import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import {
	BotaoCarrinho,
	CardLancamentosContainer,
	DescricaoLancamentos,
	Foto,
	Imagem_ContainerLancamentos,
} from "../styles/LandingPage.styles";
import Component5 from "../assets/Component5.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CardLancamentos(_props) {
	// eslint-disable-next-line react/prop-types
	// let { ...produto } = props.produto;

	const [isLoading, setLoader] = useState(true);

	const disco = _props.disco;
	console.log(disco);
	// if (isLoading) return <p> Is Loading</p>;

	return (
		<CardLancamentosContainer>
			<Imagem_ContainerLancamentos>
				<Foto src={Component5} alt="" />
			</Imagem_ContainerLancamentos>
			<DescricaoLancamentos>
				<span>
					<h1></h1>
					<h2>Nome Artista</h2>
				</span>

				<h2>R$ 80.00</h2>
			</DescricaoLancamentos>
			<span style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
				<BotaoCarrinho theme={"Dark"}>
					{" "}
					{/* <Link to={`/Produto/${disco.cod_produto}`}> Ver detalhes</Link> */}
				</BotaoCarrinho>
				<BotaoCarrinho theme={"Light"}>
					<Icon path={mdiCartOutline} size={1.5} />
				</BotaoCarrinho>
			</span>
		</CardLancamentosContainer>
	);
}

export default CardLancamentos;
