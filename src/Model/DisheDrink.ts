import { KindDisheDrink } from "../Enum/KindDisheDrink";

export class DisheDrink {
  readonly id: number | undefined;
  readonly kind: KindDisheDrink;
  readonly title: string;
  readonly descript: string;
  readonly origin: string;
  readonly type: string;
  readonly volume: string;
  readonly price: number;

  constructor(
    id = undefined,
    kind = KindDisheDrink.Dishe,
    title = "",
    descript = "",
    origin = "",
    type = "",
    volume = "",
    price = 0
  ) {
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