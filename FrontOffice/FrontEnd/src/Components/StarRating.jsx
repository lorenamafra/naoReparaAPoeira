import Icon from "@mdi/react";
import { mdiStar, mdiStarHalf } from "@mdi/js";
import { useState } from "react";

function StarRating(_props) {
	const [Stars, setStars] = useState();
	let stars = _props.stars;
	let fullStars;
	let halfStars;
	let elementStars = [];

	setTimeout(() => {
		fullStars = stars.toString()[0];
		halfStars = stars.toString()[2];
		for (let i = 0; i < fullStars; i++) {
			elementStars.push(<Icon path={mdiStar} size={1} />);
		}
		if (halfStars) {
			for (let i = 0; i < halfStars.length; i++) {
				elementStars.push(<Icon path={mdiStarHalf} size={1} />);
			}
		}

		setStars(elementStars);
	}, 500);

	return <div>{Stars}</div>;
}

export default StarRating;
