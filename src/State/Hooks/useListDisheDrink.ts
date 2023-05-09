import { useRecoilValue } from "recoil";
import { DisheDrinks } from "../Atom/DisheDrinks";

const useListDisheDrink = () => {
    return useRecoilValue(DisheDrinks);
}

export default useListDisheDrink;