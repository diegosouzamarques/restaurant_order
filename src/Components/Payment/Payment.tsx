import { useEffect, useRef, useState } from "react";
import Select from "../Inputs/Select/Select";
import Option from "../../Type/Option";
import InputDefault from "../Inputs/InputDefault/InputDefault";
import Button from "../Button/Button";
import style from "./Payment.module.scss";
import PaymentMade from "../../Type/PaymentMade";
import { PaymentType } from "../../Enum/PaymentType";

interface propsPayment {
  show: boolean;
  addItem: (pay: PaymentMade) => void;
  cancelItem: () => void;
}

const Payment = ({ ...props }: propsPayment) => {
  const opcoesPay: Option[] = [
    { id: "", name: "Escolha Tipo Pagamento" },
    { id: 1, name: "Cartão de Crédito" },
    { id: 2, name: "Cartão de Débito" },
    { id: 3, name: "Dinheiro" },
    { id: 4, name: "Pix" },
    { id: 5, name: "Desconto" }
  ];

  const ref = useRef<HTMLDialogElement>(null);
  const select = useRef<HTMLSelectElement>(null);

  const [pay, setPay] = useState<PaymentMade>();
  const [optionPay, setOptionPay] = useState<Option>();
  const [valuePay, setValuePay] = useState("");

  useEffect(() => {
    const dialog = ref.current;
    const selectPay = select.current;

    if (props.show && dialog && !pay) {
      dialog.showModal();
      setValuePay("");
      setOptionPay(undefined);
      if (selectPay) selectPay.selectedIndex = 0;
    } else if (pay) {
      if (props.addItem) {
        props.addItem(pay);
        setPay(undefined);
        closeDialog();
      }
    }
  }, [props.show, pay]);

  const closeDialog = () => {
    const dialog = ref.current;

    if (props.show && dialog) {
      dialog.close();
    }
  };

  const clickCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    closeDialog();
    props.cancelItem();
  };

  const setPaymentType = (key: number) => {
    switch (key) {
      case 1: {
        return PaymentType.Credit_Card;
      }
      case 2: {
        return PaymentType.Debit_Card;
      }
      case 3: {
        return PaymentType.Cash;
      }
      case 4: {
        return PaymentType.Pix;
      }
      case 5: {
        return PaymentType.Discount;
      }
      default: {
        return PaymentType.Cash;
      }
    }
  };

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (optionPay && Number(valuePay) > 0) {
      setPay({
        id: Number(optionPay?.id),
        name: optionPay.name,
        value: Number(valuePay),
        type: setPaymentType(Number(optionPay.id))
      });
    }
  };

  const setPayment = (value: string) => {
    let id = Number(value);
    let payment = opcoesPay.find((element) => element.id === id) ?? null;

    if (payment) setOptionPay(payment);
  };

  return (
    <dialog ref={ref}>
      <form onSubmit={aoSalvar}>
        <Select
          ref={select}
          id="pay_type"
          title="Tipo"
          options={opcoesPay}
          selectedValue={opcoesPay[0]}
          toChange={setPayment}
          required
        ></Select>
        <InputDefault
          id="payment"
          type="number"
          title="Valor"
          maxCharacter={10}
          value={valuePay}
          toChange={(value) => setValuePay(value)}
          required
          onlyPositiveNumber
        ></InputDefault>
        <div className={style.btns}>
          <Button type="submit" nipple="order" className={style.btns__size}>
            Ok
          </Button>
          <Button
            type="button"
            nipple="shut"
            onClick={clickCancel}
            className={style.btns__size}
          >
            Cancel
          </Button>
        </div>
      </form>
    </dialog>
  );
};

export default Payment;
