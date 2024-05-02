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

function CalculoFrete() {
  return (
    <CalculoFretePage>
      <h1>Selecione o endereço de entrega:</h1>

      <EnderecoEntregaContainer>
        <p>currentUser.enderecoEntrega</p>

        <AlterarEnderecoButton>Alterar Endereco</AlterarEnderecoButton>
      </EnderecoEntregaContainer>

      <DivisaoContainer>
        <OpcoesFreteContainer>
          <OpFretediv onClick={() => {}}>
            <div>
              <input type="radio" name="Frete" value="Frete Comum" /> Frete
              Comum
              <br />
            </div>

            <div>
              <label> 5 dias úteis</label>
            </div>

            <div>
              <span>R$ valorFreteComum</span>
            </div>
          </OpFretediv>

          <OpFretediv>
            u
            <div>
              <input type="radio" name="Frete" value="" /> Frete Plus
              <br />
            </div>
            <div>
              <label> 3 dias úteis</label>
            </div>
            <div>
              <span>R$ valorFretePlus</span>
            </div>
          </OpFretediv>

          <OpFretediv>
            <div>
              <input type="radio" name="Frete" value="frete premium" /> Frete
              Premium
              <br />
            </div>

            <div>
              <label> 1 dia útil</label>
            </div>

            <div>
              <span>R$ valorFretePremium</span>
            </div>
          </OpFretediv>
        </OpcoesFreteContainer>

        <ResumoFreteContainer>
          <label>Produtos: valorTotalProdutos</label>
          <label>Frete: valorTotalFrete</label>
          <label>Subtotal: valorTotalFinal</label>

          <ButtonContinuar>Continuar</ButtonContinuar>
        </ResumoFreteContainer>
      </DivisaoContainer>
    </CalculoFretePage>
  );
}

export default CalculoFrete;

//verificar com o Denis como trazer o endereço de entrega para pagina
