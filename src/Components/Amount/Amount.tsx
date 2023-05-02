import { useEffect, useRef } from "react";
import Button from "../Button/Button";
import ItemOrder from "../../Type/Item";
import Text from "../Text/Text";
import InputDefault from "../Inputs/InputDefault/InputDefault";

interface propsAmount {
  show: boolean;
  itemOrder: ItemOrder | undefined;
  toChange?: (value: string) => void;
  addItem:()=>void; 
}

const Amount = ({ ...props }: propsAmount) => {
  const ref = useRef<HTMLDialogElement>(null);

  const clickAmount = (event: React.MouseEvent<HTMLButtonElement>) => {
    const dialog = ref.current;

    if (props.show && dialog){
        props.addItem();
        dialog.close();
    } 
  };

  useEffect(() => {
    const dialog = ref.current;

    if (props.show && dialog) dialog.showModal();
  }, [props.show]);

  return (
    <dialog ref={ref}>
      <Text title="Item" text={props.itemOrder?.title ?? ""}></Text>
      <InputDefault
        id="amount"
        title="Amount"
        type="number"
        min={1}
        required
        value={String(props.itemOrder?.qtd)}
        toChange={props.toChange}
      ></InputDefault>
      <Button type="submit" nipple="order" onClick={clickAmount}>
        OK
      </Button>
    </dialog>
  );
};

export default Amount;
