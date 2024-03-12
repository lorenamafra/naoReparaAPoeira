import { InputQuantidade } from "../Styles/CadastrarProdutos.styles";
import { FormContainer, MainFormContainer } from "../Styles/Form.styles";

function CadastrarProdutos() {
  const handleAdicionarImagem = () => {
    // Handle adicionar imagem irá retornar um fieldset como o que foi feito, e irá adicionar um sempre que tiver uma imagem nova a ser adicionada
    // Conte a quantidade de fieldsets
    // usar a KEY do MAP para ser a quantidade da imagem no nome "imagem[i]"
  };

  return (
    <MainFormContainer>
      <label htmlFor=""> Disco </label>
      <input type="text" />
      <label htmlFor=""> Artista </label>
      <input type="text" />
      <label htmlFor=""> Genero </label>
      <input type="text" />
      <div>
        <label htmlFor=""> Quantidade </label>
        <br />
        <button> - </button>
        <InputQuantidade type="number" />
        <button> + </button>
      </div>

      <div id="inputImagem">
        <fieldset>
          <input type="file" name="imagem[0]" />
          <div>
            <input type="radio" name="principal" value="true" checked />
          </div>
        </fieldset>
        <button
          type="button"
          id="btnNovaImagem"
          onClick={handleAdicionarImagem}
        >
          Inlucir nova imagem
        </button>
      </div>
    </MainFormContainer>
  );
}

export default CadastrarProdutos;
