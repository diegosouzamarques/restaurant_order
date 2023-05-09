export class OderItem {
  readonly id: number | undefined;
  readonly disheDrinkId: number;
  readonly oderId: number;
  readonly quantity: number;
  readonly price: number;

  constructor(id = undefined, disheDrinkId = 0, oderId = 0, quantity = 0, price = 0) {
    this.id = id;
    this.disheDrinkId = disheDrinkId;
    this.oderId = oderId;
    this.quantity = quantity;
    this.price = price;
  }
}
