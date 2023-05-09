import { useSetRecoilState } from "recoil";
import { Order } from "../../../Model/Order";
import { Orders } from "../../Atom/Orders";
import { OrderItem } from "../../../Model/OrderItem";

const useRegisterOrder = () => {
  const setListOrder = useSetRecoilState<Order[]>(Orders);
  return (
    id: number | undefined,
    tableId = 0,
    requester = "",
    note = "",
    date: Date | undefined,
    items: Array<OrderItem> | undefined
  ) => {
    let add = new Order(id, tableId, requester, note, date, items);
    return setListOrder((listOld) => [...listOld, add]);
  };
};

export default useRegisterOrder;
