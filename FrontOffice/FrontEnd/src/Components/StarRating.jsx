import Icon from "@mdi/react";
import { mdiStar, mdiStarHalf } from "@mdi/js";
import { useLocation } from "react-router";

function StarRating() {
  let stars = useLocation().state.avaliacao;
  console.log("stars", stars);
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
