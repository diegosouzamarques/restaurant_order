import { PaymentType } from "../Enum/PaymentType";

type PaymentMade = {
  id: number;
  name: string;
  value: number;
  type: PaymentType;
};

export default PaymentMade;
