import { Order } from "../../Model/Order";
import { OrderItem } from "../../Model/OrderItem";

export const ListOrder = async () => {
    const now = new Date();
let ped = new Order(10, 1, "Maria Marques", "TESTE TESTE", now, [
    {
     id: 1,
     disheDrinkId: 1,
     orderId: 10,
     title: "Pizza Marguerita",
     quantity: 3,
     price: 10.50
    }
]);
        return [
            ped,
            ped,
            ped,
            ped
        ];
 }

export const RegisterOrder = async (id: number | undefined,
    tableId = 0,
    requester = "",
    note = "",
    date: Date | undefined,
    items: Array<OrderItem> | undefined) => {
    let rs = await ListOrder();
    let List: Order[] = rs;
    let add = new Order(id, tableId, requester, note, date, items);
    return List.push(add);
    
  };