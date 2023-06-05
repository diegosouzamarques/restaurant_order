import { useEffect, useRef } from "react";
import Button from "../Button/Button";
import Text from "../Text/Text";
import InputDefault from "../Inputs/InputDefault/InputDefault";
import style from "./Amount.module.scss";
import { OrderItem } from "../../Model/OrderItem";

type propsAmount = {
  show: boolean;
  itemOrder: OrderItem | undefined;
  toChange?: (value: string) => void;
  addItem: () => void;
}

const Amount = ({ ...props }: propsAmount) => {
  const ref = useRef<HTMLDialogElement>(null);

  const closeDialog = ()=>{
    const dialog = ref.current;

    if (props.show && dialog) {
      dialog.close();
    }
  }

  const clickCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    closeDialog();
  };

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    if (props.addItem){
      props.addItem();
      closeDialog();
    }

}

  useEffect(() => {
    const dialog = ref.current;

    if (props.show && dialog) dialog.showModal();
  }, [props.show]);

  return (
    <dialog ref={ref}>
       <form onSubmit={aoSalvar}>
        <Text title="Item" text={props.itemOrder?.title ?? ""}></Text>
        <InputDefault
          id="amount"
          title="Amount"
          type="number"
          required
          value={String(
            props.itemOrder?.amount && props.itemOrder?.amount > 0
              ? props.itemOrder?.amount
              : ""
          )}
          toChange={props.toChange}
        ></InputDefault>
        <div className={style.btns}>
          <Button
            type="submit"
            nipple="order"
            className={style.btns__size}
          >
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

export default Amount;
