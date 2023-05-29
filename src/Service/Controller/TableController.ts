import { TableStatus } from "../../Enum/TableStatus";
import { Table } from "../../Model/Table";
import { getAll } from "../BackEnd/TableApi";

export const ListTable = async () => {
  let rs = await getAll();
  return rs;
};

export const RegisterTable = async (
  id: number | undefined,
  title = "",
  amoutPeople = 0,
  status = TableStatus.available,
  order = undefined
) => {
  let rs = await ListTable();
  let listTable: Table[] = rs;

  let add = new Table(id, title, amoutPeople, status, order);
  return listTable.push(add);
};
