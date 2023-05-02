import style from "./DisheDrink.module.scss";
import { useNavigate } from "react-router-dom";
import Carousel from "../../Components/Carousel/Carousel";
import Imagem from "../../Type/Image";
import DisheDrinkType from "../../Type/DisheDrink";

interface propsDisheDrink {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  dishe:DisheDrinkType;
}

const DisheDrink = ({...props}:propsDisheDrink) => {
  const navigate = useNavigate();

  const imagens: Imagem[] = [];

  return (
    <article className={style.dishe}>
      <Carousel></Carousel>
      <div className={style.dishe__content}>
        <div data-id={props.dishe.id} className={style.dishe__content__select}  onClick={props.onClick}>
          <h1 className={style.dishe__content__title}>
           {props.dishe.title}
          </h1>
          <p className={style.dishe__content__descript}>
          {props.dishe.descript}
          </p>
        </div>

        <span
          className={style.dishe__content__details}
          onClick={(e) => {
            e.preventDefault();
            navigate("/detail/10");
          }}
        >
          Details...
        </span>
        <div className={style.dishe__content__type}>
          <span> {props.dishe.origem}</span>
          <span> {props.dishe.type}</span>
        </div>
        <div className={style.dishe__content__type}>
          <span className={style.dishe__content__price}>$ {props.dishe.price}</span>
          <span>{props.dishe.volume}</span>
        </div>
      </div>
    </article>
  );
};

export default DisheDrink;
