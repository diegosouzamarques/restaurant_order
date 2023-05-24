import { KindDisheDrink } from "../Enum/KindDisheDrink";
import DisheDrinkBussines from "../State/Bussines/DisheDrinkBussines";

export class DisheDrink {
  id: number | undefined;
  readonly kind: KindDisheDrink;
  readonly title: string;
  readonly descript: string;
  readonly origin: string;
  readonly type: string;
  readonly volume: string;
  readonly price: number;

  constructor(
    id: number | undefined,
    kind: KindDisheDrink,
    title = "",
    descript = "",
    origin = "",
    type = "",
    volume = "",
    price = 0
  ) {
    DisheDrinkBussines(id,
      kind,
      title,
      descript,
      origin,
      type,
      volume,
      price);
    this.id = id;
    this.kind = kind;
    this.title = title;
    this.descript = descript;
    this.origin = origin;
    this.type = type;
    this.volume = volume;
    this.price = price;
  }
}
