import style from "./DisheDrink.module.scss";
import { useNavigate } from "react-router-dom";
import Carousel from "../../Components/Carousel/Carousel";
import classNames from "classnames";
import { DisheDrink as DisheDrinkModel } from "../../Model/DisheDrink";
import { getListImage, downloadImage } from "../../Service/DisheDrinkApi";
import { useEffect, useState } from "react";

interface propsDisheDrink {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  dishe: DisheDrinkModel;
  cardMode: boolean;
}

const DisheDrink = ({ ...props }: propsDisheDrink) => {
  const navigate = useNavigate();
  const [imagens, setImagens] = useState<File[]>([]);

  const getImages = () => {
    if (props.dishe.id) {
      getListImage(props.dishe.id)
        .then((res) => {
          res.forEach((i) => {
            downloadImage(i.id).then((foto) => {
              if (foto) {
                setImagens((prevState) => [foto!, ...prevState!]);
              }
            });
          });
        })
        .catch(console.log);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <article className={style.dishe}>
      <Carousel id={String(props.dishe.id)} imagens={imagens}></Carousel>
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
          <span> {props.dishe.origin}</span>
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
