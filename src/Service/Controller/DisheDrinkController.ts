import { KindDisheDrink } from "../../Enum/KindDisheDrink";
import { DisheDrink } from "../../Model/DisheDrink";
import { create, createImage, getAll } from "../BackEnd/DisheDrinkApi";

export const RegisterDisheDrink = async  (
    id: number | undefined,
    kind: KindDisheDrink,
    title = "",
    descript = "",
    origin = "",
    type = "",
    volume = 0,
    price = 0,
    files: File[] | undefined
  ) => {
    let add = new DisheDrink(
      id,
      kind,
      title,
      descript,
      origin,
      type,
      volume,
      price
    );
    let rs = await create(add);
    if(rs.id){
  
      add.id = rs.id;
      files?.forEach(async(i) => {
         await createImage(Number(rs.id), i);
      });
     return add;
    }
  };

export const ListDisheDrink = async () => {
  return await getAll();
};  