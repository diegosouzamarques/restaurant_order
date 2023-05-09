import { useParams, useNavigate } from "react-router-dom";
import style from "./DisheDrinkDetails.module.scss";
import Imagem from "../../Type/Image";
import { useState, useEffect } from "react";

import cardapio from "../../assets/data/dados.json";
import DisheDrink from "../../Components/DisheDrink/DisheDrink";
import { DisheDrink as DisheDrinkModel } from "../../Model/DisheDrink";
import { KindDisheDrink } from "../../Enum/KindDisheDrink";


const DisheDrinkDetails = () => {
  const [prato, setPrato] = useState<DisheDrinkModel>();
  const navigate = useNavigate();
  const imagens: Imagem[] = [];
  const { id } = useParams();

  useEffect(() => {
    let achou = cardapio.find((element) => element.id === Number(id));
    if (achou)
      setPrato({
        id: Number(achou.id),
        kind: KindDisheDrink.Dishe,
        descript: achou.descript,
        origin: achou.origem,
        price: Number(achou.price),
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
