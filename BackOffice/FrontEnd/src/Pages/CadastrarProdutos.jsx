import { useState } from "react";
import {
	ImageFieldset,
	ImgLabel,
	InputQuantidade,
	ProdutoFormContainer,
} from "../Styles/Form.styles";
import { MainFormContainer } from "../Styles/Form.styles";
import Close from "../assets/Images/close.svg";

function CadastrarProdutos() {
	// const handleAdicionarImagem = () => {
	// 	// Handle adicionar imagem irá retornar um fieldset como o que foi feito, e irá adicionar um sempre que tiver uma imagem nova a ser adicionada
	// 	// Conte a quantidade de fieldsets
	// 	// usar a KEY do MAP para ser a quantidade da imagem no nome "imagem[i]"
	// };

	function handleSubmit(event) {
		event.preventDefault();
		const fd = new FormData(event.currentTarget);
		// fd.append('image',image)
		console.log(fd);
		fd.append("images", `${selectedImages} `);
		console.log(fd.get("images"));

		const disco = Object.fromEntries(fd);
		console.log(disco);
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
				<div>
					<fieldset>
						<label htmlFor="discName"> Disco </label>
						<input type="text" name="discName" />
					</fieldset>
					<fieldset>
						<label htmlFor=""> Artista </label>
						<input type="text" name="artist" />
					</fieldset>
					<fieldset>
						<label htmlFor=""> Generos </label>
						<input type="text" name="genre" />
					</fieldset>
					<fieldset>
						<label htmlFor=""> Ano de Lançamento </label>
						<InputQuantidade width={50} type="Number" name="year" />
					</fieldset>
					<fieldset>
						<label htmlFor=""> Quantidade </label>

						<InputQuantidade type="number" name="quantidade" />
					</fieldset>
					<fieldset>
						<label htmlFor=""> Avaliação </label>

						<InputQuantidade type="number" />
					</fieldset>
					{/* <div id="inputImagem">
					<fieldset>
						<input type="file" name="imagem[0]" />
						<div></div>
					</fieldset>
					<button type="button" id="btnNovaImagem">
						Inlucir nova imagem
					</button>
				</div> */}
					<button action="submit">Submit</button>
				</div>
				<fieldset>
					<label>
						Add Imagem
						<input
							type="file"
							name="images"
							onChange={onSelectFile}
							multiple
							accept="image/jpeg, image/png, image/webp"
							style={{ display: "none" }}
						/>
					</label>

					<div>
						<div>
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
												<ImgLabel src={Close} alt="" />
												<p>Delete Image</p>
											</button>
										</ImageFieldset>
									);
								})}
						</div>

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
			</ProdutoFormContainer>
		</MainFormContainer>
	);
}

export default CadastrarProdutos;
