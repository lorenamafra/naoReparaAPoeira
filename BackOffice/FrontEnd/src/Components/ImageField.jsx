import React from "react";

function ImageField() {
	return (
		<ImageFieldset key={index}>
			<img src={image} alt="" />
			<div>
				<label htmlFor="principal">Main</label>
				<input type="radio" name="principal" value={index} checked />
			</div>
			<button
				onClick={(e) =>
					setSelectedImages(selectedImages.filter((e) => e !== image))
				}
			>
				<Icon path={mdiTrashCanOutline} size={1} />
				<p>Delete Image</p>
			</button>
		</ImageFieldset>
	);
}

export default ImageField;
