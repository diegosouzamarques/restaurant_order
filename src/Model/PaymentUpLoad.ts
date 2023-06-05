import { PaymentType } from "../Enum/PaymentType";
import PaymentMade from "../Type/PaymentMade";

export class paymentItem {
    amount: number;
    type: PaymentType
    constructor(amount: number, type: PaymentType){
       this.amount = amount;
       this.type = type;
    }
}

export class PaymentUpLoad {
    orderId: number;
    items: Array<paymentItem>;

    constructor(orderId: number, payMade: PaymentMade[]){
        this.orderId = orderId;
        this.items = new Array<paymentItem>();
        payMade.forEach(i => this.items.push(new paymentItem(i.value, i.type)));
    };
}