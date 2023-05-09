import { atom } from "recoil";
import { TableStatus } from "../../Enum/TableStatus";
import { Table } from "../../Model/Table";
import { Oder } from "../../Model/Oder";

const now = new Date();
let ped = new Oder(10, 1, "Maria Marques", "TESTE TESTE", now, [
    {
     id: 1,
     disheDrinkId: 1,
     oderId: 10,
     quantity: 3,
     price: 10.50
    }
]);

export const Tables = atom<Table[]>({
    key:"tables",
    default:[
        {
            id: 1,
            title:"MESA 01",
            order:ped, 
            amountPeople: 2,
            status: TableStatus.occupied,
        },
        {
            id: 2,
            title:"MESA 02",
            order:ped, 
            amountPeople: 2,
            status: TableStatus.unavailable, 
        },
        {
            id: 3,
            title:"MESA 03",
            order:ped, 
            amountPeople: 2,
            status: TableStatus.dirty,
        },
        {
            id: 4,
            title:"MESA 04",
            order:ped, 
            amountPeople: 0,
            status: TableStatus.available, 
        },
        {
            id: 5,
            title:"MESA 05",
            order:ped, 
            amountPeople: 0,
            status: TableStatus.available,
        },
        {
            id: 6,
            title:"MESA 06",
            order:ped, 
            amountPeople: 0,
            status: TableStatus.available, 
        }
    ]
});