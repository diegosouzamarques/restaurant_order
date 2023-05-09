import { TableStatus } from "../Enum/TableStatus";
import TableBussines from "../State/Bussines/TableBussines";
import { Oder } from "./Oder";

export class Table {
  readonly id: number | undefined;
  readonly title: string;
  readonly amountPeople: number;
  readonly status: TableStatus;
  readonly order: Oder | undefined;

  constructor(
    id: number | undefined,
    title = "",
    amoutPeople = 0,
    status = TableStatus.available,
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
