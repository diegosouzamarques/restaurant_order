import { OrderItem } from "../../Model/OrderItem";

const OrderBussines = (
  id: number | undefined,
  tableId = 0,
  requester = "",
  note = "",
  date: Date | undefined,
) => {
  if (tableId <= 0)
    throw new Error("Table cannot be blank or null.");

  if (requester.trim().length <= 0) throw new Error("Requester cannot be blank or null.");
};

export default OrderBussines;
