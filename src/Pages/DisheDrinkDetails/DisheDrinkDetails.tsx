import { useParams, useNavigate } from "react-router-dom";
import style from "./DisheDrinkDetails.module.scss";
import { useState, useEffect } from "react";

import DisheDrink from "../../Components/DisheDrink/DisheDrink";
import { DisheDrink as DisheDrinkModel } from "../../Model/DisheDrink";
import { KindDisheDrink } from "../../Enum/KindDisheDrink";
import useListDisheDrink from "../../State/Hooks/DisheDrink/useListDisheDrink";


const DisheDrinkDetails = () => {
  const [prato, setPrato] = useState<DisheDrinkModel>();
  const navigate = useNavigate();
  const { id } = useParams();
  const listDishe = useListDisheDrink();

  useEffect(() => {
    let achou = listDishe.find((element) => element.id === Number(id));
    if (achou)
      setPrato({
        id: Number(achou.id),
        kind: KindDisheDrink.Dishe,
        descript: achou.descript,
        origin: achou.origin,
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
