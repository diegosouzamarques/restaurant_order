import style from "./Carousel.module.scss";
import  "./Carousel.css";
import Flickity from "react-flickity-component";
import Imagem from "../../Type/Image";

const flickityOptions = {
  initialIndex: 1,
  wrapAround: true
};


interface ICarrousel {
  imagens?: File[]
}

const Carousel = ({...props}:ICarrousel) => {
  return (
    
    <Flickity
      options={flickityOptions}
    >
      {props.imagens?.map((photo, index) => (
          <img key={index} className={style.img} src={URL.createObjectURL(photo)}/>
        ))}
      
    </Flickity>
  );
};

export default Carousel;
