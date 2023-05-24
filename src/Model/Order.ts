import OrderBussines from "../State/Bussines/OrderBussines";
import { OrderItem } from "./OrderItem";

export class Order {
  readonly id: number | undefined;
  readonly tableId: number;
  readonly requester: string;
  readonly note: string;
  readonly date: Date | undefined;
  readonly items: Array<OrderItem> | undefined;
  readonly amount: number;

  constructor(
    id: number | undefined,
    tableId = 0,
    requester = "",
    note = "",
    date: Date | undefined,
    items: Array<OrderItem> | undefined,
    amount = 0 
  ) {
    OrderBussines(id, tableId, requester, note, date, items);
    this.id = id;
    this.tableId = tableId;
    this.requester = requester;
    this.note = note;
    this.date = date;
    this.items = items;
    this.amount = amount;    
    if((items)&&(items?.length > 0))
      this.amount = 0;
  }

  total(): number {
    if (this.amount > 0)
      return this.amount;

    if (!this.items || this.items.length <= 0) return 0;

    return this.items.reduce((counter, item) => {
      return counter + item.price * item.quantity;
    }, 0);
  }
}
