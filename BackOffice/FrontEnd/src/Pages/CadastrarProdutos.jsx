import { useState } from "react";
import {
  ImageFieldset,
  ImagesContainer,
  ImgLabel,
  InputQuantidade,
  ProdutoFormContainer,
  SubmitButton,
} from "../Styles/Form.styles";
import { MainFormContainer } from "../Styles/Form.styles";
import axios from "axios";
import { RedirectText } from "../Styles/MainStyles.styles";
import { useNavigate } from "react-router";
import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";

function CadastrarProdutos() {
  const navigate = useNavigate();

  // const handleAdicionarImagem = () => {
  // 	// Handle adicionar imagem irá retornar um fieldset como o que foi feito, e irá adicionar um sempre que tiver uma imagem nova a ser adicionada
  // 	// Conte a quantidade de fieldsets
  // 	// usar a KEY do MAP para ser a quantidade da imagem no nome "imagem[i]"
  // };

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    fd.append("images", `${selectedImages} `);
    let currentYear = new Date().getFullYear();
    if (
      parseInt(fd.get("year")) <= 1930 ||
      parseInt(fd.get("year")) > currentYear
    ) {
      console.log("ano errado");
      console.log(new Date().getFullYear());
    }
    const entries = [...fd.values()];
    console.log(entries);
    const formObject = Object.fromEntries(fd);
    axios
      .post("http://localhost:8080/produto/inserir", formObject)
      .then((resp) => console.log(resp));
  }

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  const [selectedImages, setSelectedImages] = useState([]);
  return (
    <MainFormContainer>
      <ProdutoFormContainer onSubmit={handleSubmit}>
        <section>
          <div>
            <fieldset>
              <label htmlFor="discName"> Nome do Disco </label>
              <input type="text" name="nome_disco" required />
            </fieldset>
            <fieldset>
              <label htmlFor=""> Artista </label>
              <input type="text" name="artista" required />
            </fieldset>
            <fieldset>
              <label htmlFor=""> Generos </label>
              <input type="text" name="genero" required />
            </fieldset>
            <fieldset>
              <label htmlFor=""> Ano de Lançamento </label>
              <InputQuantidade
                type="number"
                name="ano"
                maxlength={4}
                required
              />
            </fieldset>
          </div>

          <div>
            <fieldset>
              <label htmlFor=""> Quantidade </label>
              <InputQuantidade type="number" name="estoque" required />
            </fieldset>
            <fieldset>
              <label htmlFor=""> Preço </label>
              <InputQuantidade type="number" name="valor" required />
            </fieldset>
            <fieldset>
              <label htmlFor=""> Avaliação </label>
              <select type="select" name="avaliacao" min={0} max={5} required>
                <option value="0"> 0 </option>
                <option value="0.5"> 0.5 </option>
                <option value="1"> 1 </option>
                <option value="1.5"> 1.5 </option>
                <option value="2"> 2 </option>
                <option value="2.5"> 2.5 </option>
                <option value="3"> 3 </option>
                <option value="3.5"> 3.5 </option>
                <option value="4"> 4 </option>
                <option value="4.5"> 4.5 </option>
                <option value="5"> 5 </option>
              </select>
              /5
            </fieldset>
            <fieldset>
              <label htmlFor="description">Descrição</label>
              <textarea name="descricao" required></textarea>
            </fieldset>
            <RedirectText onClick={() => navigate("/Produto/Visualizar")}>
              {" "}
              Visualizar{" "}
            </RedirectText>
          </div>
        </section>
        <section>
          <div>
            <fieldset>
              <label>
                Add Imagem
                <input
                  required
                  type="file"
                  name="images"
                  onChange={onSelectFile}
                  multiple
                  accept="image/jpeg, image/png, image/webp"
                />
              </label>

              <div>
                <ImagesContainer>
                  {selectedImages &&
                    selectedImages.map((image, index) => {
                      return (
                        <ImageFieldset key={index}>
                          <img src={image} alt="" />
                          <div>
                            <label htmlFor="principal">Main</label>
                            <input
                              type="radio"
                              name="principal"
                              value={index}
                              checked
                            />
                          </div>
                          <button
                            onClick={() =>
                              setSelectedImages(
                                selectedImages.filter((e) => e !== image)
                              )
                            }
                          >
                            <Icon path={mdiTrashCanOutline} size={1} />
                            <p>Delete Image</p>
                          </button>
                        </ImageFieldset>
                      );
                    })}
                </ImagesContainer>

                {/* {selectedImages &&
							selectedImages.map((image, index) => {
								return (
									<fieldset key={index}>
										<img src={image} alt="" />
										<button
											onClick={() =>
												setSelectedImages(
													selectedImages.filter((e) => e !== image)
												)
											}
										>
											Delete{" "}
										</button>
										<label htmlFor="principal">Main</label>
										<input type="radio" name="principal" value="true" checked />
										<label>
											<AddImg src={addImgIcon} />
											<p>Adicione</p>
											<input
												type="file"
												name="images"
												onChange={onSelectFile}
												multiple
												accept="image/jpeg, image/png, image/webp"
												style={{ display: "none" }}
											/>
										</label>
									</fieldset>
								);
							})} */}
              </div>
            </fieldset>
          </div>
        </section>

        <SubmitButton type="submit">Submit</SubmitButton>
      </ProdutoFormContainer>
    </MainFormContainer>
  );
}

export default CadastrarProdutos;
