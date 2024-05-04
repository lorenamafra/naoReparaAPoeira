import {
	ProdutoCarrinhoButtonContainer,
	ProdutoCarrinhoContainer,
	ProdutoCarrinhoDetalhes,
} from "../styles/Carrinho.styles";
import {
	increase,
	decrease,
	removeFromCart,
} from "../Context/CartFunctions.js";
import Icon from "@mdi/react";
import { mdiMinus, mdiPlus, mdiTrashCan } from "@mdi/js";
import { BotaoPadrao } from "../styles/MainStyles.styles";
import { useOutletContext } from "react-router";

function ProdutoCarrinho(_props) {
	const context = useOutletContext();
	let disco = _props.produto;
	return (
		<ProdutoCarrinhoContainer>
			<ProdutoCarrinhoDetalhes>
				<img src={disco.imagem} alt="" />
				<div>
					<h1>
						{disco.nome_disco} - {disco.artista}
					</h1>
					<h2> {disco.valor}</h2>
				</div>
			</ProdutoCarrinhoDetalhes>
			<ProdutoCarrinhoButtonContainer>
				<BotaoPadrao theme="black">
					<Icon
						path={mdiMinus}
						size={2}
						onClick={() => context.setCart(decrease(disco, context.cart))}
					/>
				</BotaoPadrao>
				<h2>{disco.qtd}</h2>
				<BotaoPadrao
					theme="black"
					onClick={() => context.setCart(increase(disco, context.cart))}
				>
					<Icon path={mdiPlus} size={2} />
				</BotaoPadrao>
				<BotaoPadrao
					theme="black"
					onClick={() => context.setCart(removeFromCart(disco, context.cart))}
				>
					<Icon path={mdiTrashCan} size={2} />
				</BotaoPadrao>
			</ProdutoCarrinhoButtonContainer>
		</ProdutoCarrinhoContainer>
	);
}

export default ProdutoCarrinho;
