import { useRecoilValue } from "recoil";
import { Orders } from "../../Atom/Orders";

const useListOrder = () => {
    return useRecoilValue(Orders);
}

export default useListOrder;