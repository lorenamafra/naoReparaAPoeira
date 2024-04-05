import { useEffect, useState } from "react";
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

var queuedImagesArray = [];
function AlterarProduto() {
	const cod_produto = useLocation().state;
	const [produto, setProduto] = useState({});
	const [images, setImages] = useState([]);
	const [loader, setLoader] = useState(true);
	const currentUser = JSON.parse(sessionStorage.getItem("User"));

	useEffect(() => {
		queuedImagesArray = [];

		const checkEstoquista = () => {
			if(currentUser.grupo == "Estoquista"){
				document.getElementById("nome_disco").setAttribute("disabled", "true")
				document.getElementById("artista").setAttribute("disabled", "true")
				document.getElementById("genero").setAttribute("disabled", "true")
				document.getElementById("ano").setAttribute("disabled", "true")
				document.getElementById("valor").setAttribute("disabled", "true")
				document.getElementById("avaliacao").setAttribute("disabled", "true")
				document.getElementById("descricao").setAttribute("disabled", "true")
				document.getElementById("images").setAttribute("disabled", "true")
			
			}
		};
	
		const toDataURL = (url) =>
			fetch(url)
				.then((response) => response.blob())
				.then(
					(blob) =>
						new Promise((resolve, reject) => {
							const reader = new FileReader();
							reader.onloadend = () => resolve(reader.result);
							reader.onerror = reject;
							reader.readAsDataURL(blob);
						})
				);

		function dataURLtoFile(dataurl, filename) {
			var arr = dataurl.split(","),
				mime = arr[0].match(/:(.*?);/)[1],
				bstr = atob(arr[1]),
				n = bstr.length,
				u8arr = new Uint8Array(n);
			while (n--) {
				u8arr[n] = bstr.charCodeAt(n);
			}
			return new File([u8arr], filename, { type: mime });
		}

		const getProduto = async () => {
			let response = await axios.post(
				"http://localhost:8080/produto/pesquisar",
				{
					cod_produto: cod_produto,
				}
			);

			setProduto(response.data);
			let imagemPrincipal = response.data.imagem_principal;
			let imagemSecundaria = response.data.imagem_secundaria;
			console.log(response.data);

			toDataURL(`/${imagemSecundaria}`).then((dataUrl) => {
				var fileData = dataURLtoFile(dataUrl, imagemSecundaria);
				console.log(fileData);
				queuedImagesArray.push(fileData);
			});

			toDataURL(`/${imagemPrincipal}`)
				.then((dataUrl) => {
					var fileData = dataURLtoFile(dataUrl, imagemPrincipal);
					console.log(fileData);
					queuedImagesArray.push(fileData);
				})
				.then(() => {
					displayQueuedImages();
				});
		};

		getProduto().then(() => {
			setLoader(false);
		});

		setTimeout(()=>{
			checkEstoquista()
	
	}, 5000)
	}, []);
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

		let nome_disco = fd.get("nome_disco").replaceAll(" ", "");

		let cod_produto = abbr.concat(nome_disco, fd.get("ano"));
		fd.append("cod_produto", cod_produto);
		console.log("imagens ao clicar", imagesArrayCopy);
		queuedImagesArray.forEach((image, index) => {
			fd.append(`files${index}`, image);
		});
		const ObjectForm = Object.fromEntries(fd);

		console.log(ObjectForm);

		navigate("/VisualizarProduto", { state: ObjectForm });
	};

	const navigate = useNavigate();

	//////

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

		let nome_disco = fd.get("nome_disco").replaceAll(" ", "");

		let cod_produto = abbr.concat(nome_disco, fd.get("ano"));
		fd.append("cod_produto", cod_produto);

		fd.delete("images");
		queuedImagesArray.forEach((image, index) => {
			fd.append(`files${index}`, image);
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
		fd.append(
			"principal",
			document.querySelector('input[name="principal"]:checked').value
		);
		const ObjectForm = Object.fromEntries(fd);
		console.log(ObjectForm);
		console.log(ObjectForm.files0);
		axios
			.put("http://localhost:8080/produto/alterar", fd)
			.then((resp) => console.log(resp.data));
		// .then(navigate("/BackOffice"));

		axios
			.post("http://localhost:8080/produto/updateProductImage", fd)
			.then((resp) => {
				console.log(resp.data);
			});
		axios
			.post("http://localhost:8080/produto/uploadImageToFrontEnd", fd)
			.then((resp) => {
				console.log(resp.data);
			});
	};

	const [imagesComponents, setImagesComponents] = useState([]);
	const [imagesArrayCopy] = useState([]);

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

		// console.log(images);
		queuedImagesArray.splice(index, 1);
		imagesArrayCopy.splice(index, 1);
		displayQueuedImages();
	};

	return (
		<div>
			{loader ? (
				<p> is Loading</p>
			) : (
				<MainFormContainer>
					<ProdutoFormContainer id="myForm" onSubmit={handleSubmit}>
						<section>
							<div>
								<fieldset>
									<label htmlFor="discName"> Nome do Disco </label>
									<input
										type="text"
										name="nome_disco"
										id="nome_disco"
										required
										defaultValue={produto.nome_disco}
									/>
								</fieldset>
								<fieldset>
									<label htmlFor=""> Artista </label>
									<input
										type="text"
										name="artista"
										id="artista"
										required
										defaultValue={produto.artista}
									/>
								</fieldset>
								<fieldset>
									<label htmlFor=""> Generos </label>
									<input
										type="text"
										id="genero"
										name="genero"
										required
										defaultValue={produto.genero}
									/>
								</fieldset>
								<fieldset>
									<label htmlFor=""> Ano de Lançamento </label>
									<InputQuantidade
										type="number"
										id="ano"
										name="ano"
										maxLength={4}
										required
										defaultValue={produto.ano}
									/>
								</fieldset>
							</div>

							<div>
								<fieldset>
									<label htmlFor=""> Quantidade </label>
									<InputQuantidade
										type="number"
										name="estoque"
										id="estoque"
										defaultValue={produto.estoque}
										required
									/>
								</fieldset>
								<fieldset>
									<label htmlFor=""> Preço </label>
									<InputQuantidade
										type="number"
										name="valor"
										id="valor"
										required
										defaultValue={produto.valor}
									/>
								</fieldset>
								<fieldset>
									<label htmlFor=""> Avaliação </label>
									<select
										type="select"
										name="avaliacao"
										id="avaliacao"
										min={0}
										max={5}
										required
										defaultValue={produto.avaliacao}
									>
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
									<textarea
										name="descricao"
										required
										id="descricao"
										defaultValue={produto.descricao}
									></textarea>
								</fieldset>
								<RedirectText onClick={Visualizar}> Visualizar </RedirectText>
							</div>
						</section>

						<div className="inputDiv">
							<input
								required
								type="file"
								name="images"
								id="images"
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
			)}
		</div>
	);
}

export default AlterarProduto;
