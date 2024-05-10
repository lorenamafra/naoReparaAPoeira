import { useLocation, useNavigate, useOutletContext } from "react-router";
import {
	CalculoFretePage,
	EnderecoEntregaContainer,
	OpcoesFreteContainer,
	OpFretediv,
	ResumoFreteContainer,
	ButtonContinuar,
	AlterarEnderecoButton,
	DivisaoContainer,
} from "../styles/CalculoFrete.styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

function CalculoFrete() {
	const context = useOutletContext();
	console.log(context);
	let location = useLocation().state.pedido;
	const valor = location.valor.subTotal;
	const [endereco, setEndereco] = useState({});
	const [loader, setLoader] = useState(true);
	const [haveAdd, setHaveAdd] = useState(false);
	const [frete, setFrete] = useState({
		valor: 0,
	});
	const [total, setTotal] = useState(valor + frete.valor);

	console.log(location);
	const navigate = useNavigate();
	const fretes = [
		{
			tipoFrete: "Nuvem Voadora",
			valorFrete: 20,
			tempo: "1 dia útil",
		},
		{
			tipoFrete: "Jaguar Tirica",
			valorFrete: 10,
			tempo: "2 dias úteis",
		},
		{
			tipoFrete: "Pombo Correios",
			valorFrete: 10,
			tempo: "2 dias úteis",
		},
	];

	const handleAdicionarEndereco = () => {
		const user = location.cliente;
		console.log(user);
		navigate("/SelecionarEndereco", { state: { pedido: location } });
	};

	useEffect(() => {
		const getEnderecoPadrao = async () => {
			if (location.cliente != undefined) {
				axios
					.get(`http://localhost:8081/${location.cliente.cpf}/enderecoPadrao`)
					.then((resp) => {
						console.log(resp.data);
						if (resp.data != "") {
							console.log("aqiiiii");
							setEndereco(resp.data);
							setLoader(false);
							setHaveAdd(true);
						} else {
							if (location.envio.endereco.cep != undefined) {
								setEndereco(location.envio.endereco);
								console.log("endereco");
								setHaveAdd(true);
								setLoader(false);
							} else {
								setLoader(false);
							}
						}
					});
			} else {
				setLoader(false);
			}
		};

		getEnderecoPadrao();
	}, []);

	useEffect(() => {
		setTotal(valor + frete.valor);
	}, [frete]);

	const handleFrete = (freteSelecionado, e) => {
		console.log(freteSelecionado);
		setFrete({
			valor: freteSelecionado.valorFrete,
			tipoFrete: freteSelecionado.tipoFrete,
		});
	};

	const handleSubmit = () => {
		let pedido = location;
		console.log(pedido.envio.tipoFrete);
		console.log(frete);
		pedido.envio.tipoFrete = frete.tipoFrete;
		pedido.envio.valorFrete = frete.valor;
		pedido.valor.total = total;
		pedido.valor.valorFrete = frete.valor;
		console.log(pedido);
		if (pedido.cliente != undefined) {
			if (pedido.envio.endereco.cep == undefined) {
				toast.warning("Selecione o endereço");
				return false;
			}

			if (frete.tipoFrete != undefined) {
				navigate("/Pagamento", { state: { pedido: pedido } });
			} else {
				toast.warning("Selecione o Frete");
			}
		} else {
			window.alert(
				"Você será redirecionado para a tela de cadastro para conseguirmos finalizar o pedido!"
			);
			navigate("/Cadastro", {
				state: { carrinho: true, context: context.cart },
			});
		}
	};
	return (
		<CalculoFretePage>
			<h1>Selecione o endereço de entrega:</h1>
			{loader ? (
				<p>isLoading</p>
			) : (
				<EnderecoEntregaContainer>
					{haveAdd ? (
						<div>
							<p>
								{endereco.logradouro}, {endereco.numero} - {endereco.cep}
							</p>

							<AlterarEnderecoButton
								onClick={() => {
									handleAdicionarEndereco();
								}}
							>
								{" "}
								Alterar Endereco
							</AlterarEnderecoButton>
						</div>
					) : (
						<div>
							{location.cliente == undefined ? (
								<p> Simule seu Frete </p>
							) : (
								<div>
									<p>Vamos adicionar um endereço para entrega</p>
									<AlterarEnderecoButton
										onClick={() => {
											handleAdicionarEndereco();
										}}
									>
										Adicionar Endereco
									</AlterarEnderecoButton>
								</div>
							)}
						</div>
					)}
				</EnderecoEntregaContainer>
			)}

			<DivisaoContainer>
				<OpcoesFreteContainer>
					{fretes.map((frete, key) => (
						<OpFretediv
							key={key}
							id={key}
							isSelected={false}
							onClick={(e) => {
								handleFrete(frete, e);
							}}
						>
							<p>Frete:{frete.tipoFrete}</p>
							<p>Valor: {frete.valorFrete}</p>
							<p>{frete.tempo}</p>
						</OpFretediv>
					))}
				</OpcoesFreteContainer>

				<ResumoFreteContainer>
					<div>
						<div>
							<label>Produtos:{location.valor.subTotal}</label>
						</div>
						<div>
							<label>Frete:{frete.valor}</label>
						</div>
						<div>
							<label>Subtotal:{total}</label>
						</div>
					</div>

					<ButtonContinuar onClick={handleSubmit}>Continuar</ButtonContinuar>
				</ResumoFreteContainer>
			</DivisaoContainer>
			<Toaster />
		</CalculoFretePage>
	);
}

export default CalculoFrete;
