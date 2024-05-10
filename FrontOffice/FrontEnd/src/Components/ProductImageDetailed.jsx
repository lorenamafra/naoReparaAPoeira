import Icon from "@mdi/react";
import { mdiMenuLeft, mdiMenuRight } from "@mdi/js";
import { useState } from "react";
import { DetailedImage } from "../styles/ProductDetails.styles";
import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
function ProductImageDetailed() {
  const [imageFiles, setImageFiles] = useState([]);
  const [principal, setPrincipal] = useState();
  let disco = useParams();
  console.log(disco.cod_produto);

  useEffect(() => {
    const getImages = async () => {
      await axios
        .get(`http://localhost:8080/produto/${disco.cod_produto}/imagens`)
        .then((resp) => setImageFiles(resp.data));
    };
    const getPrincipal = async () => {
      axios
        .get(`http://localhost:8080/produto/${disco.cod_produto}`)
        .then((resp) => setPrincipal(resp.data.imagem_principal));
    };
    getPrincipal();
    getImages();
  }, []);

  const [icon, setIcon] = useState(0);
  const Icons = [];
  const orderImages = () => {
    for (let i = 0; i < imageFiles.length; i++) {
      Icons.push(<DetailedImage src={`/${imageFiles[i].imagem}`} />);
    }
    console.log(principal);
    let ImagemPrincipal = Icons[principal];
    const copyArray = Icons.splice(principal, 1);
    console.log(Icons);
    Icons.unshift(ImagemPrincipal);
    setTimeout(() => {
      sessionStorage.setItem(
        "IMAGEMPRINCIPALITEM",
        JSON.stringify(ImagemPrincipal.props.src)
      );
    }, 100);
  };

  orderImages();

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
