import Icon from "@mdi/react";
import { mdiStar, mdiStarHalf } from "@mdi/js";

function StarRating() {
	let stars = 4.5;

	let fullStars = stars.toString()[0];
	let halfStars = stars.toString()[2];
	console.log(fullStars);
	console.log(halfStars);

	let elementStars = [];

	for (let i = 0; i < fullStars; i++) {
		elementStars.push(<Icon path={mdiStar} size={1} />);
	}
	if (halfStars) {
		for (let i = 0; i < halfStars.length; i++) {
			elementStars.push(<Icon path={mdiStarHalf} size={1} />);
		}
	}
	return <div>{elementStars}</div>;
}

export default StarRating;
