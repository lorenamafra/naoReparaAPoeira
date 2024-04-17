import { useState } from "react";
import {
	ImageFieldset,
	ImagesContainer,
	InputQuantidade,
	ProdutoFormContainer,
	SubmitButton,
} from "../Styles/Form.styles";
import { MainFormContainer } from "../Styles/Form.styles";
import axios from "axios";
import { RedirectText } from "../Styles/MainStyles.styles";
import { useLocation, useNavigate } from "react-router";
import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";
import { useEffect } from "react";

let queuedImagesArray = [];

function CadastrarProdutos() {
	let location = useLocation();
	console.log(location.state);
	const Visualizar = () => {
		var formElement = document.getElementById("myForm");
		console.log(queuedImagesArray);
		var fd = new FormData(formElement);
		var abbr = fd
			.get("artista")
			.split(" ")
			.map(function (item) {
				return item[0];
			})
			.join("");

		abbr = abbr.toUpperCase();

		let nome_disco = fd.get("nome_disco").replaceAll(" ", "");

		let cod_produto = abbr.concat(nome_disco, fd.get("ano"));
		fd.append("cod_produto", cod_produto);
		console.log("imagens ao clicar", imagesArrayCopy);

		queuedImagesArray.forEach((image) => {
			fd.append(`images`, image);
		});
		const ObjectForm = Object.fromEntries(fd);
		ObjectForm.imagens = queuedImagesArray;
		console.log(ObjectForm.imagens);
		console.log(ObjectForm);
		navigate("/VisualizarProduto", { state: ObjectForm });
	};

	const navigate = useNavigate();

	//////´

	useEffect(() => {
		queuedImagesArray = [];
		console.log(location);
		if (location.state) {
			console.log("salve");
			document.getElementsByName("artista")[0].value = location.state.artista;
			document.getElementsByName("nome_disco")[0].value =
				location.state.nome_disco;
			document.getElementsByName("genero")[0].value = location.state.genero;
			document.getElementsByName("estoque")[0].value = location.state.estoque;
			document.getElementsByName("valor")[0].value = location.state.valor;
			document.getElementsByName("avaliacao")[0].value =
				location.state.avaliacao;
			document.getElementsByName("ano")[0].value = location.state.ano;
			document.getElementsByName("descricao")[0].value =
				location.state.descricao;

			console.log(location.state.imagens[0]);
			for (let i = 0; i < location.state.imagens.length; i++) {
				queuedImagesArray.push(location.state.imagens[i]);
			}
			console.log(queuedImagesArray);
			displayQueuedImages();
		} else {
			console.log("ata");
		}
	}, []);

	const handleSubmit = () => {
		const formElement = document.getElementById("myForm");
		console.log(queuedImagesArray);
		const fd = new FormData(formElement);
		console.log(fd);
		let currentYear = new Date().getFullYear();
		var abbr = fd
			.get("artista")
			.split(" ")
			.map(function (item) {
				return item[0];
			})
			.join("");

		abbr = abbr.toUpperCase();

		let nome_disco = fd.get("nome_disco").replaceAll(" ", "");

		let cod_produto = abbr.concat(nome_disco, fd.get("ano"));
		fd.append("cod_produto", cod_produto);
		console.log(imagesArrayCopy);

		fd.delete("images");
		queuedImagesArray.forEach((image, index) => {
			fd.append(`files${index}`, image);
			console.log("Image", image);
		});

		if (
			parseInt(fd.get("year")) <= 1930 ||
			parseInt(fd.get("year")) > currentYear
		) {
			console.log("ano errado");
			console.log(new Date().getFullYear());
		}

		for (const pair of fd.entries()) {
			if (pair[1] == "") {
				window.alert(`${pair[0]} está vazio`);
			}
		}

		for (const pair of fd.entries()) {
			console.log(pair);
		}

		fd.append(
			"imagem_principal",
			document.querySelector('input[name="principal"]:checked').value
		);

		console.log(fd.get("imagem_principal"));
		console.log(queuedImagesArray);
		console.log(queuedImagesArray[fd.get("imagem_principal")]);
		const ObjectForm = Object.fromEntries(fd);
		console.log(fd.get("files0"));
		let principal = fd.get("imagem_principal");
		let letras = `files${principal}`;
		console.log(letras);
		console.log(fd.get(letras));
		console.log(fd.get("files0"));
		console.log(ObjectForm);

		axios
			.post("http://localhost:8080/produto/inserir", ObjectForm)
			.then((resp) => console.log(resp.data));

		axios
			.post("http://localhost:8080/produto/inserir/imagens", fd)
			.then((resp) => console.log(resp))
			.then(navigate("/Home/Produtos"));

		axios
			.post("http://localhost:8080/produto/uploadImageToFrontEnd", fd)
			.then((resp) => {
				console.log(resp.data);
			})
			.then(navigate("/Home/Produtos"));
	};

	const [imagesComponents, setImagesComponents] = useState([]);
	let imagesArrayCopy = [];

	const onSelectFile = (e) => {
		console.log("on select, copy", imagesArrayCopy);
		const files = e.currentTarget.files;
		console.log("new file", files);
		for (let i = 0; i < files.length; i++) {
			queuedImagesArray.push(files[i]);
			console.log("each image", files[i]);
		}
		console.log(queuedImagesArray);

		imagesArrayCopy.push(queuedImagesArray);
		document.getElementById("imagesForm").reset();

		console.log("array após enviar arquivo", imagesArrayCopy);
		console.log(queuedImagesArray);
		displayQueuedImages();
	};

	const displayQueuedImages = () => {
		var images = [];
		setImagesComponents([]);

		console.log(queuedImagesArray);
		queuedImagesArray.forEach((image, index) => {
			images.push(
				<ImageFieldset key={index}>
					<img src={URL.createObjectURL(image)} alt="" />
					<div>
						<label htmlFor="principal">Main</label>
						<input type="radio" name="principal" value={index} checked />
					</div>
					<button onClick={() => deleteQueuedImages(index)}>
						<Icon path={mdiTrashCanOutline} size={1} />
						<p>Delete Image</p>
					</button>
				</ImageFieldset>
			);

			console.log("images, quando for display:", images);
			setImagesComponents([...images]);
		});
	};

	const deleteQueuedImages = (index) => {
		console.log(queuedImagesArray[index]);

		queuedImagesArray.splice(index, 1);
		imagesArrayCopy.splice(index, 1);
		displayQueuedImages();
	};

	return (
		<MainFormContainer>
			<ProdutoFormContainer id="myForm" onSubmit={handleSubmit}>
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
								maxLength={4}
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
						<RedirectText onClick={Visualizar}> Visualizar </RedirectText>
					</div>
				</section>

				<div className="inputDiv">
					<input
						required
						type="file"
						name="images"
						onChange={(e) => onSelectFile(e)}
						accept="image/jpeg, image/png, image/webp"
					/>
				</div>
			</ProdutoFormContainer>

			<form id="imagesForm" onSubmit={(e) => e.preventDefault()}>
				<div>
					<p>Imagens</p>
					<ImagesContainer>{imagesComponents}</ImagesContainer>
				</div>
			</form>

			<div style={{ display: "grid" }}>
				<SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
				<SubmitButton onClick={() => navigate(-1)}>Cancelar</SubmitButton>
			</div>
		</MainFormContainer>
	);
}

export default CadastrarProdutos;
