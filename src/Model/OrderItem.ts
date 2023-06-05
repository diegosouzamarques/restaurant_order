export class OrderItem {
  id: number | undefined;
  disheDrinkId: number;
  orderId: number;
  readonly title: string;
  readonly amount: number;
  readonly price: number;

  constructor(id = 0, disheDrinkId = 0, orderId = 0, title = "", amount = 0, price = 0) {
    this.id = id;
    this.disheDrinkId = disheDrinkId;
    this.orderId = orderId;
    this.title = title;
    this.amount = amount;
    this.price = price;
  }
}
