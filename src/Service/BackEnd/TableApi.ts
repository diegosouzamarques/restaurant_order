import { table } from "console";
import { TableStatus } from "../../Enum/TableStatus";
import { Order } from "../../Model/Order";
import { Table } from "../../Model/Table";
import ResponseApi from "../../Type/ResponseApi";
import ApiConfig from "./ApiConfig";

const setTableStatus = (key: string) => {
  switch (key) {
    case "available": {
      return TableStatus.available;
    }
    case "occupied": {
      return TableStatus.occupied;
    }
    case "unavailable": {
      return TableStatus.unavailable;
    }
    case "occupied": {
      return TableStatus.occupied;
    }
    default: {
      return TableStatus.available;
    }
  }
};

const mapTable = (table: Table) => {

  let key : string = Object.keys(TableStatus).find((i) => {
    return i === table.status;
  })??"available";
  table.status = setTableStatus(key);
  if (table.order) {
    table.order = new Order(
      table.order.id,
      table.order.tableId,
      table.order.requester,
      table.order.note,
      undefined,
      table.order.status,
      table.order.amount
    );
  }
};

export const getAll = async () => {
  const response = (await ApiConfig.get<ResponseApi<Table[]>>("/Table")).data;
  let rs = response.data;
  rs.map(mapTable);
  return rs;
};

export const getStatus = async (status: TableStatus) => {
  let key =
    Object.keys(TableStatus)[Object.values(TableStatus).indexOf(status)];
  const response = (
    await ApiConfig.get<ResponseApi<Table[]>>("/Table/status", {
      params: { status: key },
    })
  ).data;
  let rs = response.data;
  rs.map(mapTable);
  return rs;
};

export const create = async (table: Table): Promise<Table> => {
  let jsonTable = JSON.stringify(table, (key, value) => {
    if (key == "status")
      return Object.keys(TableStatus)[
        Object.values(TableStatus).indexOf(value)
      ];
    return value;
  });
  const response = (
    await ApiConfig.post<ResponseApi<Table>>("/Table", jsonTable)
  ).data;
  return response.data;
};
