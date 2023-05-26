import { atom, selector } from "recoil";
import { DisheDrink } from "../../Model/DisheDrink";
import { getAll } from "../../Service/DisheDrinkApi";

export const DisheDrinks = atom<DisheDrink[]>({
  key: "DisheDrinks",
  default: selector({
    key: "DisheDrinks/initial",
    get: () => {
      console.log("atom DisheDrinks");
      return getAll();
    },
  }),
});
