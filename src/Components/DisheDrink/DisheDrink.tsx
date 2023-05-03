import style from "./DisheDrink.module.scss";
import { useNavigate } from "react-router-dom";
import Carousel from "../../Components/Carousel/Carousel";
import Imagem from "../../Type/Image";
import DisheDrinkType from "../../Type/DisheDrink";
import classNames from "classnames";

interface propsDisheDrink {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  dishe: DisheDrinkType;
  cardMode: boolean;
}

const DisheDrink = ({ ...props }: propsDisheDrink) => {
  const navigate = useNavigate();

  const imagens: Imagem[] = [];

  return (
    <article className={style.dishe}>
      <Carousel></Carousel>
      <div className={style.dishe__content}>
        <div
          data-id={props.dishe.id}
          className={classNames({
            [style.dishe__content__select]: props.onClick,
          })}
          onClick={props.onClick}
        >
          <h1
            className={classNames({
              [style.dishe__content__title]: props.cardMode,
            })}
          >
            {props.dishe.title}
          </h1>
          <p
            className={classNames({
              [style.dishe__content__descript]: props.cardMode,
            })}
          >
            {props.dishe.descript}
          </p>
        </div>

        {props.cardMode && (
          <span
            className={style.dishe__content__details}
            onClick={(e) => {
              e.preventDefault();
              navigate("/detail/8");
            }}
          >
            Details...
          </span>
        )}

        <div className={style.dishe__content__type}>
          <span> {props.dishe.origem}</span>
          <span> {props.dishe.type}</span>
        </div>
        <div className={style.dishe__content__type}>
          <span className={style.dishe__content__price}>
            $ {props.dishe.price}
          </span>
          <span>{props.dishe.volume}</span>
        </div>
      </div>
    </article>
  );
};

export default DisheDrink;
