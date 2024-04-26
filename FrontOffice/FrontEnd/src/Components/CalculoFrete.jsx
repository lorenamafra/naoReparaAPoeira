import {
  CalculoFretePage,
  EnderecoEntregaContainer,
  OpcoesFreteContainer,
  OpFretediv,
  ResumoFreteContainer,
  ButtonContinuar,
} from "../styles/CalculoFrete.styles";

function CalculoFrete() {
  function handleSubmit() {}

  return (
    <CalculoFretePage>
      <h1>Selecione o endereço de entrega:</h1>

      <EnderecoEntregaContainer>
        <p>{currentUser.enderecoEntrega}</p>

        <AlterarEnderecoButton>Alterar Endereco</AlterarEnderecoButton>
      </EnderecoEntregaContainer>

      <OpcoesFreteContainer>
        <OpFretediv>
          <div>
            <input type="radio" name="webmaster" value="sim" /> Sim
            <br />
          </div>

          <div>
            <label> Frete comum</label>
            <label> 5 dias úteis</label>
          </div>

          <div>
            <span>R$ {valorFreteComum}</span>
          </div>
        </OpFretediv>

        <OpFretediv>
          <div>
            <input type="radio" name="webmaster" value="sim" /> Sim
            <br />
          </div>

          <div>
            <label> Frete Plus</label>
            <label> 3 dias úteis</label>
          </div>

          <div>
            <span>R$ {valorFretePlus}</span>
          </div>
        </OpFretediv>

        <OpFretediv>
          <div>
            <input type="radio" name="webmaster" value="sim" /> Sim
            <br />
          </div>

          <div>
            <label> Frete Premium</label>
            <label> 1 dia útil</label>
          </div>

          <div>
            <span>R$ {valorFretePremium}</span>
          </div>
        </OpFretediv>
      </OpcoesFreteContainer>

      <ResumoFreteContainer>
        <label>Produtos: {valorTotalProdutos}</label>
        <label>Frete: {valorTotalFrete}</label>
        <label>Subtotal: {valorTotalFinal}</label>

        <ButtonContinuar>Continuar</ButtonContinuar>
      </ResumoFreteContainer>
    </CalculoFretePage>
  );
}

export default CalculoFrete;

//verificar com o Denis como trazer o endereço de entrega para pagina
