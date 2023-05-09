import { useSetRecoilState } from "recoil";
import { DisheDrinks } from "../../Atom/DisheDrinks";
import { DisheDrink } from "../../../Model/DisheDrink";
import { KindDisheDrink } from "../../../Enum/KindDisheDrink";

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
    price = 0
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
    return setListDisheDrink((listOld) => [...listOld, add]);
  };
};

export default useRegisterDisheDrink;
