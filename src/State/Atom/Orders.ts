import { atom } from "recoil";
import { Order } from "../../Model/Order";

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

export const Orders = atom<Order[]>({
    key:"Orders",
    default:[
        ped,
        ped,
        ped,
        ped
    ]
});