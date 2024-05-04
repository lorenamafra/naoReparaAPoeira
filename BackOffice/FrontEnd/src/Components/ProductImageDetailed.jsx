import Icon from "@mdi/react";
import { mdiMenuLeft, mdiMenuRight } from "@mdi/js";
import { useState } from "react";
import { DetailedImage } from "../Styles/ProductDetails.styles";
import { useLocation } from "react-router";
function ProductImageDetailed() {
	const imageFiles = [];
	imageFiles.push(useLocation().state.imagens);

	let location = useLocation();
	console.log(location);
	const [icon, setIcon] = useState(0);
	const Icons = [];
	if (location.state.imagens) {
		for (let i = 0; i < imageFiles[0].length; i++) {
			console.log(imageFiles[0][i]);
			Icons.push(<DetailedImage src={URL.createObjectURL(imageFiles[0][i])} />);
		}
	}

	if (location.state.imagensCarregadas) {
		console.log("ata");
		console.log(location.state.imagensCarregadas[0].imagem);
		console.log(location.state.imagensCarregadas);
		for (let i = 0; i < location.state.imagensCarregadas.length; i++) {
			Icons.push(
				<DetailedImage src={`${location.state.imagensCarregadas[i].imagem}`} />
			);
		}
	}

	const nextImage = () => {
		if (icon + 1 > Icons.length - 1) {
			setIcon(0);
		} else {
			setIcon(icon + 1);
		}
	};

	const previousImage = () => {
		if (icon - 1 < 0) {
			setIcon(Icons.length - 1);
		} else {
			setIcon(icon - 1);
		}
	};

	return (
		<div>
			<Icon path={mdiMenuLeft} size={5} onClick={previousImage} />
			{Icons[icon]}
			<Icon path={mdiMenuRight} size={5} onClick={nextImage} />
		</div>
	);
}

export default ProductImageDetailed;
