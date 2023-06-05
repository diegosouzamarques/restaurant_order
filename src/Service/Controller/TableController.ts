import { TableStatus } from "../../Enum/TableStatus";
import { Table } from "../../Model/Table";
import { create, getAll, getStatus } from "../BackEnd/TableApi";

export const ListTable = async () => {
  let rs = await getAll();
  return rs;
};

export const ListTableStatus = async (status: TableStatus) => {
  let rs = await getStatus(status);
  return rs;
};

export const RegisterTable = async (
  title = "",
  amoutPeople = 0,
  status: TableStatus,
  order = undefined
) => {
  let add = new Table(undefined, title, amoutPeople, status, order);

  let rs = await create(add);

  add.id = rs.id;
  return add;
};