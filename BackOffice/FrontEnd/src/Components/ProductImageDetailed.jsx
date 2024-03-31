import Icon from "@mdi/react";
import { mdiMenuLeft, mdiMenuRight } from "@mdi/js";
import { useState } from "react";
import { DetailedImage } from "../Styles/ProductDetails.styles";
import { useLocation } from "react-router";
function ProductImageDetailed() {
	const imageFiles = [];
	imageFiles.push(useLocation().state.files0);
	imageFiles.push(useLocation().state.files1);
	console.log(imageFiles);

	const [icon, setIcon] = useState(0);
	const Icons = [];
	for (let i = 0; i < imageFiles.length; i++) {
		Icons.push(<DetailedImage src={URL.createObjectURL(imageFiles[i])} />);
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
