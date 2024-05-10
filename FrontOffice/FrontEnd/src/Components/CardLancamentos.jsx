import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import {
	BotaoCarrinho,
	CardLancamentosContainer,
	DescricaoLancamentos,
	Foto,
	Imagem_ContainerLancamentos,
} from "../styles/LandingPage.styles";
import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { addToContextCart } from "../Context/CartFunctions";
import { toast } from "sonner";
function CardLancamentos(_props) {
	const context = useOutletContext();
	let imagem;
	const [Picture, setPic] = useState();
	useEffect(() => {
		axios
			.get(
				`http://localhost:8080/produto/${_props.produto.cod_produto}/imagens`
			)
			.then((resp) => {
				setTimeout(() => {
					imagem = resp.data;

					imagem = imagem[_props.produto.imagem_principal].imagem;
					setPic(<Foto src={`/${imagem}`} alt="" />);
				}, 50);
			});
	}, []);

	const disco = _props.produto;

	return (
		<CardLancamentosContainer>
			<Imagem_ContainerLancamentos>{Picture}</Imagem_ContainerLancamentos>
			<DescricaoLancamentos>
				<span>
					<h1>{disco.nome_disco}</h1>
					<h2>{disco.artista}</h2>
				</span>

				<h2>R$ {disco.valor}.00</h2>
			</DescricaoLancamentos>
			<span style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
				<BotaoCarrinho theme={"Dark"}>
					{" "}
					<Link to={`/Produto/${disco.cod_produto}`} state={{ disco: disco }}>
						{" "}
						Ver detalhes
					</Link>
				</BotaoCarrinho>
				<BotaoCarrinho
					theme={"Light"}
					// onClick={() =>
					onClick={() => {
						disco.imagem = Picture.props.src;
						addToContextCart(disco, context);
						toast.success("Disco adicionado ou quantidade incrementada");
					}}
				>
					<Icon path={mdiCartOutline} size={1.5} />
				</BotaoCarrinho>
			</span>
		</CardLancamentosContainer>
	);
}

export default CardLancamentos;
