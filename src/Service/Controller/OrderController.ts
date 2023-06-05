import { OrderStatus } from "../../Enum/OrderStatus";
import { Order } from "../../Model/Order";
import { OrderItem } from "../../Model/OrderItem";
import { addItem, create } from "../BackEnd/OrderApi";
import { getAll } from "../BackEnd/TableApi";

export const ListOrderd = async () => {
  let rs = await getAll();
  return rs;
};

export const RegisterOrder = async (
  tableId = 0,
  requester = "",
  note = "",
  items: Array<OrderItem> | undefined
) => {
  let data = new Date();
  let add = new Order(
    undefined,
    tableId,
    requester,
    note,
    data,
    OrderStatus.opened
  );
  let rs = await create(add);
  add.id = rs.id;

  if(rs.id){
    let orderId = rs.id;
    items?.forEach(async(i)=>{
        i.orderId = orderId;
        await addItem(i);
    });
  }
  return add;
};
