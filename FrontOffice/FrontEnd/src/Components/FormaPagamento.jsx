import {
  FormaPagamentoPage,
  OpPagamentoContainer,
  OpPagamentoButton,
  DadosCartaoContainer,
  ButtonContinuar,
} from "../styles/Pagamento.styles";

function FormaPagamento() {
  return (
    <FormaPagamentoPage>
      <h1>Qual a forma de pagamento?</h1>

      <OpPagamentoContainer>
        <OpPagamentoButton>Cartão de crédito</OpPagamentoButton>
        <OpPagamentoButton>Boleto</OpPagamentoButton>
        <OpPagamentoButton>PIX</OpPagamentoButton>
      </OpPagamentoContainer>

      <DadosCartaoContainer>
        <label>Número do Cartão</label>
        <input type="number" name="NumeroCartao" value=""></input>

        <label>Nome do Titular</label>
        <input type="text" name="NomeTitular" value=""></input>

        <label>CVV</label>
        <input type="number" name="CVV" value=""></input>

        <label>Validade</label>
        <input type="number" name="Validade" value=""></input>

        <ButtonContinuar> Continuar</ButtonContinuar>
      </DadosCartaoContainer>
    </FormaPagamentoPage>
  );
}

export default FormaPagamento;
