export class OrderItem {
  readonly id: number | undefined;
  readonly disheDrinkId: number;
  readonly orderId: number;
  readonly title: string;
  readonly quantity: number;
  readonly price: number;

  constructor(id = undefined, disheDrinkId = 0, orderId = 0, title = "", quantity = 0, price = 0) {
    this.id = id;
    this.disheDrinkId = disheDrinkId;
    this.orderId = orderId;
    this.title = title;
    this.quantity = quantity;
    this.price = price;
  }
}
