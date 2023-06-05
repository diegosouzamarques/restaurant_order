import classNames from "classnames";
import Button from "../../Components/Button/Button";
import InputDefault from "../../Components/Inputs/InputDefault/InputDefault";
import Select from "../../Components/Inputs/Select/Select";
import TextArea from "../../Components/Inputs/TextArea/TextArea";
import ListItem from "../../Components/ListItem/ListItem";
import Option from "../../Type/Option";
import style from "./Order.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuItem from "../../Components/MenuItem/MenuItem";
import Amount from "../../Components/Amount/Amount";
import { OrderItem } from "../../Model/OrderItem";
import {
  DisheDrink,
  DisheDrink as DisheDrinkModel,
} from "../../Model/DisheDrink";
import { ListTable } from "../../Service/Controller/TableController";
import { Table as TableModel } from "../../Model/Table";
import { RegisterOrder } from "../../Service/Controller/OrderController";
import { ListDisheDrink } from "../../Service/Controller/DisheDrinkController";
import { OrderStatus } from "../../Enum/OrderStatus";
import { getStatus } from "../../Service/BackEnd/TableApi";
import { TableStatus } from "../../Enum/TableStatus";
import SpinnerBox from "../../Components/SpinnerBox/SpinnerBox";

const Order = () => {
  const navigate = useNavigate();
  const [requester, setRequester] = useState("");
  const [table, setTable] = useState(0);
  const [note, setNote] = useState("");
  const [menu, setMenu] = useState(false);
  const [showAmount, setShowAmount] = useState(false);
  const [itemOrder, setItemOrder] = useState<OrderItem>();
  const [items, setItems] = useState<OrderItem[]>([]);
  const [opcoes, setOpcoes] = useState<Option[]>([
    { id: -1, name: "Escolha uma mesa" },
  ]);
  const [pratos, setPratos] = useState<DisheDrink[]>([]);
  const [spinner, setSpinner] = useState(false);
  const [title, setTitle] = useState<string>();

  useEffect(() => {

      setSpinner(true);
      Promise.all([getStatus(TableStatus.available), ListDisheDrink()]).then(
        (values) => {
          if (values[0]) {
            let statusList = values[0];
            statusList.map((item) => {
              setOpcoes((old) => [
                ...old,
                { id: Number(item.id), name: item.title },
              ]);
            });
          }
          if (values[1]) {
            setPratos(values[1]);
          }         
        }
      ).catch(console.log).finally(() => setSpinner(false));
  }, []);

  const addItem = () => {
    if (itemOrder) setItems((oldsItems) => [...oldsItems, itemOrder]);
    setShowAmount(false);
  };

  const back_navigate = () => {
    navigate("/");
  };

  const onBack = () => {
    setMenu(false);
    let button_back = document.getElementById("button_back");
    if (button_back) button_back.onclick = back_navigate;
  };

  const setValue = (value: string) => {
    setItemOrder({
      id: itemOrder?.id,
      disheDrinkId: itemOrder?.disheDrinkId ?? 0,
      orderId: itemOrder?.orderId ?? 0,
      title: itemOrder?.title ?? "",
      amount: Number(value),
      price: itemOrder?.price ?? 0,
    });
  };

  const clickItem = (selected: DisheDrinkModel) => {
    let item = new OrderItem(
      undefined,
      selected.id,
      undefined,
      selected.title,
      0,
      selected.price
    );
    setItemOrder(item);
    onBack();
    setShowAmount(true);
  };

  const aoSalvar = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    try {
      setSpinner(true);
      setTitle("Registering");

      await RegisterOrder(table, requester, note, items);

      setSpinner(false);
      setTitle(undefined);
    } catch (error) {
      setSpinner(false);
      setTitle(undefined);
      let e = error as Error;
    }
  };

  return (
    <SpinnerBox visible={spinner} title={title}>
      <Amount
        show={showAmount}
        itemOrder={itemOrder}
        toChange={setValue}
        addItem={addItem}
      ></Amount>
      {menu && (
        <MenuItem
          show={menu}
          onSelected={clickItem}
          onBack={onBack}
          listDisheDrink={pratos}
        ></MenuItem>
      )}

      <form
        onSubmit={aoSalvar}
        className={classNames({
          [style.container]: true,
          [style.container__visible]: menu,
        })}
      >
        <Button
          type="submit"
          nipple="order"
          className={style.container__btn_Salvar}
        >
          Gravar
        </Button>
        <div className={style.container__fields}>
          <div>
            <InputDefault
              id="requester"
              title="Solicitante"
              type="text"
              value={requester}
              toChange={(value) => setRequester(value)}
            ></InputDefault>
            <Select
              id="table"
              title="Mesa"
              options={opcoes}
              selectedValue={opcoes[0]}
              toChange={(value) => {
                let i = Number(value);
                setTable(i);
              }}
            ></Select>
            <TextArea
              id="note"
              title="Observação"
              placeholder="Observação"
              maxCharacter={350}
              value={note}
              toChange={(value) => setNote(value)}
            ></TextArea>
          </div>
          <div>
            <Button
              className={style.container__fields__btn}
              type="button"
              nipple="item"
              onClick={(e) => {
                e.preventDefault();
                setMenu(true);
                setShowAmount(false);
              }}
            >
              Escolha Prato & Bebida
            </Button>
            <ListItem items={items} close={false}></ListItem>
          </div>
        </div>
      </form>
    </SpinnerBox>
  );
};

export default Order;
