import { atom, selector } from "recoil";
import { TableStatus } from "../../Enum/TableStatus";
import { Table } from "../../Model/Table";
import { Order } from "../../Model/Order";
import RepoApi from "../../Service/ApiConfig";
import ResponseApi from "../../Type/ResponseApi";

export const Tables = atom<Table[]>({
    key:"tables",
    default: selector({
        key: 'tables/initial',
        get: async () => {
            const response = (await RepoApi.get<ResponseApi<Table[]>>('/Table')).data;
            let rs = response.data;
         
            rs.map(table => {                
                table.status = Object.values(TableStatus).find((i)=> {return i === table.status})??TableStatus.available; 
                if(table.order){
                    table.order = new Order(table.order.id, table.order.tableId, table.order.requester, table.order.note, undefined, undefined, table.order.amount);         
                }                
            });           
          return rs;
        }
      })
});