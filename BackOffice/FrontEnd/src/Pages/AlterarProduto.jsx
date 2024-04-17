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
	let images = [];

	const [loader, setLoader] = useState(true);
	const currentUser = JSON.parse(sessionStorage.getItem("User"));

	useEffect(() => {
		queuedImagesArray = [];

		const checkEstoquista = () => {
			if (currentUser.grupo == "Estoquista") {
				document.getElementById("nome_disco").setAttribute("readonly", "true");
				document.getElementById("artista").setAttribute("readonly", "true");
				document.getElementById("genero").setAttribute("readonly", "true");
				document.getElementById("ano").setAttribute("readonly", "true");
				document.getElementById("valor").setAttribute("readonly", "true");
				document.getElementById("avaliacao").setAttribute("disabled", "true");
				document.getElementById("descricao").setAttribute("readonly", "true");
				document.getElementById("images").setAttribute("disabled", "true");
			} else {
				document.getElementById("nome_disco").setAttribute("readonly", "true");
				document.getElementById("artista").setAttribute("readonly", "true");
				document.getElementById("ano").setAttribute("readonly", "true");
			}
		};

		const toDataURL = (url) =>
			fetch(url)
				.then((response) => {
					let boobs = response.blob();
					return boobs;
				})
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
			await axios
				.get(`http://localhost:8080/produto/${cod_produto}/`)
				.then((resp) => {
					setProduto(resp.data);
				});

			await axios
				.get(`http://localhost:8080/produto/${cod_produto}/imagens`)
				.then((resp) => {
					var bufferData = resp.data;
					console.log("87:", bufferData);
					for (let i = 0; i < bufferData.length; i++) {
						images.push(bufferData[i]);
					}

					console.log("quia", queuedImagesArray);
				});

			for (let i = 0; i < images.length; i++) {
				toDataURL(`http://localhost:8080/fotos/${images[i].imagem}`).then(
					(dataUrl) => {
						var fileData = dataURLtoFile(dataUrl, images[i].imagem);

						console.log(`Iteração ${i}`, fileData);
						queuedImagesArray.push(fileData);
						console.log(`Iteração ${i}`, queuedImagesArray);
					}
				);
			}
		};

		getProduto().then(() => {
			setTimeout(() => {
				setLoader(false);
				displayQueuedImages();
			}, 50);
		});

		setTimeout(() => {
			checkEstoquista();
		}, 100);
	}, []);

	const Visualizar = () => {
		var formElement = document.getElementById("myForm");
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

		queuedImagesArray.forEach((image) => {
			fd.append(`images`, image);
		});
		const ObjectForm = Object.fromEntries(fd);
		ObjectForm.imagens = queuedImagesArray;
		console.log(ObjectForm.imagens);
		if (currentUser.grupo == "Estoquista") {
			ObjectForm.avaliacao = produto.avaliacao;
		}
		console.log(ObjectForm);
		navigate("/VisualizarProduto", { state: ObjectForm });
	};
	const navigate = useNavigate();

	const handleSubmit = () => {
		const formElement = document.getElementById("myForm");
		const fd = new FormData(formElement);

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
		if (currentUser.grupo == "Estoquista") {
			axios
				.put("http://localhost:8080/produto/alterar/quantidade", {
					estoque: fd.get("estoque"),
					cod_produto: fd.get("cod_produto"),
				})
				.then((resp) => {
					resp.status == 200 ? navigate("/Home/Produtos") : "";
				});
			return;
		}

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

		// axios
		// 	.put("http://localhost:8080/produto/alterar", ObjectForm)
		// 	.then((resp) => {
		// 		console.log(resp);
		// 		// resp.status == 200 ? navigate("/Home/Produtos") : "";
		// 	});
		let cod = fd.get("cod_produto");

		axios.post("http://localhost:8080/deleteFilesFromFolder", ObjectForm);
		axios
			.delete(`http://localhost:8080/produto/deletar/imagens/${cod}`)
			.then(() => {
				axios
					.post("http://localhost:8080/produto/inserir/imagens", fd)
					.then((resp) => console.log(resp));

				axios
					.post("http://localhost:8080/produto/uploadImageToFrontEnd", fd)
					.then((resp) => {
						console.log(resp.data);
					})
					.then(navigate("/Home/Produtos"));
			});
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
		console.log("ata", queuedImagesArray[0]);
		queuedImagesArray.forEach((image, index) => {
			images.push(
				<ImageFieldset key={index}>
					{/* <img src={`http://localhost:8080/fotos/`} alt="" /> */}
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
		console.log(currentUser.grupo);
		if (currentUser.grupo != "Estoquista") {
			console.log(queuedImagesArray[index]);

			// console.log(images);
			queuedImagesArray.splice(index, 1);
			imagesArrayCopy.splice(index, 1);
			displayQueuedImages();
		}
		console.log("oi");
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
