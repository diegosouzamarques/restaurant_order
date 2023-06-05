import { TableStatus } from "../Enum/TableStatus";
import TableBussines from "../Service/Bussines/TableBussines";
import { Order } from "./Order";

export class Table {
   id: number | undefined;
  readonly title: string;
  readonly amountPeople: number;
   status: TableStatus;
   order: Order | undefined;

  constructor(
    id: number | undefined,
    title = "",
    amoutPeople = 0,
    status: TableStatus,
    order = undefined
  ) {
    TableBussines(title, amoutPeople);
    this.id = id;
    this.title = title;
    this.amountPeople = amoutPeople;
    this.status = status;
    this.order = order;
  }

}
