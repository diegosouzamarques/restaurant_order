import classNames from "classnames";
import style from "./Carousel.module.scss";
import { useEffect, useState } from "react";

interface ICarrousel {
  id?: string;
  imagens?: File[];
}

const Carousel = ({ ...props }: ICarrousel) => {
  const [imagens, setImagens] = useState<string[]>([]);
  const [css, setCss] = useState({});
  const [width, setWidth] = useState({});
  const translateAmount = 100;
  const [translate, setTranslate] = useState(0);
  const [prevVisible, setPrevVisible] = useState(true);
  const [nextVisible, setNextVisible] = useState(true);

  useEffect(() => { 
    if (props.imagens && props.imagens?.length > 0) {
      if (props.imagens?.length > 1)
        setWidth({ width: props.imagens?.length * 100 + "%" });

      if(imagens.length < props.imagens?.length){
        setImagens(props.imagens.map(photo => URL.createObjectURL(photo)));
      }     
    }

    setCss({
      transform: `translateX(${translate}%)`,
    });

    if (props.imagens) {
      setPrevVisible(!(props.imagens.length <= 1 || translate === 0));

      setNextVisible(false);
      if (props.imagens?.length > 1)
        setNextVisible(
          translate === 0 ||
            !(translate === (props.imagens?.length - 1) * 100 * -1)
        );
    }
  }, [props.imagens, translate]);

  const slide = (direction: string) => {
    direction === "next"
      ? setTranslate(translate - translateAmount)
      : setTranslate(translate + translateAmount);
  };

  return (
    <div className={style.carousel}>
      {imagens.length > 0 && (
        <>
          <i
            onClick={(e) => slide("prev")}
            className={classNames({
              [style.carousel__btn]: true,
              [style.carousel__btn__left]: true,
              [style.carousel__btn__visible]: prevVisible,
            })}
          ></i>
          <i
            onClick={(e) => slide("next")}
            className={classNames({
              [style.carousel__btn]: true,
              [style.carousel__btn__right]: true,
              [style.carousel__btn__visible]: nextVisible,
            })}
          ></i>
        </>
      )}
      <div className={style.carousel__slides}>
        <div className={style.carousel__slides__items} style={width}>
          {imagens.length <= 0 && (
            <img
              className={classNames([
                style.carousel__slides__items__item,
                style.carousel__slides__items__empty,
              ])}
            />
          )}
          {imagens.length > 0 &&
            imagens.map((photo, index) => {
              if (photo) {
                return (
                  <div
                    key={index}
                    className={classNames([
                      style.carousel__slides__items__item,
                    ])}
                    style={css}
                  >
                    <img
                      className={style.carousel__slides__items__item__size}
                      key={index}
                      src={photo}
                    />
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
