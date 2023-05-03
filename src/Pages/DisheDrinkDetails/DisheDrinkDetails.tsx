import { useParams, useNavigate } from "react-router-dom";
import style from "./DisheDrinkDetails.module.scss";
import Carousel from "../../Components/Carousel/Carousel";
import Imagem from "../../Type/Image";
import { useState, useEffect } from "react";

import cardapio from "../../assets/data/dados.json";
import DisheDrink from "../../Components/DisheDrink/DisheDrink";
import DisheDrinkType from "../../Type/DisheDrink";

const DisheDrinkDetails = () => {
  const [prato, setPrato] = useState<DisheDrinkType>();
  const navigate = useNavigate();
  const imagens: Imagem[] = [];
  const { id } = useParams();

  useEffect(() => {
    let achou = cardapio.find((element) => element.id === Number(id));
    console.log(achou);
    if (achou)
      setPrato({
        id: Number(achou.id),
        descript: achou.descript ?? "",
        origem: achou.origem ?? "",
        price: achou.price ?? "",
        title: achou.title ?? "",
        type: achou.type ?? "",
        volume: achou.volume ?? "",
      });
  }, []);

  return (
    <>
      {prato && (
        <div className={style.container}>
          <DisheDrink dishe={prato} cardMode={false} />
        </div>
      )}
    </>
  );
};

export default DisheDrinkDetails;
