import { TableStatus } from "../../Enum/TableStatus";
import { Tables } from "../Atom/Tables";
import { useSetRecoilState } from "recoil";
import { Table } from "../../Model/Table";

const useRegisterTable = () => {
  const setListTable = useSetRecoilState<Table[]>(Tables);
  return (
    id: number | undefined,
    title = "",
    amoutPeople = 0,
    status = TableStatus.available,
    order = undefined
  ) => {
    let add = new Table(id, title, amoutPeople, status, order);
    return setListTable((listOld) => [...listOld, add]);
  };
};

export default useRegisterTable;
