import { TableStatus } from "../../Enum/TableStatus";
import { Order } from "../../Model/Order";
import { Table } from "../../Model/Table";
import ResponseApi from "../../Type/ResponseApi";
import ApiConfig from "./ApiConfig";

export const getAll = async () => {
    const response = (await ApiConfig.get<ResponseApi<Table[]>>('/Table')).data;
    let rs = response.data;

    rs.map(table => {                
        table.status = Object.values(TableStatus).find((i)=> {return i === table.status})??TableStatus.available; 
        if(table.order){
            table.order = new Order(table.order.id, table.order.tableId, table.order.requester, table.order.note, undefined, undefined, table.order.amount);         
        }                
    });           
  return rs;
}