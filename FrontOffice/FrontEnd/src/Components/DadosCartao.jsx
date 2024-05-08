import { DadosCartaoContainer } from "../styles/Pagamento.styles";

function DadosCartao() {
	return (
		<DadosCartaoContainer>
			<label>Número do Cartão</label>
			<input type="number" name="NumeroCartao" value=""></input>

			<label>Nome do Titular</label>
			<input type="text" name="NomeTitular" value=""></input>

			<label>CVV</label>
			<input type="number" name="CVV" value=""></input>

			<label>Validade</label>
			<input type="number" name="Validade" value=""></input>
		</DadosCartaoContainer>
	);
}

export default DadosCartao;
