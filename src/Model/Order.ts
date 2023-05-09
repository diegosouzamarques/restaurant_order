import OrderBussines from "../State/Bussines/OrderBussines";
import { OrderItem } from "./OrderItem";

export class Order {
  readonly id: number | undefined;
  readonly tableId: number;
  readonly requester: string;
  readonly note: string;
  readonly date: Date | undefined;
  readonly items: Array<OrderItem> | undefined;

  constructor(
    id: number | undefined,
    tableId = 0,
    requester = "",
    note = "",
    date: Date | undefined,
    items: Array<OrderItem> | undefined
  ) {
    OrderBussines(id, tableId, requester, note, date, items);
    this.id = id;
    this.tableId = tableId;
    this.requester = requester;
    this.note = note;
    this.date = date;
    this.items = items;
  }

  total(): number {
    if (!this.items || this.items.length <= 0) return 0;

    return this.items.reduce((counter, item) => {
      return counter + item.price * item.quantity;
    }, 0);
  }
}
