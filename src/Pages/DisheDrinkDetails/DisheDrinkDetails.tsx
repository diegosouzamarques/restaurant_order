import { useParams, useNavigate } from "react-router-dom";
import style from "./DisheDrinkDetails.module.scss";
import Carousel from "../../Components/Carousel/Carousel";

import napolitana from "../../assets/img/Pizza napolitana.png";
import scaled from "../../assets/img/DSF5019-6-scaled.jpg";
import imgExemplo from "../../assets/img/images.jpg";
import Imagem from "../../Type/Image";
import Button from "../../Components/Button/Button";

const DisheDrinkDetails = () => {
  const navigate = useNavigate();
  const imagens: Imagem[] = [
    { src: napolitana, alt: "Photo Upload" },
    { src: scaled, alt: "Photo Upload" },
    { src: imgExemplo, alt: "Photo Upload" },
  ];
  const { id } = useParams();
  return (
    <>
      <h1 className={style.title}>
        Pizza Marguerita Pizza Marguerita Pizza Marguerita Pizza Marguerita
        Pizza Marguerita Pizza Marguerita Pizza Marguerita
      </h1>
      <div className={style.container__photos}>
        <Carousel></Carousel>
      </div>
      <p className={style.descript}>
          Vale ressaltar que o selo de “pizza napolitana” compreende duas
          variedades: a marguerita (feita com muçarela, azeite, manjericão e
          molho de tomate) e a marinara (feita com alho, azeite, tomate e
          orégano)
          Vale ressaltar que o selo de “pizza napolitana” compreende duas
          variedades: a marguerita (feita com muçarela, azeite, manjericão e
          molho de tomate) e a marinara (feita com alho, azeite, tomate e
          orégano)
        </p>  
        <div className={style.type}>
          <span>Italia</span>
          <span>Seco</span>
        </div>
        <div className={style.type}>
          <span className={style.price}>$ 85.36</span>
          <span>8 pedaços</span>
        </div>            
    </>
  );
};

export default DisheDrinkDetails;
