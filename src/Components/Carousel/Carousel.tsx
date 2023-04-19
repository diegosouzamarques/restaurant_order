import style from "./Carousel.module.scss";
import  "./Carousel.css";
import Flickity from "react-flickity-component";
import napolitana from "../../assets/img/Pizza napolitana.png";
import scaled from "../../assets/img/DSF5019-6-scaled.jpg";
import imgExemplo from "../../assets/img/images.jpg";

const flickityOptions = {
  initialIndex: 1,
  wrapAround: true
};

const Carousel = () => {
  return (
    <Flickity
      options={flickityOptions}
    >
      <img className={style.img} src={napolitana} />
      <img className={style.img} src={imgExemplo} />
      <img className={style.img} src={scaled} />
      <img className={style.img} src={napolitana} />
      <img className={style.img} src={imgExemplo} />
    </Flickity>
  );
};

export default Carousel;
