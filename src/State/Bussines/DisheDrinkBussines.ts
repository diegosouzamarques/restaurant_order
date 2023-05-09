import { KindDisheDrink } from "../../Enum/KindDisheDrink";

const DisheDrinkBussines = (id: number | undefined,
    kind: KindDisheDrink,
    title = "",
    descript = "",
    origin = "",
    type = "",
    volume = "",
    price = 0) => {

    if (kind <= 0) throw new Error("Kind cannot be blank or null.");  

    if (title.trim().length <= 0) throw new Error("Title cannot be blank or null.");

    if (descript.trim().length <= 0) throw new Error("Title cannot be blank or null.");

    if (price <= 0) throw new Error("Price cannot be blank or null.");  

}

export default DisheDrinkBussines;