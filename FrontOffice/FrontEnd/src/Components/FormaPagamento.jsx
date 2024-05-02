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
        <div>
          <label>Número do Cartão</label>
          <input type="number" name="NumeroCartao" value=""></input>
        </div>
        <div>
          <label>Nome do Titular</label>
          <input type="text" name="NomeTitular" value=""></input>
        </div>
        <div>
          <label>CVV</label>
          <input type="number" name="CVV" value=""></input>
        </div>
        <div>
          <label>Validade</label>
          <input type="number" name="Validade" value=""></input>
        </div>

        <ButtonContinuar> Continuar</ButtonContinuar>
      </DadosCartaoContainer>
    </FormaPagamentoPage>
  );
}

export default FormaPagamento;
