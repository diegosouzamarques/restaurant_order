import style from "./DisheDrink.module.scss";
import { useNavigate } from "react-router-dom";
import Carousel from "../../Components/Carousel/Carousel";

import napolitana from "../../assets/img/Pizza napolitana.png";
import scaled from "../../assets/img/DSF5019-6-scaled.jpg";
import imgExemplo from "../../assets/img/images.jpg";
import Imagem from "../../Type/Image";

const DisheDrink = () => {
  const navigate = useNavigate();

  const imagens: Imagem[] = [
    { src: napolitana, alt: "Photo Upload" },
    { src: scaled, alt: "Photo Upload" },
    { src: imgExemplo, alt: "Photo Upload" },
  ];

  return (
    <article className={style.dishe} >
      <div className={style.dishe__photos}>
        <Carousel></Carousel>
      </div>
      <div className={style.dishe__content} onClick={(e) => {
      e.preventDefault();
      navigate("/detail/10");
    }}>
        <h1 className={style.dishe__content__title}>Pizza Marguerita Pizza Marguerita Pizza Marguerita Pizza Marguerita Pizza Marguerita Pizza Marguerita Pizza Marguerita</h1>
        <p className={style.dishe__content__descript}>
          Vale ressaltar que o selo de “pizza napolitana” compreende duas
          variedades: a marguerita (feita com muçarela, azeite, manjericão e
          molho de tomate) e a marinara (feita com alho, azeite, tomate e
          orégano)
          Vale ressaltar que o selo de “pizza napolitana” compreende duas
          variedades: a marguerita (feita com muçarela, azeite, manjericão e
          molho de tomate) e a marinara (feita com alho, azeite, tomate e
          orégano)
        </p>
        <div className={style.dishe__content__type}>
          <span>Italia</span>
          <span>Seco</span>
        </div>
        <div className={style.dishe__content__type}>
          <span className={style.dishe__content__price}>$ 85.36</span>
          <span>8 pedaços</span>
        </div>
      </div>
    </article>
  );
};

export default DisheDrink;
