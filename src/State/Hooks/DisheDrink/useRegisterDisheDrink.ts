import { useSetRecoilState } from "recoil";
import { DisheDrinks } from "../../Atom/DisheDrinks";
import { DisheDrink } from "../../../Model/DisheDrink";
import { KindDisheDrink } from "../../../Enum/KindDisheDrink";
import { create, createImage } from "../../../Service/DisheDrinkApi";

const useRegisterDisheDrink = () => {
  const setListDisheDrink = useSetRecoilState<DisheDrink[]>(DisheDrinks);
  return (
    id: number | undefined,
    kind: KindDisheDrink,
    title = "",
    descript = "",
    origin = "",
    type = "",
    volume = "",
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
    create(add)
      .then((res) => {
        add.id = res.id;
        files?.forEach((i) => {
          if (add.id)
            createImage(add.id, i).catch((err) => {
              throw new Error(err);
            });
        });
        return setListDisheDrink((listOld) => [...listOld, add]);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
};

export default useRegisterDisheDrink;
