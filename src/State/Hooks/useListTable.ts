import { Tables } from "../Atom/Tables";
import { useRecoilValue } from "recoil";

const useListTable = () => {
    return useRecoilValue(Tables);
}

export default useListTable;