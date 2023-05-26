import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { DisheDrinks } from "../../Atom/DisheDrinks";

const useListDisheDrink = () => {
    //RefresApi();
    return useRecoilValue(DisheDrinks);
}

const RefresApi = () => {
    const refresh = useRecoilRefresher_UNSTABLE(DisheDrinks);
    refresh();
}

export default useListDisheDrink;