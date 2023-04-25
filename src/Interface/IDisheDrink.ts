import { KindDisheDrink } from "../Enum/KindDisheDrink";

export interface IDisheDrink{
    id?: number
    kind: KindDisheDrink,
    title: string,
    descript: string,
    origin: string,
    type: string,
    volume: number,
    price: number
}