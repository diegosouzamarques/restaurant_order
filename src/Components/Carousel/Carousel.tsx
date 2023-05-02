import style from "./Carousel.module.scss";
import "./Carousel.css";
import Flickity from "react-flickity-component";
import classNames from "classnames";

const flickityOptions = {
  initialIndex: 1,
  wrapAround: true,
};

interface ICarrousel {
  imagens?: File[];
}

const Carousel = ({ ...props }: ICarrousel) => {
  return (
    <div
      className={classNames({
        [style.carrousel__photos]: true,
        [style.carrousel__photos__visible]: props.imagens
          ? props.imagens?.length > 0
          : false,
      })}
    >
      <Flickity options={flickityOptions}>
        {props.imagens?.map((photo, index) => (
          <img
            key={index}
            src={URL.createObjectURL(photo)}
          />
        ))}
      </Flickity>
    </div>
  );
};

export default Carousel;
